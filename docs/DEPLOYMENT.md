# AYMAN — Deployment, verification and rollback

**Last reviewed:** 2026-10-26
**Target host:** Vercel
**Current production:** `https://ayman-nu.vercel.app` (still the pre-rebuild deployment until this working tree is committed and deployed)
**Repository:** `C:\Users\inrab\Documents\GitHub\Ayman`

---

## 1. Prerequisites

| Item | Version / requirement |
|---|---|
| Node.js | 20 LTS or newer (verified with v24.14.0) |
| npm | 10 or newer (verified with 11.9.0) |
| Next.js | 14.2.x |
| Vercel project | Existing project linked to this repository |
| Domain | Optional custom domain; must be controlled by the owner |
| Lead delivery | Resend account **or** a webhook endpoint; optional but recommended before promotion |
| Analytics | GA4 property; optional |
| Search Console | Property access; optional but required for reporting |

## 2. Environment variables

Set these in **Vercel → Project → Settings → Environment Variables**. `NEXT_PUBLIC_*` values are embedded at build time, so changing one requires a new deployment.

| Variable | Required | Example | Effect |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://ayman-nu.vercel.app` | Canonical origin for metadata, hreflang, sitemap, robots, JSON-LD. Defaults to the Vercel host if unset. **Never** set to a domain the project does not control. |
| `NEXT_PUBLIC_GA_ID` | No | `G-XXXXXXXXXX` | Enables consent-gated GA4. Unset = no analytics request. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | token | Emits the Search Console meta tag. |
| `NEXT_PUBLIC_PROTECTION_LIVE` | No | `false` | Must be exactly `true` to serve the protection page/API. Keep `false`. |
| `RESEND_API_KEY` | No | `re_...` | Enables email delivery. |
| `LEAD_TO_EMAIL` | No | `aymanyakhmim1@gmail.com` | Lead recipient. Defaults to the site email. |
| `LEAD_FROM_EMAIL` | No | `AYMAN Website <leads@yourdomain.com>` | Must be a Resend-verified sender for reliable delivery. |
| `LEAD_WEBHOOK_URL` | No | `https://...` | Takes precedence over Resend. Receives JSON. |
| `LEAD_ALLOWED_ORIGIN` | No | `https://custom-domain.com` | Extra accepted origin during a domain migration. |

Start from `.env.example`. Do not commit `.env.local` or real keys.

### Delivery behaviour

| Configuration | Result |
|---|---|
| `LEAD_WEBHOOK_URL` set and returns 2xx | `delivered: true` |
| `RESEND_API_KEY` set and Resend accepts | `delivered: true` |
| Neither set | `delivered: false`, `code: not_configured`, with WhatsApp/email fallback |
| Provider configured but fails | `delivered: false`, `code: delivery_failed`, with fallback |
| Protection form while flag off | HTTP 404, `code: disabled` |

The UI never claims delivery unless the server confirms it. Do not “fix” this by returning success when delivery is unconfigured.

### Resend notes

1. Create an API key with send permission.
2. Verify the sending domain in Resend, or use a sender Resend explicitly allows for testing.
3. `onboarding@resend.dev` is a testing sender and is not appropriate for production lead delivery to arbitrary recipients; set `LEAD_FROM_EMAIL` to a verified domain address.
4. Send one test lead and confirm it arrives, including reply-to.
5. Keep the recipient as a mailbox the coach actually monitors.

### Webhook payload

`POST` JSON with `formType`, `name`, `email`, `phone`, `country`, `goal`, `experience`, `days`, `equipment`, `language`, `plan`, `message`, `source`, `submittedAt`.

The endpoint must return 2xx within 8 seconds. Do not log the body in a third-party service unless that service is covered by the privacy policy.

## 3. Local build and verification

```bash
npm ci
npm run typecheck
npm run build
npm run start -- -p 3000
```

In a second terminal:

```bash
npm run check
```

Optional: run the lead API checks against the local server.

```bash
node scripts/test-leads.mjs
```

### Verified on 2026-10-26 (local production build)

| Check | Result |
|---|---|
| `next build` | Passed; 54 static/dynamic routes generated |
| TypeScript | Passed during build |
| `npm run check` | **46/46 passed** against `http://localhost:3000` |
| Lead API checks | **9/9 passed** (invalid JSON, validation, honeypot, timing, cross-origin, protection gate, honest delivery state, fallback links, rate limit) |
| Localized 404 | EN/FR/AR unknown paths and unknown service slugs return 404 with a localized title and H1, correct `lang`/`dir`, no canonical and `noindex, nofollow`; verified in a real browser after hydration |
| Internal crawl | 54 HTML pages + 34 assets (88 URLs) fetched; no broken links, wrong canonical origin, missing hreflang or `coachayman.com` reference |
| Canonical/hreflang | Production origin, reciprocal EN/FR/AR + `x-default` |
| Arabic RTL | `dir="rtl"` present |
| Legacy redirects | 301 to locale equivalents |
| Protection while off | 404; form POST rejected |
| Security headers | CSP, HSTS, nosniff, frame denial, no `X-Powered-By` |

