# AYMAN — SEO implementation

**Reviewed:** 2026-10-26.
**Scope:** technical SEO, metadata, structured data, indexation and internal linking. Keyword volumes, rankings, backlinks and competitor traffic are **unavailable** — see `KEYWORD-RESEARCH.md` and the measurement register at the end of `AUDIT.md`. No figure in this document is estimated.

## 1. Canonical domain

The previous build canonicalized every page to `https://coachayman.com`, which was verified to be a **different live business**. This was the single most damaging SEO defect on the site.

Current behaviour:

- Canonical origin comes from `NEXT_PUBLIC_SITE_URL`.
- Default when unset: `https://ayman-nu.vercel.app`.
- `absoluteUrl()` is the only path builder used by metadata, sitemap, structured data and the check script.
- `coachayman.com` does not appear in source or output.
- A production custom domain must be confirmed by the owner and set in the environment **before** promotion. Until then, the Vercel host is the honest canonical.

## 2. URL and indexation policy

| Rule | Implementation |
|---|---|
| Locale-prefixed routes | `/en`, `/fr`, `/ar` |
| No trailing slash | `trailingSlash: false`; Next 308-normalizes |
| Root negotiation | 307 to the best locale (cookie → `Accept-Language` → EN) |
| Legacy URLs | 301 to the locale equivalent |
| Unknown locale path | Localized 404 |
| Preview/development | `Disallow: /` in robots **and** `X-Robots-Tag: noindex, nofollow` |
| API | `Disallow: /api/` |
| Protection page | Unlinked, absent from sitemap, `noindex`, 404 while gated |
| 404/utility | Not in sitemap |

Legacy redirect map (`middleware.ts` → `lib/routes.ts`):

| Old | New |
|---|---|
| `/home` | `/[lang]` |
| `/about` | `/[lang]/about` |
| `/coaching` | `/[lang]/coaching` |
| `/pricing` | `/[lang]/pricing` |
| `/transformations` | `/[lang]/results` |
| `/results` | `/[lang]/results` |
| `/apply` | `/[lang]/apply` |
| `/contact` | `/[lang]/contact` |
| `/privacy` | `/[lang]/privacy` |
| `/terms` | `/[lang]/terms` |
| `/faq` | `/[lang]/faq` |
| `/cookies` | `/[lang]/cookies` |
| `/personal-protection` | `/[lang]/personal-protection` (still gated) |

Both unprefixed (`/transformations`) and prefixed (`/fr/transformations`) forms are handled. Redirects preserve the original locale when one is present.

## 3. Metadata

`pageMetadata(locale, { title, description, path, noindex, absoluteTitle })` produces:

- unique title and description per locale and page;
- `<link rel="canonical">` to the exact locale URL;
- reciprocal `hreflang` for EN/FR/AR plus `x-default` → EN;
- Open Graph (`og:type`, URL, site name, title, description, locale, 1200×630 PNG);
- Twitter `summary_large_image`;
- robots directives (`noindex` only where intended).

Home and service pages use absolute titles to avoid a duplicated brand suffix; inner pages use the layout template `%s | AYMAN Coaching`.

Title pattern:

- Home: `Online Fitness & Nutrition Coaching | Coach Ayman`
- Service: descriptive intent + `| Coach Ayman`
- Inner page: `Page name | AYMAN Coaching`

## 4. Structured data

| Type | Where | Notes |
|---|---|---|
| `Organization` | Global | Name, URL, email, phone, founder, area served, languages |
| `Person` | Global | Coach name, role, languages, country |
| `WebSite` | Global | Publisher, `inLanguage` |
| `Service` | Each service page | Provider reference, service URL, phone |
| `FAQPage` | FAQ, pricing, service pages | Only questions visibly answered on the page |
| `BreadcrumbList` | Inner pages | Matches visible breadcrumb |
| `CollectionPage` + `ItemList` | Coaching index | Lists the four services |
| `WebPage` / `AboutPage` / `ContactPage` | Matching pages | Page-level context |

Deliberately **not** emitted:

- `AggregateRating` / `Review` — no verified review source.
- `Offer` prices in schema — prices are confirmed in writing and payment is arranged off-site; adding them invites stale-price rich results.
- `LocalBusiness` — there is no public clinic address or verified local presence.
- `MedicalBusiness` / medical claims — coaching is explicitly educational.
- Protection service schema — the service is gated.

`SeoJsonLd` escapes `<` to `\u003c` to prevent script-breakout.

## 5. Sitemap and robots

- `app/sitemap.ts` generates every indexable locale URL with `alternates.languages` and `x-default`.
- Protection, 404, API and nested route variants are excluded.
- Priorities are editorial, not ranking claims.
- `app/robots.ts` points at `${SITE.url}/sitemap.xml` and declares the host.
- Preview/development get a full disallow, independent of the deployment URL.

## 6. Images

- Local assets only; the previous `hostname: '**'` remote-image wildcard was removed.
- Hero: resized to 1600×2400, ~390 KB, `priority`, explicit `sizes`.
- OG image is a real 1200×630 PNG; the previous SVG was unsupported by most social platforms.
- Favicon, 32/180/192/512 PNG icons and a web manifest exist.
- Alt text is localized and descriptive; decorative layers use `aria-hidden`.

## 7. Internal linking

- Primary navigation: Coaching, Results, About, Pricing, FAQ, Contact.
- Footer: explore, four services, contact, legal, consent settings.
- Home links to each service, pricing, results policy, FAQ and apply.
- Each service links to the other three, pricing and apply.
- Breadcrumbs appear on every inner page and match `BreadcrumbList`.
- No orphan marketing pages.
- Anchor text is descriptive; “click here” is not used.

## 8. Search Console

The verification hook is implemented:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>
```

It emits `<meta name="google-site-verification">` in the locale layout. After deployment:

1. Add the property in Search Console (domain property preferred).
2. Verify via DNS or the meta token above.
3. Submit `/sitemap.xml`.
4. Inspect `/en`, `/fr`, `/ar`, `/pricing`, `/coaching` and one service page.
5. Confirm the canonical host matches the verified property.
6. Record baseline impressions/clicks/coverage **when access exists**. No baseline is claimed here.

## 9. What is not claimed

- No keyword volume, difficulty, CPC, traffic, ranking or conversion figure.
- No guarantee of indexing or ranking.
- No fabricated review, rating, address or local-pack presence.
- Search Console and GA4 properties were not available during this work, so pre-launch baselines are **unavailable, not zero**.

## 10. Post-launch checklist

- [ ] Confirm the production domain and set `NEXT_PUBLIC_SITE_URL`.
- [ ] Confirm no page outputs `coachayman.com` (`npm run check`).
- [ ] Verify `/sitemap.xml` and `/robots.txt` in production.
- [ ] Request indexing for the three locale homes and money pages.
- [ ] Check hreflang in GSC “International targeting”.
- [ ] Review the Page Indexing report after 7 and 28 days.
- [ ] Add `NEXT_PUBLIC_GA_ID` and verify consent behaviour before collecting data.
- [ ] Publish verified case studies only after written consent (`docs/CONTENT-STRATEGY.md`).
