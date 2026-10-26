# AYMAN — Baseline Audit

**Audit date:** 2026-10-26
**Auditor environment:** Windows 11, Node v24.14.0, npm 11.9.0, Chrome 152 (Lighthouse runner)
**Production tested:** `https://ayman-nu.vercel.app` (deployment `e45f355`)
**Repository:** `C:\Users\inrab\Documents\GitHub\Ayman` (branch: working tree clean at `e45f355`)
**Method:** source-code inspection of every route/component + rendered production inspection + HTTP checks + Lighthouse lab audit. No Search Console, GA4, Keyword Planner, Ahrefs, or Bing Webmaster credentials were available, so no first-party search-performance figures are reported. No metric in this document is estimated or invented.

---

## 1. Executive summary

The site is a well-presented, single-language marketing site built with **Next.js 14.2 (App Router), React 18, TypeScript, Tailwind 3 and Framer Motion**. It is visually distinctive (dark charcoal, red accent, Bodoni Moda + Jost) and technically simple (static, no backend, no database).

It is **not** yet a commercially reliable or search-ready platform. The most serious findings are:

| # | Severity | Finding | Business impact |
|---|---|---|---|
| 1 | **Critical** | Every page declares `canonical` on `https://coachayman.com`, which is **a different live business** ("Coach Ayman – Executive Life Coach, Capability Training"), not this site. The sitemap and robots file also point to that domain. | Search engines are told to attribute this content to someone else's domain. This alone can suppress or remove the site from results. |
| 2 | **Critical** | **No lead is captured.** The application form only flips local React state to "received"; it never sends data anywhere. The contact form opens the visitor's mail client. | The core business conversion does not exist. Every application submitted online is lost. |
| 3 | **Critical** | **No analytics, no Search Console meta, no consent.** | Zero measurement of demand, acquisition, or conversions. |
| 4 | **High** | **Fabricated / unverifiable proof.** "12k total kg lost", "180+ transformations", "9 countries", "5+ years", "5.0 rated", "3 coaching spots open this month", a "members app" with five features, six named transformations with ages and results, and star ratings. Only "220+ clients" comes from the owner-supplied brand profile (README). | Misleading claims create legal/consumer-protection exposure and destroy trust. The app does not exist. |
| 5 | **High** | **No multilingual experience.** No `/fr` or `/ar`, no hreflang, no RTL, no Arabic typography. | Morocco's primary commercial queries are French and Arabic; Saudi/Qatar are Arabic-first. Most of the target market cannot use the site in their language. |
| 6 | **High** | **No dedicated service pages.** One generic `/coaching` page, no weight-loss, muscle-building, nutrition, online-coaching, FAQ, or personal-protection pages. | Cannot rank for specific commercial intent; cannot answer specific objections. |
| 7 | **High** | **No privacy consent, cookie policy, or data-handling process** for the lead data the site claims to receive. | Compliance and trust risk (Morocco law 09-08, GDPR-like expectations for international clients). |
| 8 | **Medium** | Contact email `hello@coachayman.com` belongs to the other `coachayman.com` business; repository README lists `aymanyakhmim1@gmail.com`. | Inquiries may go to the wrong party or bounce. |
| 9 | **Medium** | Social links (`instagram.com/coachayman`, TikTok, YouTube) could not be verified as belonging to this coach. Instagram resolves to an Arabic "الكوتش أيمن" account; ownership is unconfirmed. | Possible misattribution / links to unrelated accounts. |
| 10 | **Medium** | Accessibility: 93/100 lab score; 4 contrast failures and an invalid `aria-label` on a `div`, plus a wordmark accessible-name mismatch. | Excludes low-vision and screen-reader users; fails WCAG 2.2 AA. |
| 11 | **Medium** | One hero image (1200×800) is stretched to 1920px+ and reused on About; OG image is SVG (unsupported by most social platforms); no favicon. | Weak first impression when shared; soft hero on large screens. |
| 12 | **Medium** | No security headers (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). Vercel supplies HSTS only. | Unnecessary attack surface; weaker privacy posture. |

**Conclusion:** the visual theme is worth keeping. The content, architecture, conversion layer, measurement layer and language layer need to be rebuilt.

---

## 2. Technical architecture (as found)

