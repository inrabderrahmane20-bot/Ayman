# AYMAN Coaching

Multilingual (English / French / Arabic) online fitness and nutrition coaching site for **Coach Mohamed Ayman Yakhmim**.

Built with Next.js 14 (App Router), React 18, TypeScript and Tailwind CSS. The dark, bone-and-crimson editorial identity is preserved; the content, architecture, conversion path and measurement layer were rebuilt.

> **Status:** implementation complete in the working tree on 2026-10-26. Not yet deployed. Production still serves the previous build until this tree is committed and deployed. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## What the site does

- **Three real locales** — `/en`, `/fr`, `/ar` with Arabic RTL, localized copy, metadata and hreflang.
- **Four service pages** — online fitness coaching, weight loss, muscle building, nutrition.
- **Honest conversion** — apply and contact forms POST to a validated server route. Success is only reported when an upstream provider accepts the message; otherwise the visitor gets pre-filled WhatsApp/email fallback.
- **Clear pricing** — $99 / $169 / $249 USD per month, billed monthly, no minimum term, with exclusions and no app claim.
- **Consent-gated analytics** — GA4 loads only after explicit opt-in and never receives PII.
- **Gated personal-protection page** — unlinked, `noindex`, excluded from the sitemap and returns 404 until licensing/insurance/operations are verified.
- **No fabricated proof** — unverifiable transformations, ratings, country counts, scarcity cues and the non-existent app were removed. The only retained scale figure is the owner-reported “220+ clients coached”.

## Quick start

```bash
npm ci
npm run dev          # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start -- -p 3000
```

## Verification

With a production build running on port 3000:

```bash
npm run typecheck
npm run check        # 46 HTTP/metadata/security checks
npm run test:leads   # 8 lead API contract checks (fake leads; local only by default)
```

`npm run check` accepts `BASE_URL=https://deployment.example` to test a deployment. Canonical/hreflang assertions use `NEXT_PUBLIC_SITE_URL`, not the test host.

## Environment

Copy `.env.example` to `.env.local` for local development. All variables are optional for the site to render, but lead delivery and analytics need configuration to be useful.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Defaults to `https://ayman-nu.vercel.app`. Never point at a domain you do not control. |
| `NEXT_PUBLIC_GA_ID` | Consent-gated GA4 measurement ID. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console meta token. |
| `NEXT_PUBLIC_PROTECTION_LIVE` | Must be exactly `true` to serve the gated protection page. Keep `false`. |
| `RESEND_API_KEY` | Email delivery. |
| `LEAD_TO_EMAIL` / `LEAD_FROM_EMAIL` | Lead recipient and verified sender. |
| `LEAD_WEBHOOK_URL` | Webhook delivery; takes precedence over Resend. |
| `LEAD_ALLOWED_ORIGIN` | Extra accepted origin during a domain move. |

Never set the canonical origin to `coachayman.com`: that is a different live business.

## Route map

```
/                                  307 → negotiated locale
/en  /fr  /ar                     home
/[lang]/coaching                  service index
/[lang]/coaching/online-fitness-coaching
/[lang]/coaching/weight-loss
/[lang]/coaching/muscle-building
/[lang]/coaching/nutrition
/[lang]/results                   evidence policy
/[lang]/about
/[lang]/pricing
/[lang]/faq
/[lang]/contact
/[lang]/apply
/[lang]/privacy  /terms  /cookies
/[lang]/personal-protection       404 while gated
/[lang]/[...rest]                 localized 404
/api/leads                        POST only
/sitemap.xml  /robots.txt  /manifest.webmanifest
```

Legacy unprefixed URLs 301 to the negotiated locale. Trailing slashes are normalized away.

## Project structure

