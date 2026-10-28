'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '../lib/content/types';
import { forms } from '../lib/content/forms';
import { ui } from '../lib/content/common';
import { localePath } from '../lib/routes';
import { track } from '../lib/analytics';
import { Arrow, Check, WhatsApp, Mail } from './Icons';

type Variant = 'application' | 'contact' | 'protection' | 'private';

type FormState = {
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
  consent: boolean;
  website: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

type LeadResponse = {
  ok?: boolean;
  delivered?: boolean;
  code?: string;
  fallback?: { whatsapp?: string; email?: string; summary?: string };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LeadForm({
  locale,
  variant = 'application',
  initialPlan = '',
  initialService = '',
}: {
  locale: Locale;
  variant?: Variant;
  initialPlan?: string;
  initialService?: string;
}) {
  const isApplication = variant === 'application';
  const isPrivate = variant === 'private';
  const [form, setForm] = useState<FormState & {
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
  }>({
    name: '',
    email: '',
    phone: '',
    country: '',
    goal: '',
    experience: '',
    days: '',
    equipment: '',
    language: locale,
    plan: initialPlan,
    message: '',
    consent: false,
    website: '',
    serviceType: initialService || '',
    preferredContact: '',
    contactDetails: '',
    occasion: '',
    destination: '',
    startDate: '',
    endDate: '',
    duration: '',
    preferredTime: '',
    preferredLanguage: locale,
    additionalRequirements: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'delivered' | 'fallback' | 'error'>(
    'idle',
  );
  const [serverError, setServerError] = useState('');
  const [fallback, setFallback] = useState<{ whatsapp: string; email: string; summary: string }>({
    whatsapp: '',
    email: '',
    summary: '',
  });
  const [copied, setCopied] = useState(false);
  const startedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (variant === 'application') {
      track('apply_start', { location: 'apply_page' });
    }
  }, [variant]);

  useEffect(() => {
    if (variant !== 'application' || initialPlan) return;
    const param = new URLSearchParams(window.location.search).get('plan');
    if (param === 'nutrition' || param === 'training' || param === 'vip') {
      setForm((previous) =>
        previous.plan ? previous : { ...previous, plan: param },
      );
    }
  }, [variant, initialPlan]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
    // A new edit invalidates any previous server response. Leaving the old
    // error visible would make a corrected form look as though it still failed.
    if (status === 'error') {
      setStatus('idle');
      setServerError('');
    }
    if (errors[key]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[key];
        return next;
      });
    }
  }

  function validate(): Errors {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = forms.invalidRequired[locale];
    if (!emailPattern.test(form.email.trim()) || form.email.length > 254) {
      next.email = forms.invalidEmail[locale];
    }
    if (!form.consent) next.consent = forms.invalidConsent[locale];
    if (isApplication) {
      if (form.country.trim().length < 2) next.country = forms.invalidRequired[locale];
      if (!form.goal) next.goal = forms.invalidRequired[locale];
      if (!form.experience) next.experience = forms.invalidRequired[locale];
      if (!form.days) next.days = forms.invalidRequired[locale];
      if (!form.equipment) next.equipment = forms.invalidRequired[locale];
      if (!form.language) next.language = forms.invalidRequired[locale];
      if (form.message.trim().length < 20) next.message = forms.invalidMessage[locale];
      if (form.message.length > 4000) next.message = forms.invalidMessage[locale];
    } else if (isPrivate) {
      if (!(form as any).serviceType) next.name = forms.invalidRequired[locale];
      if (!(form as any).preferredContact) next.name = forms.invalidRequired[locale];
      if (!(form as any).contactDetails?.trim()) next.email = forms.invalidRequired[locale];
      if (!(form as any).occasion?.trim()) next.message = forms.invalidRequired[locale];
      if (!(form as any).destination?.trim()) next.country = forms.invalidRequired[locale];
      if (!(form as any).startDate) next.name = forms.invalidRequired[locale];
      if (!(form as any).duration?.trim()) next.name = forms.invalidRequired[locale];
      if (!(form as any).preferredLanguage) next.language = forms.invalidRequired[locale];
    } else {
      if (form.message.trim().length < 20) next.message = forms.invalidMessage[locale];
      if (form.message.length > 4000) next.message = forms.invalidMessage[locale];
    }
    return next;
  }

  function buildSummary() {
    return [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      isApplication ? `Country: ${form.country}` : '',
      isApplication ? `Goal: ${form.goal}` : '',
      isApplication ? `Experience: ${form.experience}` : '',
      isApplication ? `Days: ${form.days}` : '',
      isApplication ? `Equipment: ${form.equipment}` : '',
      isApplication ? `Language: ${form.language}` : '',
      isApplication && form.plan ? `Plan: ${form.plan}` : '',
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setServerError('');
      // Field-level errors are shown inline; do not display the server-failure
      // panel for a client-side validation problem.
      setStatus('idle');
      requestAnimationFrame(() => {
        const first = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
        first?.focus();
      });
      return;
    }

    setErrors({});
    setServerError('');
    setStatus('submitting');
    if (variant === 'application') {
      track('apply_submit', { location: 'apply_form', plan: form.plan || 'unspecified' });
    }
    if (variant === 'contact') track('contact_submit', { location: 'contact_page' });
    if (variant === 'protection') track('protection_enquiry', { location: 'protection_page' });
    if (variant === 'private') track('protection_enquiry', { location: 'private_services_page' });

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          formType: variant,
          startedAt: startedAt.current,
          source: formatSource(),
        }),
        signal: controller.signal,
      });
      window.clearTimeout(timeout);
      const data = (await response.json().catch(() => null)) as LeadResponse | null;

      if (response.status === 429) {
        setServerError(forms.rateLimited[locale]);
        setStatus('error');
        return;
      }

      if (!response.ok || !data?.ok) {
        if (data?.fallback) {
          setFallback({
            whatsapp: data.fallback.whatsapp ?? '',
            email: data.fallback.email ?? '',
            summary: data.fallback.summary ?? buildSummary(),
          });
        }
        setServerError(
          data?.code === 'validation' ? forms.errorBody[locale] : forms.serverError[locale],
        );
        setStatus('error');
        return;
      }

      if (data.delivered) {
        setStatus('delivered');
        track(variant === 'contact' ? 'contact_delivered' : 'apply_delivered', {
          location: `${variant}_form`,
        });
      } else {
        setFallback({
          whatsapp: data.fallback?.whatsapp ?? '',
          email: data.fallback?.email ?? '',
          summary: data.fallback?.summary ?? buildSummary(),
        });
        setStatus('fallback');
        track(variant === 'contact' ? 'contact_fallback' : 'apply_fallback', {
          location: `${variant}_form`,
        });
      }
    } catch {
      window.clearTimeout(timeout);
      setServerError(forms.serverError[locale]);
      setStatus('error');
    }
  }

  function formatSource() {
    return `${variant}:${locale}`;
  }

  function resetStatus() {
    startedAt.current = Date.now();
    setStatus('idle');
    setServerError('');
    setErrors({});
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(fallback.summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  if (status === 'delivered') {
    return (
      <div
        className="panel p-6 sm:p-8"
        role="status"
        aria-live="polite"
        aria-labelledby="lead-delivered-title"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-300">
          <Check width={20} height={20} />
        </span>
        <h2 id="lead-delivered-title" className="mt-5 font-display text-2xl text-bone">
          {isPrivate ? forms.privateEnquiryTitle?.[locale] || forms.successDeliveredTitle[locale] : forms.successDeliveredTitle[locale]}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-muted">
          {isPrivate ? forms.privateEnquiryBody?.[locale] || forms.successDelivered[locale] : forms.successDelivered[locale]}
        </p>
        <Link href={localePath(locale)} className="btn btn-outline btn-sm mt-6">
          {ui.home[locale]}
          <Arrow width={14} height={14} />
        </Link>
      </div>
    );
  }

  if (status === 'fallback') {
    return (
      <div
        className="panel p-6 sm:p-8"
        role="status"
        aria-live="polite"
        aria-labelledby="lead-fallback-title"
      >
        <h2 id="lead-fallback-title" className="font-display text-2xl text-bone">
          {forms.successFallbackTitle[locale]}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-muted">
          {forms.successFallback[locale]}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {fallback.whatsapp && (
            <a
              href={fallback.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm"
              onClick={() => track('whatsapp_click', { location: 'form_fallback' })}
            >
              <WhatsApp width={15} height={15} />
              {forms.sendWhatsApp[locale]}
            </a>
          )}
          {fallback.email && (
            <a
              href={fallback.email}
              className="btn btn-outline btn-sm"
              onClick={() => track('email_click', { location: 'form_fallback' })}
            >
              <Mail width={15} height={15} />
              {forms.sendEmail[locale]}
            </a>
          )}
          <button type="button" className="btn btn-ghost btn-sm" onClick={copySummary}>
            {copied ? forms.copied[locale] : forms.copyMessage[locale]}
          </button>
        </div>
        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-xs leading-relaxed text-dim">{forms.fallbackHint[locale]}</p>
          <button
            type="button"
            className="mt-3 text-sm text-accent-soft underline underline-offset-4 hover:text-white"
            onClick={resetStatus}
          >
            {forms.retry[locale]}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="panel p-6 sm:p-8">
      <p className="text-xs text-dim">{forms.requiredNote[locale]}</p>

      <div className="mt-6 space-y-8">
        <fieldset>
          <legend className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
            {locale === 'fr' ? 'Vos coordonnées' : locale === 'ar' ? 'بيانات التواصل' : 'Your details'}
          </legend>
          <div className="form-grid mt-4">
            <div className="field">
              <label className="label" htmlFor="lead-name">
                {forms.name[locale]} <span aria-hidden="true">*</span>
                <span className="sr-only">({ui.required[locale]})</span>
              </label>
              <input
                id="lead-name"
                name="name"
                className="input"
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                autoComplete="name"
                maxLength={120}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'lead-name-error' : undefined}
              />
              {errors.name && (
                <p id="lead-name-error" className="field-error">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="lead-email">
                {forms.email[locale]} <span aria-hidden="true">*</span>
                <span className="sr-only">({ui.required[locale]})</span>
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                dir="ltr"
                className="input"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
                autoComplete="email"
                maxLength={254}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'lead-email-error' : undefined}
              />
              {errors.email && (
                <p id="lead-email-error" className="field-error">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="lead-phone">
                {forms.phone[locale]}
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                dir="ltr"
                className="input"
                value={form.phone}
                onChange={(event) => update('phone', event.target.value)}
                autoComplete="tel"
                maxLength={32}
              />
            </div>
            {isApplication && (
              <div className="field">
                <label className="label" htmlFor="lead-country">
                  {forms.country[locale]} <span aria-hidden="true">*</span>
                  <span className="sr-only">({ui.required[locale]})</span>
                </label>
                <input
                  id="lead-country"
                  name="country"
                  className="input"
                  value={form.country}
                  onChange={(event) => update('country', event.target.value)}
                  autoComplete="country-name"
                  maxLength={80}
                  required
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={errors.country ? 'lead-country-error' : undefined}
                />
                {errors.country && (
                  <p id="lead-country-error" className="field-error">
                    {errors.country}
                  </p>
                )}
              </div>
            )}
          </div>
        </fieldset>

        {isApplication && (
          <fieldset>
            <legend className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
              {locale === 'fr'
                ? 'Votre entraînement et votre objectif'
                : locale === 'ar'
                  ? 'تدريبك وهدفك'
                  : 'Your training and goal'}
            </legend>
            <div className="form-grid mt-4">
              <div className="field">
                <label className="label" htmlFor="lead-goal">
                  {forms.goal[locale]} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="lead-goal"
                  name="goal"
                  className="select"
                  value={form.goal}
                  onChange={(event) => update('goal', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.goal)}
                  aria-describedby={errors.goal ? 'lead-goal-error' : undefined}
                >
                  <option value="">{forms.select[locale]}</option>
                  <option value="fat-loss">{forms.goals.fatLoss[locale]}</option>
                  <option value="muscle">{forms.goals.muscle[locale]}</option>
                  <option value="nutrition">{forms.goals.nutrition[locale]}</option>
                  <option value="consistency">{forms.goals.consistency[locale]}</option>
                  <option value="other">{forms.goals.other[locale]}</option>
                </select>
                {errors.goal && (
                  <p id="lead-goal-error" className="field-error">
                    {errors.goal}
                  </p>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="lead-experience">
                  {forms.experience[locale]} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="lead-experience"
                  name="experience"
                  className="select"
                  value={form.experience}
                  onChange={(event) => update('experience', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.experience)}
                  aria-describedby={errors.experience ? 'lead-experience-error' : undefined}
                >
                  <option value="">{forms.select[locale]}</option>
                  <option value="beginner">{forms.experienceOptions.beginner[locale]}</option>
                  <option value="returning">{forms.experienceOptions.returning[locale]}</option>
                  <option value="intermediate">{forms.experienceOptions.intermediate[locale]}</option>
                  <option value="advanced">{forms.experienceOptions.advanced[locale]}</option>
                </select>
                {errors.experience && (
                  <p id="lead-experience-error" className="field-error">
                    {errors.experience}
                  </p>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="lead-days">
                  {forms.days[locale]} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="lead-days"
                  name="days"
                  className="select"
                  value={form.days}
                  onChange={(event) => update('days', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.days)}
                  aria-describedby={errors.days ? 'lead-days-error' : undefined}
                >
                  <option value="">{forms.select[locale]}</option>
                  <option value="2">{forms.dayOptions.two[locale]}</option>
                  <option value="3">{forms.dayOptions.three[locale]}</option>
                  <option value="4">{forms.dayOptions.four[locale]}</option>
                  <option value="5">{forms.dayOptions.five[locale]}</option>
                  <option value="unsure">{forms.dayOptions.unsure[locale]}</option>
                </select>
                {errors.days && (
                  <p id="lead-days-error" className="field-error">
                    {errors.days}
                  </p>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="lead-equipment">
                  {forms.equipment[locale]} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="lead-equipment"
                  name="equipment"
                  className="select"
                  value={form.equipment}
                  onChange={(event) => update('equipment', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.equipment)}
                  aria-describedby={errors.equipment ? 'lead-equipment-error' : undefined}
                >
                  <option value="">{forms.select[locale]}</option>
                  <option value="gym">{forms.equipmentOptions.gym[locale]}</option>
                  <option value="home">{forms.equipmentOptions.home[locale]}</option>
                  <option value="minimal">{forms.equipmentOptions.minimal[locale]}</option>
                  <option value="mixed">{forms.equipmentOptions.mixed[locale]}</option>
                </select>
                {errors.equipment && (
                  <p id="lead-equipment-error" className="field-error">
                    {errors.equipment}
                  </p>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="lead-language">
                  {forms.language[locale]} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="lead-language"
                  name="language"
                  className="select"
                  value={form.language}
                  onChange={(event) => update('language', event.target.value)}
                  required
                  aria-invalid={Boolean(errors.language)}
                  aria-describedby={errors.language ? 'lead-language-error' : undefined}
                >
                  <option value="en">{forms.languageOptions.en[locale]}</option>
                  <option value="fr">{forms.languageOptions.fr[locale]}</option>
                  <option value="ar">{forms.languageOptions.ar[locale]}</option>
                </select>
                {errors.language && (
                  <p id="lead-language-error" className="field-error">
                    {errors.language}
                  </p>
                )}
              </div>
              <div className="field">
                <label className="label" htmlFor="lead-plan">
                  {forms.plan[locale]} <span className="text-dim">({ui.optional[locale]})</span>
                </label>
                <select
                  id="lead-plan"
                  name="plan"
                  className="select"
                  value={form.plan}
                  onChange={(event) => update('plan', event.target.value)}
                >
                  <option value="">{forms.select[locale]}</option>
                  <option value="nutrition">{forms.planOptions.nutrition[locale]}</option>
                  <option value="training">{forms.planOptions.training[locale]}</option>
                  <option value="vip">{forms.planOptions.vip[locale]}</option>
                  <option value="unsure">{forms.planOptions.unsure[locale]}</option>
                </select>
              </div>
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
            {isApplication
              ? locale === 'fr'
                ? 'Votre message'
                : locale === 'ar'
                  ? 'رسالتك'
                  : 'Your message'
              : locale === 'fr'
                ? 'Votre question'
                : locale === 'ar'
                  ? 'سؤالك'
                  : 'Your question'}
          </legend>
          <div className="field mt-4">
            <label className="label" htmlFor="lead-message">
              {isApplication ? forms.message[locale] : forms.contactMessage[locale]}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="lead-message"
              name="message"
              className="textarea"
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
              placeholder={
                isApplication ? forms.messagePlaceholder[locale] : forms.contactPlaceholder[locale]
              }
              rows={6}
              maxLength={4000}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'lead-message-error' : 'lead-message-hint'}
            />
            <p id="lead-message-hint" className="hint">
              {forms.messageMinHint[locale]}
            </p>
            {errors.message && (
              <p id="lead-message-error" className="field-error">
                {errors.message}
              </p>
            )}
          </div>
        </fieldset>

        <div>
          <div className="flex items-start gap-3">
            <input
              id="lead-consent"
              name="consent"
              type="checkbox"
              className="checkbox"
              checked={form.consent}
              onChange={(event) => update('consent', event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'lead-consent-error' : undefined}
              required
            />
            <div>
              <label htmlFor="lead-consent" className="text-sm leading-relaxed text-stone-muted">
                {forms.consent[locale]}
              </label>
              <Link
                href={localePath(locale, '/privacy')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-xs text-accent-soft underline underline-offset-4 hover:text-white"
              >
                {forms.consentLink[locale]}
              </Link>
            </div>
          </div>
          {errors.consent && (
            <p id="lead-consent-error" className="field-error mt-2">
              {errors.consent}
            </p>
          )}
        </div>

        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="lead-website">Website</label>
          <input
            id="lead-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => update('website', event.target.value)}
          />
        </div>

        {status === 'error' && (
          <div role="alert" className="border border-red-400/40 bg-red-950/30 p-4">
            <p className="text-sm font-medium text-red-200">{forms.errorTitle[locale]}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-red-100/80">
              {serverError || forms.errorBody[locale]}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-relaxed text-dim">{ui.disclaimer[locale]}</p>
          <button
            type="submit"
            className="btn btn-gold shrink-0"
            disabled={status === 'submitting'}
            aria-busy={status === 'submitting'}
          >
            {status === 'submitting'
              ? forms.submitting[locale]
              : isApplication
                ? forms.submitApplication[locale]
                : forms.submitContact[locale]}
            <Arrow width={15} height={15} />
          </button>
        </div>
      </div>
    </form>
  );
}
