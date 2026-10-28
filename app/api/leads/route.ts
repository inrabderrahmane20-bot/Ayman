import { NextResponse, type NextRequest } from 'next/server';
import { SITE, mailtoLink, whatsappLink } from '../../../lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Lead intake.
 *
 * Delivery is only reported as successful when an upstream provider has
 * actually accepted the message. If no provider is configured, the API returns
 * `delivered: false` plus WhatsApp and email fallbacks so the visitor can send
 * the same details themselves. It never pretends a message was received.
 */

type FormType = 'application' | 'contact' | 'protection' | 'private';

type Lead = {
  formType: FormType;
  name: string;
  email: string;
  phone: string;
  country: string;
  goal: string;
  experience: string;
  days: string;
  equipment: string;
  language: string;
  plan: string;
  message: string;
  source: string;
  serviceType?: string;
  preferredContact?: string;
  contactDetails?: string;
  occasion?: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  preferredTime?: string;
  preferredLanguage?: string;
  additionalRequirements?: string;
};

const MAX_BODY = 32_000;
const MIN_FILL_MS = 3_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const rateStore = globalThis as unknown as {
  __aymanLeadRate?: Map<string, number[]>;
};
const rateMap = (rateStore.__aymanLeadRate ??= new Map<string, number[]>());

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim().slice(0, 64);
  return request.headers.get('x-real-ip')?.trim().slice(0, 64) || 'unknown';
}

function sameOrigin(request: NextRequest): boolean {
  const host = request.headers.get('host');
  const allowed = new Set<string>();
  if (host) allowed.add(host.toLowerCase());
  try {
    allowed.add(new URL(SITE.url).host.toLowerCase());
    const configured = process.env.LEAD_ALLOWED_ORIGIN;
    if (configured) allowed.add(new URL(configured).host.toLowerCase());
  } catch {
    // Ignore malformed configuration; the request host still applies.
  }

  for (const header of ['origin', 'referer']) {
    const value = request.headers.get(header);
    if (!value) continue;
    try {
      const parsed = new URL(value);
      return allowed.has(parsed.host.toLowerCase());
    } catch {
      return false;
    }
  }
  // Some privacy tools strip both headers. Rate limiting and the timing check
  // still apply; avoiding a hard failure here prevents losing real enquiries.
  return true;
}

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateMap.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    rateMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateMap.set(ip, recent);

  if (rateMap.size > 2_000) {
    for (const [key, times] of rateMap) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) rateMap.delete(key);
    }
  }
  return false;
}

function summaryOf(lead: Lead): string {
  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    lead.phone ? ['Phone', lead.phone] : null,
    lead.formType === 'application' ? ['Country', lead.country] : null,
    lead.formType === 'application' ? ['Goal', lead.goal] : null,
    lead.formType === 'application' ? ['Experience', lead.experience] : null,
    lead.formType === 'application' ? ['Days per week', lead.days] : null,
    lead.formType === 'application' ? ['Equipment', lead.equipment] : null,
    lead.formType === 'application' ? ['Coaching language', lead.language] : null,
    lead.formType === 'application' && lead.plan ? ['Plan', lead.plan] : null,
    lead.formType === 'private' && lead.serviceType ? ['Service', lead.serviceType] : null,
    lead.formType === 'private' && lead.destination ? ['Destination/City', lead.destination] : null,
    lead.formType === 'private' && lead.startDate ? ['Start date', lead.startDate] : null,
    lead.formType === 'private' && lead.endDate ? ['End date', lead.endDate] : null,
    lead.formType === 'private' && lead.duration ? ['Duration', lead.duration] : null,
    lead.formType === 'private' && lead.preferredContact ? ['Preferred contact', `${lead.preferredContact}: ${lead.contactDetails || ''}`] : null,
    ['Form', lead.formType],
    ['Source', lead.source],
  ].filter((row): row is string[] => Boolean(row));

  return `${rows.map(([label, value]) => `${label}: ${value}`).join('\n')}\n\n${lead.message}`;
}

function fallbackFor(lead: Lead) {
  const summary = summaryOf(lead);
  const subject = lead.formType === 'private' ? `Private service enquiry — ${lead.name}` : `Coaching enquiry — ${lead.name}`;
  return {
    whatsapp: whatsappLink(
      `Hello Coach Ayman,\n\n${summary}\n\n(Sent from the ${lead.formType} form.)`,
    ),
    email: mailtoLink(subject, `${summary}\n\n(Sent from the ${lead.formType} form.)`),
    summary,
  };
}