```
app/[lang]/              Locale layout, pages, service routes, 404
app/api/leads/           Server-side lead intake
components/              Navigation, forms, pricing, consent, analytics, UI
lib/content/             All localized copy and plan/legal/protection data
lib/site.ts              Canonical origin, contact details, env flags
lib/seo.ts               Metadata, hreflang, JSON-LD builders
lib/routes.ts            Locale paths, navigation, sitemap paths, redirects
lib/analytics.ts         Typed event taxonomy
lib/consent.ts           Consent storage and events
middleware.ts            Locale negotiation and legacy 301s
next.config.js           Security headers, preview noindex, image config
scripts/check-site.mjs   Production HTTP smoke checks
scripts/test-leads.mjs   Lead API contract checks
docs/                    Audit, architecture, SEO, analytics, content, protection, deployment, deliverables
research/                Keyword hypotheses and competitor evidence boundary
public/                  Hero image, OG PNG, icons, favicon
```

## Editing content

All copy lives in `lib/content/*`. Prices and billing terms are in `lib/content/home.ts`; legal copy in `lib/content/legal.ts`; gated protection copy in `lib/content/protection.ts`.

Rules:

1. Change all three locales (EN/FR/AR) together.
2. Do not add a number, timeframe or superlative without a source.
3. Keep USD and “per month” next to any price.
4. Do not describe coaching as medical care or promise a result.
5. Re-run `npm run build` and `npm run check` after copy or route changes.

The editorial policy, proof standards and case-study consent template are in [`docs/CONTENT-STRATEGY.md`](docs/CONTENT-STRATEGY.md).

## Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for Vercel setup, environment scopes, domain migration, Resend/webhook configuration, production verification, rollback and known limitations.

The short version:

1. Commit and push.
2. Set environment variables for Production.
3. Deploy.
4. Set `NEXT_PUBLIC_SITE_URL` to the final origin and redeploy.
5. Run `BASE_URL=https://your-domain npm run check`.
6. Configure a delivery provider and send a real test lead.
7. Verify consent before enabling GA4.

## Documentation

| Document | Contents |
|---|---|
| [`docs/AUDIT.md`](docs/AUDIT.md) | Baseline production/source audit, claims review, measurement register |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Stack, routes, localization, lead pipeline, security |
| [`docs/SEO.md`](docs/SEO.md) | Canonicals, hreflang, redirects, schema, sitemap, launch checklist |
| [`docs/ANALYTICS.md`](docs/ANALYTICS.md) | Consent flow, event taxonomy, funnels, GSC steps |
| [`docs/CONTENT-STRATEGY.md`](docs/CONTENT-STRATEGY.md) | Messaging, claims policy, localization, proof/consent programme |
| [`docs/PROTECTION-SERVICE.md`](docs/PROTECTION-SERVICE.md) | Gated service gates, jurisdictions, sensitive data, launch/rollback |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Env vars, deploy, verification, rollback, monitoring |
| [`docs/DELIVERABLES.md`](docs/DELIVERABLES.md) | 35-item deliverable register and blocked items |
| [`docs/KEYWORD-RESEARCH.md`](docs/KEYWORD-RESEARCH.md) | Keyword hypotheses and unavailable-metric register |
| [`research/competitors.md`](research/competitors.md) | Qualitative competitor landscape, no invented metrics |

## Known limitations

- Search Console/GA4 baselines are **unavailable**, not zero, until property access exists.
- Keyword volumes, difficulty, competitor traffic and backlinks were not available.
- No verified testimonials or case studies are published; they need consent records.
- The protection service is not offered and cannot be enabled without G0–G9 evidence.
- Rate limiting is in-memory per serverless instance; use Vercel Firewall/Upstash for durable limits.
- Lead delivery requires Resend or a webhook; without one the form honestly falls back to WhatsApp/email.
- Payment and billing are handled off-site after a fit check. There is no checkout.

## Contact

- **Coach:** Mohamed Ayman Yakhmim
- **Email:** aymanyakhmim1@gmail.com
- **Phone / WhatsApp:** +212 707 072 662

No social profiles are linked until ownership is verified.