These are local pre-deployment results. They must be repeated against the production URL after deployment.

### Lighthouse (mobile, local production build, median of 3 runs)

| Page | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| `/en` | 94 | 100 | 100 | 100 | 3.03 s | 74 ms | 0 |
| `/fr` | 93 | 100 | 100 | 100 | 3.11 s | 72 ms | 0 |
| `/ar` | 93 | 100 | 100 | 100 | 3.09 s | 60 ms | 0 |

Lighthouse 13.5.0, default mobile form factor and simulated throttling, three runs per locale; the median score is shown. These are lab scores on a local production build, not field data. LCP is above the 2.5 s "good" threshold on all three locales, so image/font work remains a follow-up; the hero is already resized and served from the same origin.

## 4. Deploy to Vercel

### Option A — Git integration

1. Commit and push the working tree.
2. Vercel builds the branch. Confirm the build log shows all routes generated.
3. Set the environment variables for **Production** (and separately for Preview if needed).
4. Redeploy after adding or changing any `NEXT_PUBLIC_*` variable.
5. Open the deployment URL and run the production checks.

### Option B — Vercel CLI

```bash
npx vercel pull --yes --environment=production
npx vercel build --prod
npx vercel deploy --prebuilt --prod
```

Do not deploy from an uncommitted tree if you need a reproducible rollback point. Commit first.

### Domain

1. Add the domain in Vercel → Domains.
2. Configure the DNS record Vercel specifies.
3. Wait for certificate issuance.
4. Set `NEXT_PUBLIC_SITE_URL` to the final `https://` origin **without a trailing slash**.
5. Redeploy.
6. Run `npm run check` with `BASE_URL=https://the-domain` and confirm canonicals use the new origin.
7. Keep `ayman-nu.vercel.app` as a redirect or alternate host; do not let it serve duplicate canonical content.

`coachayman.com` is a different business and must never be used as the canonical origin.

## 5. Production verification

```bash
BASE_URL=https://ayman-nu.vercel.app npm run check
```

Then manually confirm:

- [ ] `/` negotiates to a locale with 307.
- [ ] `/en`, `/fr`, `/ar` return 200 and correct `lang` / `dir`.
- [ ] Canonical host matches the intended production origin on every page.
- [ ] No response contains `coachayman.com`.
- [ ] Hreflang is reciprocal and `x-default` points to EN.
- [ ] `/sitemap.xml` lists all indexable locales, excludes protection, uses the production origin.
- [ ] `/robots.txt` references the sitemap, disallows `/api/`, and preview deployments are fully disallowed.
- [ ] `/en/personal-protection` returns 404 while the flag is off.
- [ ] An unknown path returns a localized 404.
- [ ] Security headers are present (CSP, HSTS, nosniff, frame denial).
- [ ] The application form shows an honest fallback when delivery is not configured.
- [ ] With delivery configured, a test lead arrives and the UI reports delivered.
- [ ] No `googletagmanager.com` request occurs before consent.
- [ ] Accepting consent loads GA4 once; declining loads nothing.
- [ ] Arabic pages render RTL and forms are usable at 360 px.

## 6. Search Console and GA4

### Search Console

1. Prefer a **Domain property** verified by DNS.
2. Otherwise use the meta token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy.
3. Submit `/sitemap.xml`.
4. Inspect `/en`, `/fr`, `/ar`, `/pricing`, `/coaching` and one service page.
5. Confirm the canonical host in the rendered HTML.
6. Record the date access was granted. The first 28 days are a baseline period, not a verdict.
7. No impressions/clicks/position baseline is claimed in this repository because no property was available.

### GA4

1. Create a web data stream for the production origin.
2. Set `NEXT_PUBLIC_GA_ID` and redeploy.
3. Confirm no request before consent.
4. Accept and confirm one `page_view`; navigate and confirm a second.
5. Submit a test lead and confirm `apply_delivered` **only** when the server reports delivery.
6. Decline in a fresh profile and confirm no `_ga` cookie and no script.
7. Mark `apply_delivered` and `contact_delivered` as key events if desired. Do not import conversions into ads until the privacy review covers advertising use.

## 7. Rollback

### Fast rollback (Vercel)

1. Vercel → Deployments → select the last known-good deployment → **Promote to Production**.
2. Confirm the marketing pages and API respond.
3. Record the incident, the reason and the deployment ID.

This is the preferred response to a bad release.

### Code rollback

```bash
git revert <commit>
git push
```

Do not force-push production history. Do not delete lead data as part of a code rollback.

### If lead delivery fails

- The form automatically shows WhatsApp/email fallback; do not disable it.
- Check provider status, API key, sender verification and recipient mailbox.
- If the failure is prolonged, update the page copy or contact channel only after confirming the fallback works.
- Never switch the API to a false-success response to hide the failure.

