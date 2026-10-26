#!/usr/bin/env node
/**
 * Lead API contract checks.
 *
 * Usage:
 *   npm run build
 *   npm run start -- -p 3000
 *   npm run test:leads
 *
 * Safety: this submits fake leads. It refuses to run against a non-local host
 * unless ALLOW_REMOTE_TESTS=1 is explicitly set, because a configured production
 * provider would receive the test messages.
 */

const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');
const local = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(base);

if (!local && process.env.ALLOW_REMOTE_TESTS !== '1') {
  console.error(
    `Refusing to submit test leads to ${base}.\n` +
      'Set ALLOW_REMOTE_TESTS=1 only if you accept that the configured provider will receive them.',
  );
  process.exit(1);
}

const results = [];
function record(name, ok, detail = '') {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
}

let ipSuffix = 0;
async function post(body, headers = {}) {
  ipSuffix += 1;
  const response = await fetch(`${base}/api/leads`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: base,
      'x-forwarded-for': `198.51.100.${ipSuffix}`,
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
  const text = await response.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    // Keep json null so the assertion reports the raw failure.
  }
  return { status: response.status, json, text };
}

const valid = {
  formType: 'application',
  name: 'Test Lead',
  email: 'test@example.com',
  phone: '+212600000000',
  country: 'MA',
  goal: 'fat_loss',
  experience: 'beginner',
  days: '3',
  equipment: 'gym',
  language: 'en',
  plan: 'training',
  message: 'This is a test enquiry long enough to pass validation.',
  consent: true,
  startedAt: Date.now() - 6000,
  website: '',
  source: '/en/apply',
};

let result = await post('{not json');
record(
  'invalid JSON rejected',
  result.status === 400 && result.json?.code === 'invalid_json',
  `${result.status} ${result.json?.code}`,
);

result = await post({ ...valid, name: '' });
record(
  'missing name rejected',
  result.status === 400 && result.json?.code === 'validation',
  `${result.status} ${result.json?.code}`,
);

result = await post({ ...valid, website: 'https://spam.example' });
record(
  'honeypot rejected',
  result.status === 400 && result.json?.code === 'spam',
  `${result.status} ${result.json?.code}`,
);

result = await post({ ...valid, startedAt: Date.now() });
record(
  'too-fast submission rejected',
  result.status === 400 && result.json?.code === 'spam',
  `${result.status} ${result.json?.code}`,
);

result = await post(valid, { origin: 'https://evil.example' });
record(
  'cross-origin rejected',
  result.status === 403 && result.json?.code === 'origin',
  `${result.status} ${result.json?.code}`,
);

result = await post({ ...valid, formType: 'protection' });
record(
  'gated protection enquiry rejected',
  result.status === 404 && result.json?.code === 'disabled',
  `${result.status} ${result.json?.code}`,
);

result = await post(valid);
record(
  'valid lead reports an honest delivery state',
  result.status === 200 &&
    result.json?.ok === true &&
    (result.json?.code === 'delivered' ||
      result.json?.code === 'not_configured' ||
      result.json?.code === 'delivery_failed'),
  `${result.status} ${result.json?.code} delivered=${result.json?.delivered}`,
);

if (result.json?.delivered === false) {
  record(
    'undelivered lead includes both fallbacks',
    typeof result.json?.fallback?.whatsapp === 'string' &&
      typeof result.json?.fallback?.email === 'string',
  );
}

// A fresh TEST-NET-3 address per run keeps the rate-limit case repeatable
// against a long-running server without restarting it between runs.
const rateLimitIp = `203.0.113.${1 + Math.floor(Math.random() * 254)}`;
const fixedIp = { 'x-forwarded-for': rateLimitIp };
const codes = [];
for (let index = 0; index < 6; index += 1) {
  const attempt = await post(valid, fixedIp);
  codes.push(attempt.status);
}
record(
  'rate limit engages after 5 requests',
  codes.slice(0, 5).every((code) => code === 200) && codes[5] === 429,
  codes.join(','),
);

const failed = results.filter((entry) => !entry.ok).length;
console.log(`\n${results.length - failed}/${results.length} lead API checks passed`);
if (failed > 0) process.exitCode = 1;