| Item | Finding |
|---|---|
| Framework | Next.js `^14.2.35`, App Router, React `^18.3.1` |
| Language | TypeScript `^5.7.3` (strict mode in `tsconfig.json`) |
| Styling | Tailwind CSS `^3.4.17`, custom design tokens in `tailwind.config.js` + `app/globals.css` |
| Animation | `framer-motion ^11.18.2` used by hero, navbar, forms, reveal wrappers |
| Rendering | Fully static/prerendered; no dynamic routes, no API routes, no server actions |
| Data layer | None. All copy in `lib/content.ts` |
| Auth | None |
| Database | None |
| Forms | Client-only. Application form: local state only. Contact form: `mailto:` handoff |
| Analytics | None (no GA4, no GTM, no consent tool) |
| SEO utilities | Basic `metadata` objects, `sitemap.ts`, `robots.ts`; one FAQPage JSON-LD |
| Images | `next/image`; one local JPG; `remotePatterns` allows **any** HTTPS host |
| Fonts | `next/font/google`: Bodoni Moda + Jost, Latin subsets only |
| Hosting | Vercel (`vercel.json`), default Next preset |
| Env vars | None required |
| Tests | None |
| CI | `.github` directory present; no workflow file found |
| Dependencies | 4 runtime, 6 dev. Minimal and appropriate |
| Deployment | Production is the `ayman-nu.vercel.app` project; `NEXT_PUBLIC_SITE_URL` is unset |

**Verdict:** keep the stack. Next.js App Router is suitable. No reason to change framework, hosting, or add a database for this scope.

---

## 3. Page inventory (as found)

All routes were opened in the production browser and inspected.

| URL | Purpose | Metadata | Indexable | Primary CTA | Problems |
|---|---|---|---|---|---|
| `/` | Home | Title "Online Fitness & Nutrition Coach \| Ayman Yakhmim"; generic description; canonical `/` → wrong host | Yes | `/apply` | Unsupported stats; fake scarcity; fake app; fabricated testimonials; duplicate "trust" claims |
| `/about` | Coach bio | Canonical `/about` → wrong host | Yes | `/apply` | "220+ clients" in meta; "NASM Certified" badge is not accurate for a Nutrition Essentials course; no credential links |
| `/coaching` | Generic programme | Canonical → wrong host | Yes | `/apply` | No distinct service pages; promises app access; "first 90 days mapped" without evidence |
| `/pricing` | 3 plans, $99/$169/$249 | Canonical → wrong host | Yes | `/apply` | No currency/billing/cancellation detail; "members app access"; no exclusions; comparison table not mobile-first |
| `/transformations` | Before/after gallery | No canonical | Yes | `/apply` | Placeholder before/after sliders presented as results; six client names/ages/results/quotes unverified; no consent record |
| `/apply` | Application | Canonical → wrong host | Yes | Submit | **Does not submit**; no consent; no country/language; collects age/gender without need; success message is false |
| `/contact` | Contact | Canonical → wrong host | Yes | `mailto:` | Email belongs to another domain; form opens mail client; no success/failure handling |
| `/privacy` | Privacy policy | No canonical | Yes | none | Four short paragraphs; no legal entity, retention, processors, rights process, cookies |
| `/terms` | Terms | No canonical | Yes | none | No legal entity, jurisdiction, refunds detail, liability, IP |
| `/faq` | — | — | 404 | — | Missing (FAQs only on home/pricing) |
| `/results` | — | — | 404 | — | Missing; results live at `/transformations` |
| `/personal-protection` | — | — | 404 | — | Missing |
| `/en`, `/fr`, `/ar` | — | — | 404 | — | No multilingual architecture |
| `/sitemap.xml` | Sitemap | 9 URLs, all on wrong domain | — | — | Wrong host, no hreflang, `lastModified` is build time for every URL |
| `/robots.txt` | Robots | Allows all, sitemap on wrong domain | — | — | No API disallow; no staging protection |
| 404 | Error page | — | — | — | Good design, English only |

**Missing content:** dedicated weight-loss, muscle-building, nutrition, online-coaching pages; FAQ page; results index with verified case studies; personal-protection section; cookie policy; accessible localized 404.

---

## 4. Visual identity (to preserve)

### Colour tokens (as found)

| Token | Value | Role |
|---|---|---|
| `--bg` / ink | `#08080A` | Page background |
| `--bg-2` / ink-900 | `#0B0B0E` | Alternating section background |
| `--surface` / ink-800 | `#101013` | Inputs / cards |
| `--surface-2` / ink-700 | `#16161A` | Elevated surfaces |
| `--text` / bone | `#F5F3EF` | Primary text (warm off-white) |
| `--muted` | `#A8A29A` | Secondary text (warm grey) |
| `--dim` | `#6E6A63` | Tertiary text (fails contrast at small sizes) |
| `--gold` (actually red) | `#E11D2A` | Brand accent, CTAs, eyebrows |
| `--gold-soft` | `#FF5A64` | Accent text / gradient highlight |
| `--gold-deep` | `#9B1C24` | Gradient stop / shadow |

### Typography