### If the protection page is enabled by mistake

1. Set `NEXT_PUBLIC_PROTECTION_LIVE=false`.
2. Redeploy.
3. Confirm `/en/personal-protection` returns 404 and the API rejects protection enquiries.
4. Review access logs and any enquiries received.
5. Record the incident.

## 8. Monitoring

| What | How | Cadence |
|---|---|---|
| Uptime and response status | Vercel analytics / external uptime monitor | Continuous |
| Build failures | Vercel notifications | Per push |
| Lead delivery | Provider dashboard + test lead after config changes | Weekly, then monthly |
| Form fallback rate | GA4 fallback events and manual review | Monthly |
| Search indexing | Search Console Page Indexing | Weekly after launch, then monthly |
| Core Web Vitals | Search Console field data when available | Monthly |
| Security headers | `npm run check` | Per release |
| Dependency advisories | `npm audit` / Dependabot | Monthly |
| Protection flag | Environment audit | Quarterly |

### Known limitations

- **Rate limiting is in-memory per serverless instance.** It resets on cold start and does not stop a distributed attacker. Use Vercel Firewall, Upstash/Redis or an edge limiter if abuse becomes real.
- **No CRM or database.** Leads exist only in the delivery provider/webhook and the owner's mailbox. Back up or forward them if retention matters.
- **No payment integration.** Payment is arranged after the fit check, off-site.
- **No automated end-to-end browser suite.** `npm run check` is an HTTP smoke test; visual and interaction checks are manual.
- **Search/analytics baselines are unavailable** until the owner supplies property access.
- **Real case studies are unavailable** until verified records and written consent exist.
- **Custom 404s are client-rendered.** Next.js 14 cannot server-render a `not-found` boundary that sits under a root dynamic segment (`app/[lang]`); the response is a genuine 404 with a correct localized `<title>`, `noindex` and no canonical, and the localized UI appears after hydration. Without JavaScript the 404 body is blank. This is a framework limitation, not a missing route. Revisit with Next.js `global-not-found` after an upgrade.
- **Windows builds emit an empty `next-font-manifest.json`.** Local `next build` produces no `<link rel="preload" as="font">` tags because of a known Next/webpack Windows issue. Production is built on Vercel Linux, where preload tags are expected, but this has not been directly reproduced on this machine. Verify in the deployed HTML after the first Vercel build.
- **Fonts are self-hosted.** The first Vercel build failed because `next/font/google` could not reach `fonts.gstatic.com` from the build machine. Bodoni Moda, Jost and Noto Kufi Arabic now live in `app/fonts/` and load through `next/font/local`, so builds have no external font dependency. Licenses are in `app/fonts/OFL.txt`.
- **Next.js 14.2.35 has unfixed upstream advisories.** `npm audit` reports one critical advisory group against Next.js 14.2.35 (DoS/cache and image-optimizer RCE classes) plus a high PostCSS advisory nested inside Next. No patched 14.x release exists; the offered fix is Next 16.4.3, a breaking major upgrade. Exposure is reduced but not eliminated: the site uses no Server Actions, no remote image patterns, no rewrites, no CSP nonces, no untrusted scripts, no SVG/AVIF image optimization and runs on Linux. Plan and test a Next 16/React 19 migration. Non-breaking transitive advisories were cleared on 2026-10-26.

## 9. Release checklist

- [ ] `npm ci`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run check` locally
- [ ] Lead API tests locally (delivery configured and unconfigured)
- [ ] Lighthouse on `/en`, `/fr`, `/ar` (record scores; no field-data claim)
- [ ] Environment variables reviewed; no secrets committed
- [ ] `NEXT_PUBLIC_SITE_URL` set to the final origin
- [ ] `NEXT_PUBLIC_PROTECTION_LIVE=false`
- [ ] Commit with a descriptive message
- [ ] Deploy
- [ ] `BASE_URL=<production> npm run check`
- [ ] Test lead delivered to the real inbox
- [ ] GA4 consent check (if enabled)
- [ ] Search Console sitemap submitted (if access exists)
- [ ] Rollback deployment ID recorded

## 10. Verification log

| Date | Environment | Build | Smoke checks | Lead API | Notes |
|---|---|---|---|---|---|
| 2026-10-26 | Local production (`localhost:3000`) | Passed, 54 routes | 46/46 | 9/9 | Pre-deployment verification |
| 2026-10-26 | Local production (`localhost:3000`) | Passed after 404 fix | 46/46 | 9/9 | Localized 404 fixed; 88-URL crawl clean; Lighthouse `/en`, `/fr`, `/ar` recorded above |
| 2026-10-26 | Production `ayman-nu.vercel.app` | Not deployed | Not run | Not run | Old deployment still live; release commit `65bfad7` is ready. Vercel CLI is logged out and the repo is not linked locally, so deployment needs the owner's Vercel login. |

