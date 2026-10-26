# AYMAN — Architecture

**Status:** implemented in the working tree, pending commit.
**Last reviewed:** 2026-10-26.

## 1. Stack and constraints

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14.2, App Router | Already in place, static-first, good Core Web Vitals, first-class metadata routes |
| UI | React 18 + TypeScript (strict) | Existing stack; no reason to migrate |
| Styling | Tailwind 3 + CSS custom properties | Preserves the established design language without a new dependency |
| Motion | CSS only (`Reveal`, transitions, `prefers-reduced-motion`) | Removes `framer-motion` from the client bundle |
| Fonts | `next/font/local`: Bodoni Moda, Jost, Noto Kufi Arabic in `app/fonts/` | No build-time Google Fonts request; builds work when fonts.gstatic.com is unreachable, and there is no third-party runtime request |
| Hosting | Vercel | Existing production host |
| Data store | None | The scope needs lead delivery, not a CRM |
| Email | Resend **or** webhook, both optional | Owner can enable delivery without a database |
| Analytics | GA4, consent-gated | Only loads after explicit opt-in |

No framework, hosting, database, CMS or authentication change was made. The site remains statically rendered except the lead API and the locale-negotiation middleware.

## 2. Route map

```
/                                 307 → negotiated locale (EN default)
/en  /fr  /ar                     home
/[lang]/coaching                  service index
/[lang]/coaching/online-fitness-coaching
/[lang]/coaching/weight-loss
/[lang]/coaching/muscle-building
/[lang]/coaching/nutrition
/[lang]/results                   results and evidence policy
/[lang]/about
/[lang]/pricing
/[lang]/faq
/[lang]/contact
/[lang]/apply
/[lang]/privacy
/[lang]/terms
/[lang]/cookies
/[lang]/personal-protection      404 unless NEXT_PUBLIC_PROTECTION_LIVE=true
/[lang]/[...rest]                localized 404 via notFound()
/api/leads                       POST only
/sitemap.xml  /robots.txt  /manifest.webmanifest
```

- Trailing slashes are disabled (`trailingSlash: false`).
- Legacy unprefixed URLs are 301-redirected to the negotiated locale.
- `/` is a 307 negotiation, not a permanent redirect, so a visitor who changes language does not get stuck.
- `/personal-protection` is excluded from navigation, the sitemap, and internal links; the route itself returns 404 while the flag is off.

## 3. Localization

- Locale type: `'en' | 'fr' | 'ar'` (`lib/content/types.ts`).
- Copy uses one source of truth: `L(en, fr, ar)` returns `{ en, fr, ar }`.
- All copy lives in `lib/content/*`; components never contain market copy except a few inline micro-labels.
- `app/[lang]/layout.tsx` is the root layout. It sets `<html lang>` and `dir="rtl"` for Arabic, and loads the Arabic font only for that branch.
- Layout is direction-agnostic: logical CSS properties (`ms-*`, `ps-*`, `border-s`, `start/end`) replace left/right assumptions.
- Language preference is stored in the `NEXT_LOCALE` cookie by `LanguageSwitcher` and by middleware negotiation.
- `LanguageSwitcher` preserves the current path when switching locale.

### Why a single dynamic root layout

Next 14 requires a root layout that renders `<html>` and `<body>`. Putting it at `app/[lang]/layout.tsx` lets `lang` and `dir` be correct at first paint for every locale without a client-side effect or a second document. There is deliberately **no** `app/layout.tsx`. Adding one would force a nested `<html>` or a duplicate root and break route generation.

## 4. Content model

| File | Responsibility |
|---|---|
| `lib/content/types.ts` | `Locale`, `Localized<T>`, `L()`, `pick()`, shared shapes |
| `identity.ts` | Name, role, bio, approach, qualifications, 220+ owner-reported figure |
| `common.ts` | Navigation, UI labels, consent copy, footer, 404 |
| `home.ts` | Home sections, plans, billing terms |
| `services.ts` | Four service pages: metadata, sections, FAQs, CTAs |
| `pages.ts` | About, coaching index, results, pricing, FAQ, contact, apply |
| `forms.ts` | Form labels, options, errors, calculator |
| `legal.ts` | Privacy, terms, cookies, effective date |
| `protection.ts` | Gated protection copy |

`lib/routes.ts` derives navigation, sitemap paths, service paths and the legacy redirect map from the service array, so a service cannot exist in content but be missing from the sitemap.

## 5. Components

| Component | Type | Notes |
|---|---|---|
| `Navbar` | client | Focus trap, Escape, scroll lock, active state, mobile panel |
| `Footer` | server | Links, contact, legal, consent settings |
| `LanguageSwitcher` | client | Preserves path, writes cookie, records event |
| `LeadForm` | client | Three variants; client validation; honest delivered/fallback states |
| `PricingCards` | client | Plan comparison; `plan_select` event |
| `MacroCalculator` | client | Mifflin–St Jeor estimate; educational disclaimer |
| `Accordion` | client | Native `<details>`; `faq_open` event |
| `ConsentBanner` | client | Accept/decline; local storage; re-open via footer |
| `Analytics` | client | Loads GA4 only after consent; sends page views manually |
| `StickyCTA` | client | Mobile only, hidden on apply/contact, waits for consent resolution |
| `PageHeader` | server | Breadcrumb, eyebrow, H1, intro, CTA slot |
| `CtaSection` | server | Reusable closing CTA band |
| `LegalBody` | server | Section anchors, effective date, table of contents |
| `SeoJsonLd` | server | Escapes `<` in JSON-LD |
| `Reveal` | client | CSS-only intersection reveal, respects reduced motion |