- Display: **Bodoni Moda** (serif, 400–700, italic available)
- Body/UI: **Jost** (geometric sans, 300–700)
- Hierarchy: very large editorial serif H1/H2 with tight leading (0.96–1.05), uppercase Jost eyebrows at `0.28em` tracking, small uppercase UI labels.
- Character: cinematic dark editorial; thin 1px white/8% rules; red glow; subtle 72px grid overlay; generous vertical spacing; sharp 2–6px radii.
- **Brand recognition rests on:** near-black background, warm bone text, crimson accent, Bodoni/Jost pairing, uppercase wide tracking, thin rules, editorial scale, and the circular "A" monogram.

### What will change

Layouts, hierarchy, components, copy, navigation, forms, footer, mobile menu, and Arabic RTL. The colour family, type pairing, monogram, grid/glow language and editorial tone will be retained and systematised.

---

## 5. SEO / indexing baseline

Retrieved 2026-10-26 from the live deployment and source.

| Check | Result |
|---|---|
| Canonical host | `https://coachayman.com` on `/`, `/about`, `/coaching`, `/pricing`, `/apply`, `/contact`; absent on `/transformations`, `/privacy`, `/terms` |
| Canonical correctness | **Fail** — wrong domain (a different business) |
| Sitemap | 9 URLs, wrong host, no trailing-slash policy, no alternates |
| Robots | `Allow: /`, sitemap on wrong host |
| `lang` attribute | `en` on every page |
| `dir` | absent |
| Hreflang | none |
| Structured data | FAQPage only, on `/`; no Organization/Person/Service/BreadcrumbList |
| Titles | Mostly unique, but `/transformations` title lacks brand template application (it uses the template) and descriptions are thin |
| H1 | Exactly one per page (verified in rendered DOM) |
| Image alt text | Present on the two hero images; decorative elements marked `aria-hidden` in places |
| OG image | `og-image.svg` (unsupported by Facebook/LinkedIn/X previews) |
| Favicon | Missing |
| Indexing risk | Vercel preview URLs are indexable by default |
| HTTP status | All existing routes 200; `/faq`, `/results`, `/personal-protection`, `/en` 404 |
| Trailing slash | No canonical policy (Next default: no trailing slash) |
| Internal links | All resolve; but all funnel to a non-functional `/apply` |
| Redirects | None |

**Search Console / GA4:** not connected to this property, no verification token in the codebase, no access available in this environment. Baseline organic metrics are therefore **unavailable**, not zero.

---

## 6. Conversion paths (as found)

1. Every CTA → `/apply`.
2. `/apply` → 5-step quiz → details form → **local `setDone(true)`**. No network request. The page then claims "Application received" and "I personally review every submission". This statement is false in the current implementation.
3. `/contact` → form → sets `window.location.href = mailto:` then shows "Message ready to send". This depends on a desktop mail client; on mobile webmail it often fails silently.
4. WhatsApp floating button → `wa.me/212707072662` (works).
5. Sticky apply bar → fake scarcity "3 coaching spots open this month" (unsupported).
6. No thank-you URL, no conversion event, no CRM, no notification to the owner, no spam protection, no rate limiting, no server-side validation.

---

## 7. Content accuracy review

| Claim | Source status | Decision |
|---|---|---|
| 220+ clients coached | Owner-supplied brand profile (README) | Retain as owner-reported; remove derivative metrics |
| 180+ transformations | No source | Remove |
| 12k total kg lost | No source | Remove |
| 9 countries served | No source | Remove |
| 5+ years coaching | No source | Remove |
| "5.0 rated" | No review platform cited | Remove |
| 6 transformation stories (names, ages, kg, quotes) | No consent or client record in repo; images are placeholders | Remove from public site; archive in git history; provide a documented intake template for verified stories |
| 4 testimonials (names, jobs, results) | No source/consent | Remove |
| "Members app" + 5 features | No app exists in repo; preview is a static mockup | Remove; replace with coaching delivery explanation |
| "3 coaching spots open this month" | No capacity data | Remove |
| "$99 / $169 / $249 per month" | Existing published pricing; owner has not approved a change | Retain, with currency/billing/cancellation terms and exclusions clarified |
| NASM Nutrition Essentials | Owner-supplied profile; NASM is a real issuer | Retain, described accurately; remove "NASM Certified" badge |
| "Healthy Practices Certification" | Owner-supplied; issuer wording ambiguous | Retain as stated, without inflating it |
| "Exercise Science Background" | Owner-supplied | Retain as background, not as a degree claim |
| Email `hello@coachayman.com` | Domain belongs to a different business | Replace with owner-supplied `aymanyakhmim1@gmail.com` pending confirmation |
| Social profiles | Ownership unverified | Remove from UI until owner confirms; documented |
| Personal protection service | No evidence of licensing, insurance, staff, or delivery | Build gated, `noindex`, unlinked section with enquiry-only copy; publish only after owner verification |

**Health claims:** the site should not promise fat loss, muscle gain, or timelines. All copy must describe process and scope, not guaranteed outcomes. Nutrition guidance is not medical nutrition therapy; a referral note is required.

