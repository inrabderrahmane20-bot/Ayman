# AYMAN — Deliverables register

**Version:** 1.0
**Date:** 2026-10-26
**Scope:** the 35 deliverables agreed for the rebuild.
**Status vocabulary:** **Delivered** = implemented and verified in the working tree. **Delivered — owner action** = implemented, but needs an owner-supplied credential, decision or legal review. **Blocked** = cannot be completed honestly without evidence that does not exist in this environment.

No deliverable is marked complete on the basis of a plan alone. Evidence is a file, a command result or a dated observation.

---

## 1. Register

| # | Deliverable | Status | Evidence | Remaining action / risk |
|---|---|---|---|---|
| 1 | Full source and production baseline audit | **Delivered** | `docs/AUDIT.md`; live production checks; claims review | None. Baseline figures labelled observed, owner-supplied or unavailable. |
| 2 | Preserved and systematised brand identity | **Delivered** | `app/globals.css`, `tailwind.config.js`; near-black/bone/crimson tokens, Bodoni + Jost, monogram, editorial scale | Visual review on real devices recommended. |
| 3 | Home page rebuilt | **Delivered** | `app/[lang]/page.tsx`; hero, trust, audience, process, services, pricing, FAQ, CTA | No fabricated proof or scarcity. |
| 4 | Coaching index page | **Delivered** | `app/[lang]/coaching/page.tsx`; four services with scope and links | — |
| 5 | Online fitness coaching service page | **Delivered** | `/en|fr|ar/coaching/online-fitness-coaching` | — |
| 6 | Weight-loss service page | **Delivered** | `/en|fr|ar/coaching/weight-loss` | No weight/timeline promise. |
| 7 | Muscle-building service page | **Delivered** | `/en|fr|ar/coaching/muscle-building` | No size/timeline promise. |
| 8 | Nutrition service page | **Delivered** | `/en|fr|ar/coaching/nutrition` | Medical limits and referral note included. |
| 9 | Results and evidence-policy page | **Delivered — blocked content** | `app/[lang]/results/page.tsx`; policy explains what will and will not be published | Real case studies blocked on records + written consent. |
| 10 | About page | **Delivered** | `app/[lang]/about/page.tsx`; qualifications stated accurately | Owner should confirm exact credential wording. |
| 11 | Pricing page with billing clarity | **Delivered** | `app/[lang]/pricing/page.tsx`; $99/$169/$249 USD, monthly, no minimum term, exclusions, no app claim | Owner must confirm prices remain current. |
| 12 | FAQ page | **Delivered** | `app/[lang]/faq/page.tsx`; grouped questions, localized | Add real questions as they arrive. |
| 13 | Contact page | **Delivered** | `app/[lang]/contact/page.tsx`; form + WhatsApp + email + phone | Email is the owner-supplied Gmail; no unverified socials. |
| 14 | Application page with real submission | **Delivered** | `app/[lang]/apply/page.tsx`, `components/LeadForm.tsx`, `app/api/leads/route.ts` | Delivery provider must be configured. |
| 15 | Gated personal-protection page | **Delivered — publication blocked** | `app/[lang]/personal-protection/page.tsx`, `lib/content/protection.ts`; 404 while flag off, `noindex`, unlinked, sitemap-excluded | Licensing, insurance, staffing and operations unverified. See `docs/PROTECTION-SERVICE.md`. |
| 16 | Multilingual architecture (EN/FR/AR) | **Delivered** | `app/[lang]/*`, `lib/content/*`, `middleware.ts`; locale routes and negotiation | Native-speaker review recommended. |
| 17 | Arabic RTL and typography | **Delivered** | `dir="rtl"`, logical CSS properties, Noto Kufi Arabic, RTL header/footer/nav | Test on physical iOS/Android. |
| 18 | Canonical, reciprocal hreflang and metadata | **Delivered — owner action** | `lib/seo.ts`, `app/[lang]/layout.tsx`; `npm run check` verifies | Final custom domain must be confirmed and set in `NEXT_PUBLIC_SITE_URL`. |
| 19 | Structured data | **Delivered** | `lib/seo.ts`, `components/SeoJsonLd.tsx`; Organization, Person, WebSite, Service, FAQPage, BreadcrumbList, CollectionPage, page types | No ratings, offers or fake address. Validate in Rich Results Test after deployment. |
| 20 | Sitemap, robots, manifest, icons and OG image | **Delivered** | `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `public/og-image.png`, icon set | Submit sitemap after deployment. |
| 21 | Legacy redirects and localized 404 | **Delivered** | `middleware.ts`, `lib/routes.ts`, `app/[lang]/[...rest]/page.tsx`, segment-local `not-found.tsx` boundaries; localized 404 verified in EN/FR/AR including unknown service slugs | Monitor 404s in Search Console. 404 UI is client-rendered under Next 14's root dynamic layout; see `docs/DEPLOYMENT.md`. |
| 22 | Real lead intake API | **Delivered** | `app/api/leads/route.ts`; server validation, size limit, JSON guard | No database by design. |
| 23 | Spam and abuse controls | **Delivered — owner action** | Same-origin check, honeypot, 3-second timing, 24-hour ceiling, 5/10-minute in-memory rate limit; `npm run test:leads` | Durable distributed rate limiting needs Vercel Firewall/Upstash. |
| 24 | Honest delivery and fallback UX | **Delivered** | `components/LeadForm.tsx`; delivered/fallback/error states; pre-filled WhatsApp/email | Configure Resend or webhook before promotion. |
| 25 | Analytics event taxonomy | **Delivered — owner action** | `lib/analytics.ts`, `components/Analytics.tsx`; typed events, no PII | `NEXT_PUBLIC_GA_ID` and a GA4 property are not supplied. |
| 26 | Consent management | **Delivered** | `lib/consent.ts`, `components/ConsentBanner.tsx`, `components/CookieSettingsButton.tsx`; no GA before opt-in | Verify in a fresh profile after enabling GA4. |
| 27 | Privacy policy | **Delivered — legal review** | `/en|fr|ar/privacy`, `lib/content/legal.ts` | Owner + local adviser must confirm entity, retention and rights workflow. |
| 28 | Terms of service | **Delivered — legal review** | `/en|fr|ar/terms` | Confirm jurisdiction, refunds and liability wording. |
| 29 | Cookie policy | **Delivered — legal review** | `/en|fr|ar/cookies`; storage keys and providers described | Update if analytics/processors change. |
| 30 | Accessibility pass (WCAG 2.2 AA intent) | **Delivered — verify** | Semantic landmarks, skip link, focus states, labels, `aria-live`, focus trap, reduced motion, logical properties; list-markup defect fixed; Lighthouse accessibility 100 on EN/FR/AR | Manual screen-reader test still recommended. |
| 31 | Performance optimization | **Delivered — verify** | Framer Motion removed, CSS motion, hero resized/compressed, self-hosted fonts, local images only, static pages; Lighthouse mobile performance 94 EN / 93 FR / 93 AR, CLS 0 | LCP is ~3.0–3.1 s lab; image/font work and field data after launch. |
| 32 | Security headers and hardening | **Delivered** | `next.config.js`: CSP, HSTS, nosniff, frame denial, referrer, permissions, COOP, no `X-Powered-By`, no remote image wildcard; origin check on API | Re-run `npm run check` after any CSP change. |
| 33 | Keyword and market research | **Delivered — metrics blocked** | `docs/KEYWORD-RESEARCH.md`, `research/keywords.csv`; qualitative clusters per locale | Volumes, difficulty, CPC and rankings unavailable without tool/property access. Never backfill with invented numbers. |
| 34 | Competitor landscape | **Delivered — metrics blocked** | `research/competitors.md`; categories, positioning, scorecard template, evidence boundary | Traffic, pricing, backlinks and rankings were not collected. |
| 35 | Documentation, deployment and rollback pack | **Delivered** | `docs/ARCHITECTURE.md`, `SEO.md`, `ANALYTICS.md`, `CONTENT-STRATEGY.md`, `PROTECTION-SERVICE.md`, `DEPLOYMENT.md`, this register; `README.md`; `.env.example` | Deploy and repeat checks against production. |

---

## 2. Verification evidence

### Build

```
npm run build
✓ Compiled successfully
✓ Generating static pages (54/54)
```

### HTTP smoke tests

```
npm run check
46/46 checks passed against http://localhost:3000
```

Covers locale negotiation, 200s, `lang`, `dir="rtl"`, canonical origin, reciprocal hreflang, `x-default`, JSON-LD parsing and types, 301s, trailing-slash normalization, sitemap inclusion/exclusion, robots, localized 404, protection 404, API method handling, CSP/HSTS/nosniff/frame headers, and key page availability.

### Lead API contract tests

```
npm run test:leads
9/9 lead API checks passed
```

Covers invalid JSON, server validation, honeypot, timing, cross-origin rejection, protection gating, honest undelivered state, and rate limiting, and honest fallback links.

### Localized 404

```
/en/nope, /fr/inconnu, /ar/unknown          -> 404, localized title + H1, lang/dir, no canonical, noindex
/en|fr|ar/coaching/unknown                  -> 404, same guarantees
```

Verified in a production build in a real browser after hydration. Next.js 14 serves the 404 UI client-side when the root layout lives in a dynamic segment; the status code, localized server `<title>`, `noindex` and canonical removal are correct in the raw response.

### Internal crawl

```
54 HTML pages + 34 assets = 88 URLs
0 broken links, wrong canonicals, missing hreflang or foreign-domain references
```

### Lighthouse

Lighthouse 13.5.0, mobile, median of 3 runs on the local production build:

| Page | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| `/en` | 94 | 100 | 100 | 100 | 3.03 s | 74 ms | 0 |
| `/fr` | 93 | 100 | 100 | 100 | 3.11 s | 72 ms | 0 |
| `/ar` | 93 | 100 | 100 | 100 | 3.09 s | 60 ms | 0 |

Lab scores are not field data; Core Web Vitals field values remain unavailable until a Search Console/CrUX property exists. LCP is above the 2.5 s lab threshold and remains a follow-up.

---

## 3. Blocked register

These items are **not** quietly marked done. They require external evidence.

| Item | Why blocked | What unblocks it | Owner |
|---|---|---|---|
| Search Console baseline (impressions, clicks, positions) | No property or access supplied | Grant access; verify; submit sitemap; wait 28 days | Coach |
| GA4 baseline and conversion history | No property or measurement ID supplied | Create GA4 property; set `NEXT_PUBLIC_GA_ID`; consent check | Coach |
| Keyword volumes, difficulty and CPC | No Keyword Planner/Ahrefs/Semrush access | Provide a tool export or access | Coach |
| Competitor traffic/backlinks/pricing | No third-party dataset; no dated screenshots | Buy access or supply verified screenshots | Coach |
| Real testimonials and case studies | No verified client record or written consent on file | Use the consent/intake template in `docs/CONTENT-STRATEGY.md` | Coach + client |
| Personal protection publication | Licensing, insurance, staffing, operations and local counsel unverified | Close gates G0–G9 in `docs/PROTECTION-SERVICE.md` | Coach + counsel |
| Final canonical domain | Owner has not confirmed a production domain | Confirm domain; set `NEXT_PUBLIC_SITE_URL`; redeploy | Coach |
| Durable rate limiting | In-memory limiter is per serverless instance | Add Vercel Firewall, Upstash/Redis or edge limiter | Developer |
| Production deployment of this rebuild | Committed as `65bfad7`; Vercel CLI is logged out and no project link exists locally | Log in to Vercel, link the project, deploy, rerun checks | Developer + Coach |
| Legal review of privacy/terms/cookies | No lawyer or entity details supplied | Local adviser review | Coach |

---

## 4. What was deliberately removed

- Fabricated metrics: 12k kg, 180+ transformations, 9 countries, 5+ years, 5.0 rating, 3 spots.
- All six named transformation stories and four testimonials (no source or consent).
- “Members app” and its five features (no app exists).
- Unverified Instagram/TikTok/YouTube links and the `hello@coachayman.com` address.
- Framer Motion (replaced with CSS-only motion).
- The remote-image wildcard (`hostname: '**'`).
- The false “application received” state when nothing was sent.
- Canonicals pointing at `coachayman.com`, a different business.

## 5. What is intentionally not built

- A CRM, database, checkout or subscription billing. Leads are delivered by email/webhook; payment is arranged after a fit check.
- A blog or mass content programme. There is no keyword evidence to justify one.
- A protection booking flow, price or service schema. The service is gated.
- Review/rating schema, fake addresses, local-business schema.
- Any claim of guaranteed results, medical outcomes or typical timelines.

## 6. Sign-off

| Role | Name | Decision | Date |
|---|---|---|---|
| Coach / business owner | Mohamed Ayman Yakhmim | Pending review of this register | — |
| Developer | — | Implementation complete in working tree | 2026-10-26 |
| Legal reviewer | — | Not engaged | — |
| Native French reviewer | — | Not engaged | — |
| Native Arabic reviewer | — | Not engaged | — |