function validate(payload: Record<string, unknown>): { lead?: Lead; code?: string } {
  const formType = text(payload.formType, 20) as FormType;
  if (!['application', 'contact', 'protection', 'private'].includes(formType)) {
    return { code: 'validation' };
  }
  if (formType === 'protection' && process.env.NEXT_PUBLIC_PROTECTION_LIVE !== 'true') {
    return { code: 'disabled' };
  }

  const name = text(payload.name, 120);
  const email = text(payload.email, 254).toLowerCase();
  const phone = text(payload.phone, 32);
  const country = text(payload.country, 80);
  const goal = text(payload.goal, 40);
  const experience = text(payload.experience, 40);
  const days = text(payload.days, 20);
  const equipment = text(payload.equipment, 40);
  const language = text(payload.language, 5);
  const plan = text(payload.plan, 20);
  const message = text(payload.message, 4000);
  const source = text(payload.source, 120);

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    message.length < 20 ||
    message.length > 4000 ||
    payload.consent !== true
  ) {
    return { code: 'validation' };
  }

  if (formType === 'application') {
    const required = [country, goal, experience, days, equipment];
    if (required.some((value) => value.length < 1)) return { code: 'validation' };
    if (!['en', 'fr', 'ar'].includes(language)) return { code: 'validation' };
    if (plan && !['nutrition', 'training', 'vip', 'unsure'].includes(plan)) {
      return { code: 'validation' };
    }
  }

  if (formType === 'private') {
    const serviceType = text(payload.serviceType, 40);
    const preferredContact = text(payload.preferredContact, 40);
    const contactDetails = text(payload.contactDetails, 120);
    const occasion = text(payload.occasion, 200);
    const destination = text(payload.destination, 120);
    const startDate = text(payload.startDate, 40);
    const duration = text(payload.duration, 80);
    const preferredLanguage = text(payload.preferredLanguage, 10);
    if (!serviceType || !preferredContact || !contactDetails || !occasion || !destination || !startDate || !duration || !preferredLanguage) {
      return { code: 'validation' };
    }
    if (!['protection', 'accompaniment', 'both'].includes(serviceType)) return { code: 'validation' };
    if (!['email', 'phone', 'whatsapp'].includes(preferredContact)) return { code: 'validation' };
    if (!['en', 'fr', 'ar'].includes(preferredLanguage)) return { code: 'validation' };
    const endDate = text(payload.endDate, 40);
    const preferredTime = text(payload.preferredTime, 40);
    const additionalRequirements = text(payload.additionalRequirements, 2000);
    return {
      lead: {
        formType,
        name,
        email,
        phone,
        country: text(payload.country, 80),
        goal: '',
        experience: '',
        days: '',
        equipment: '',
        language: preferredLanguage,
        plan: '',
        message: `Service: ${serviceType}\nPreferred contact: ${preferredContact} (${contactDetails})\nOccasion/Purpose: ${occasion}\nDestination/City: ${destination}\nStart date: ${startDate}${endDate ? `\nEnd date: ${endDate}` : ''}\nDuration: ${duration}${preferredTime ? `\nPreferred time: ${preferredTime}` : ''}\nPreferred language: ${preferredLanguage}${additionalRequirements ? `\n\nAdditional requirements:\n${additionalRequirements}` : ''}`,
        source,
        serviceType,
        preferredContact,
        contactDetails,
        occasion,
        destination,
        startDate,
        endDate,
        duration,
        preferredTime,
        preferredLanguage,
        additionalRequirements,
      },
    };
  }

  return {
    lead: {
      formType,
      name,
      email,
      phone,
      country,
      goal,
      experience,
      days,
      equipment,
      language,
      plan,
      message,
      source,
    },
  };
}

async function deliver(lead: Lead): Promise<{ ok: boolean; provider?: string }> {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });
      return { ok: response.ok, provider: 'webhook' };
    } catch {
      return { ok: false, provider: 'webhook' };
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false };

  const to = process.env.LEAD_TO_EMAIL || SITE.email;
  const from = process.env.LEAD_FROM_EMAIL || 'AYMAN Website <onboarding@resend.dev>';
  const subject = `[AYMAN website] ${lead.formType} — ${lead.name.replace(/[\r\n]+/g, ' ')}`;

  const rows: Array<[string, string]> = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone || '—'],
    ['Form', lead.formType],
    ['Source', lead.source || '—'],
  ];
  if (lead.formType === 'application') {
    rows.push(
      ['Country', lead.country],
      ['Goal', lead.goal],
      ['Experience', lead.experience],
      ['Days per week', lead.days],
      ['Equipment', lead.equipment],
      ['Coaching language', lead.language],
      ['Plan', lead.plan || '—'],
    );
  }

  const html = `
    <h1 style="font-family:Georgia,serif;font-size:22px">New ${escapeHtml(lead.formType)} enquiry</h1>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 14px 6px 0;color:#666">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
        )
        .join('')}
    </table>
    <h2 style="font-family:Georgia,serif;font-size:17px;margin-top:24px">Message</h2>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject,
        text: `${summaryOf(lead)}\n\nSubmitted: ${new Date().toISOString()}`,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return { ok: response.ok, provider: 'resend' };
  } catch {
    return { ok: false, provider: 'resend' };
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, code: 'origin' }, { status: 403 });
  }

  const length = Number(request.headers.get('content-length') || 0);
  if (Number.isFinite(length) && length > MAX_BODY) {
    return NextResponse.json({ ok: false, code: 'too_large' }, { status: 413 });
  }

  const ip = clientIp(request);
  if (limited(ip)) {
    return NextResponse.json({ ok: false, code: 'rate_limited' }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('bad body');
    payload = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, code: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: real visitors never see this field. A bot that fills it gets a
  // rejection, not a fake success.
  if (text(payload.website, 200).length > 0) {
    return NextResponse.json({ ok: false, code: 'spam' }, { status: 400 });
  }

  const startedAt = Number(payload.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > 24 * 60 * 60 * 1000) {
    return NextResponse.json({ ok: false, code: 'spam' }, { status: 400 });
  }

  const result = validate(payload);
  if (!result.lead) {
    if (result.code === 'disabled') {
      return NextResponse.json({ ok: false, code: 'disabled' }, { status: 404 });
    }
    return NextResponse.json({ ok: false, code: 'validation' }, { status: 400 });
  }

  const lead = result.lead;
  const delivery = await deliver(lead);
  if (delivery.ok) {
    return NextResponse.json({ ok: true, delivered: true, code: 'delivered' });
  }

  const configured = Boolean(process.env.LEAD_WEBHOOK_URL || process.env.RESEND_API_KEY);
  return NextResponse.json(
    {
      ok: true,
      delivered: false,
      code: configured ? 'delivery_failed' : 'not_configured',
      fallback: fallbackFor(lead),
    },
    { status: 200 },
  );
}

export function GET() {
  return NextResponse.json({ ok: false, code: 'method_not_allowed' }, { status: 405 });
}