---

## 8. Accessibility baseline (Lighthouse 12, production home)

| Category | Score |
|---|---|
| Accessibility | **0.93** (4 failing audits) |
| Best practices | 1.00 |
| SEO | 1.00 (lab checks only; cannot detect the canonical-domain defect) |

Failing items (verified selectors):

1. `aria-prohibited-attr` — `<div aria-label="5 out of 5 stars">` has no role.
2. `color-contrast` — `#6E6A63` on `#0D0D0F` = 3.61:1; `text-white/30` trust badges = 2.56:1; `#E11D2A` link = 4.2:1; footer eyebrow labels = 3.65:1.
3. `label-content-name-mismatch` — logo link's accessible name ("Coach Ayman — home") excludes visible text.
4. Missing: no focus trap in mobile menu, no Escape handling, no `aria-live` form status, no consent controls.

Performance could not be scored with the available tool (it does not run the performance category), so **no LCP/INP/CLS baseline is claimed**. Field data is unavailable. The main known risks are Framer Motion on most sections, a 1200×800 hero upscaled to full viewport, and repeated client hydration.

---

## 9. Security / privacy baseline

- HTTPS + Vercel HSTS present.
- No CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, or frame protection configured.
- No API surface today, but also no validation/rate-limit/spam layer to build on.
- Privacy policy does not identify a legal entity, retention periods, processors, or a rights-request workflow.
- No cookie notice; no analytics today, so no consent is currently triggered — this must be solved before GA4 is enabled.
- `next.config.js` allows remote images from **any** HTTPS host (`hostname: '**'`), an unnecessary proxy/abuse surface.
- Lead data (when implemented) will be personal data; no retention or access policy exists.

---

## 10. Performance observations (not a score)

- `framer-motion` is imported by the hero, navbar, sticky CTA, forms, and every `Reveal` wrapper (~many client components).
- Hero JPG is 1200×800 but displayed at full viewport width up to 1920px and above.
- Two separate CSS files are shipped; global CSS repeats dozens of raw hex values.
- Fonts: two Latin-only families, four Bodoni weights + italic and five Jost weights — heavier than needed.
- No preconnect/dns-prefetch needed (self-hosted fonts via next/font).
- No third-party scripts (good baseline).

**Targets after rebuild:** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 at p75 once field data exists; lab LCP ≤ 2.0s on a mid-tier mobile profile.

---

## 11. Prioritised backlog

### P0 — must ship before any promotion

1. Fix canonical/sitemap/robots to the real deployment domain (env-driven), never `coachayman.com`.
2. Implement a real, validated, spam-protected lead pipeline with honest success/failure states.
3. Remove every fabricated metric, testimonial, transformation, app claim, and scarcity cue.
4. Add privacy/cookie/terms foundations + consent before analytics.
5. Add GA4 + Search Console verification hooks (activate when owner supplies IDs).
6. Remove/relocate the unverified contact email and social links.

### P1 — search and conversion foundation

7. Localized route architecture (`/en`, `/fr`, `/ar`) with canonical + reciprocal hreflang + RTL.
8. Dedicated service pages (online coaching, weight loss, muscle building, nutrition), FAQ, results policy page.
9. Rebuild home, coaching, pricing, about, contact, apply around verified claims.
10. 301 redirect map from all legacy URLs.
11. Structured data: Organization, Person, Service, BreadcrumbList, FAQPage (no ratings).
12. Unique metadata, OG PNG, favicon, sitemap with alternates.

### P2 — quality

13. Design-token consolidation; remove Framer Motion; CSS-only motion; image/font optimisation.
14. WCAG 2.2 AA pass (contrast, focus, dialogs, forms, RTL).
15. Security headers; same-origin checks; rate limiting; no PII in analytics.
16. Automated route/metadata/link test script.
17. Documentation pack (architecture, SEO, analytics, research, deployment, rollback, deliverables).

### P3 — gated / blocked

18. Personal protection section: built, unlinked, `noindex`, pending licence/insurance/operations verification.
19. Real case studies: blocked on owner-supplied records + written consent.
20. Keyword volumes/difficulty: blocked on Keyword Planner/Ahrefs access.
21. GSC/GA4 baseline: blocked on property access.

---

## 12. Measurement register

Every figure in this audit is one of:

- **Observed** (HTTP status, rendered DOM, source code, Lighthouse lab result) — dated 2026-10-26.
- **Owner-supplied** (README brand profile) — not independently verified.
- **Unavailable** (Search Console, GA4, Keyword Planner, Ahrefs, Bing, field Core Web Vitals) — recorded as unavailable, never as zero.

No predicted ranking, traffic, conversion-rate, or revenue figure is included anywhere in this project.