## 6. Lead pipeline

`POST /api/leads`:

1. Same-origin check against `Host`, `NEXT_PUBLIC_SITE_URL`, and optional `LEAD_ALLOWED_ORIGIN`.
2. Body-size guard (32 KB) and JSON parse guard.
3. Honeypot field (`website`) must be empty.
4. Timing check: at least 3 seconds between form mount and submit, at most 24 hours.
5. In-memory rate limit: 5 requests per IP per 10 minutes.
6. Server-side field validation and length caps; `consent === true` required.
7. Protection submissions rejected unless `NEXT_PUBLIC_PROTECTION_LIVE=true`.
8. Delivery via `LEAD_WEBHOOK_URL` (preferred) or Resend (`RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`).
9. If no provider is configured or delivery fails, return `delivered: false` with pre-filled WhatsApp and email links. The UI labels this as **not delivered**.

**Serverless limitation:** the rate limiter is in process memory. On Vercel it is per-instance and resets on cold start. It stops casual abuse, not a distributed attacker. A durable limit needs Vercel Firewall, Upstash/Redis, or an edge rate limiter. This is documented rather than overstated.

**Privacy:** the API does not log request bodies, names, emails, or messages. IP addresses are used only in memory for the rate limit. The owner receives the lead by email/webhook.

## 7. Analytics and consent

- `lib/consent.ts` stores `ayman-consent-v1` in local storage and broadcasts events.
- GA4 is not requested until `readConsent() === 'accepted'` and `NEXT_PUBLIC_GA_ID` is set.
- Consent Mode defaults deny ad signals; analytics storage is granted only after opt-in.
- Declining deletes `_ga*`/`_gid` cookies and never loads the script.
- Event names and parameters are typed in `lib/analytics.ts`; no names, emails, phone numbers, messages, or free text are sent.
- Search Console verification is emitted only when `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set.

## 8. SEO plumbing

- `lib/seo.ts` builds canonical, reciprocal hreflang, `x-default`, Open Graph and Twitter metadata for every page.
- `app/sitemap.ts` emits locale URLs with alternates and excludes protection/404/API.
- `app/robots.ts` blocks everything on preview/development and disallows `/api/` in production.
- `next.config.js` adds `X-Robots-Tag: noindex, nofollow` on preview deployments.
- Structured data: Organization, Person, WebSite (global); Service, FAQPage, BreadcrumbList, CollectionPage, WebPage/AboutPage/ContactPage per route.
- No aggregate ratings, review counts, prices in schema, or fake addresses.

## 9. Security headers

Set globally in `next.config.js`:

- Content-Security-Policy (self + GA4 only; inline scripts allowed because Next injects bootstrap and JSON-LD)
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY` and `frame-ancestors 'none'`
- `Permissions-Policy` denies camera, microphone, geolocation, payment, USB
- `Cross-Origin-Opener-Policy: same-origin`
- `poweredByHeader: false`
- Remote image wildcard removed; only local images are used.

## 10. Rendering and performance

- Static generation for every marketing page via `generateStaticParams` (locale layout and service routes).
- `next/image` with local assets; hero resized from 4480×6720/4.7 MB to 1600×2400/~390 KB.
- Fonts self-hosted through `next/font`; Arabic font is `preload: false` and only used on `/ar`.
- No Framer Motion, no icon package, no third-party UI library.
- CSS reveal uses `IntersectionObserver` and disables itself under `prefers-reduced-motion`.

## 11. Environment

See `.env.example`. All flags are optional except the canonical URL in production if the custom domain differs from the default.

| Variable | Effect when unset |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Falls back to `https://ayman-nu.vercel.app` |
| `NEXT_PUBLIC_GA_ID` | No analytics script |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No verification meta tag |
| `NEXT_PUBLIC_PROTECTION_LIVE` | Protection route returns 404 |
| `RESEND_API_KEY` / `LEAD_TO_EMAIL` / `LEAD_FROM_EMAIL` | No email delivery; form shows fallback |
| `LEAD_WEBHOOK_URL` | Webhook delivery; takes precedence over Resend |
| `LEAD_ALLOWED_ORIGIN` | Only request host + site URL are accepted |

## 12. Verification

`npm run build` then `npm run check` against a running server or deployment. The script checks locale negotiation, 301s, canonical host, hreflang, JSON-LD parsing, RTL, sitemap exclusions, robots, protection gating, security headers, API method handling and 404s. See `docs/DEPLOYMENT.md`.
