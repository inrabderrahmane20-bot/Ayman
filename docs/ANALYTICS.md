# AYMAN — Analytics and measurement

**Reviewed:** 2026-10-26.
**Baseline data:** unavailable. No GA4 property, Search Console property, or historical export was supplied. Nothing in this document invents a baseline, traffic figure, conversion rate or ranking.

## 1. Principles

1. No analytics script loads before explicit consent.
2. No advertising or personalization storage is granted.
3. No names, emails, phone numbers, message content, IP addresses or free-text values are sent to GA4.
4. Declining is as easy as accepting and is remembered.
5. A measurement plan exists even while the property is unavailable, so launch is not blocked on credentials.

## 2. Consent flow

| Step | Behaviour |
|---|---|
| First visit | `ConsentBanner` appears; no GA request is made |
| Accept | Choice stored under `ayman-consent-v1`; GA4 script loads; `page_view` is sent manually |
| Decline | Choice stored; script never loads; existing `_ga*`/`_gid` cookies are expired |
| Re-open | Footer “Cookie settings” dispatches an event and shows the banner again |
| Language cookie | `NEXT_LOCALE` is functional storage, not analytics |
| Banner suppression | Stored choice prevents repeat prompts |

Consent Mode defaults set `ad_storage`, `ad_user_data` and `ad_personalization` to `denied`; `analytics_storage` becomes `granted` only after opt-in.

## 3. Configuration

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
```

If `NEXT_PUBLIC_GA_ID` is empty, no analytics component is rendered. The rest of the site works normally.

## 4. Event taxonomy

All events are typed in `lib/analytics.ts`. Parameters are deliberately small and non-identifying.

| Event | Fires when | Parameters |
|---|---|---|
| `page_view` | After consent and on client-side route change | `page_title`, `page_location`, `page_path` |
| `cta_click` | Internal CTA link | `location`, optional `label` |
| `apply_start` | Application form mounts | `location` |
| `apply_submit` | Valid application is submitted | `location`, `plan` |
| `apply_delivered` | Server confirms upstream delivery | `location` |
| `apply_fallback` | Server returns an honest non-delivery | `location` |
| `contact_submit` | Valid contact message is submitted | `location` |
| `contact_delivered` | Server confirms delivery | `location` |
| `contact_fallback` | Server returns non-delivery | `location` |
| `whatsapp_click` | WhatsApp link | `location` |
| `email_click` | `mailto:` link | `location` |
| `language_switch` | Language changed | `from`, `to` |
| `pricing_view` | Pricing page mounts | `location` |
| `plan_select` | Plan CTA clicked | `plan`, `price`, `currency` |
| `faq_open` | FAQ item opened | `group`, `index` |
| `calculator_use` | Calorie estimate calculated | `goal` |
| `protection_enquiry` | Gated protection form submitted | `location` |

No event contains user text. `plan` is a fixed slug, `price` is the published number, and `index` is a position.

## 5. Funnel definitions

Primary conversion: **a lead that the API reports as delivered** (`apply_delivered` / `contact_delivered`).

Secondary conversion: **fallback contact** (`apply_fallback` / `contact_fallback` followed by `whatsapp_click` or `email_click`). These are not counted as delivered leads.

Recommended GA4 exploration:

1. Landing page → `apply_start` → `apply_submit` → `apply_delivered`.
2. Locale comparison: `page_view` by `page_path` prefix `/en`, `/fr`, `/ar`.
3. Service page → `cta_click` with `label="apply"` → `apply_submit`.
4. Pricing → `plan_select` → `apply_submit` filtered by `plan`.
5. Fallback rate = `apply_fallback` ÷ (`apply_delivered` + `apply_fallback`).
6. FAQ engagement by `group` (diagnostic only; not a conversion).

Do not compare rates until there is enough traffic to make them meaningful. No threshold is asserted here.

## 6. Search Console

Verification is available through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Once verified:

- Submit `/sitemap.xml`.
- Monitor Page Indexing, International Targeting and Core Web Vitals.
- Record the date access was granted and the first full 28-day window.
- Treat the first 28 days as a baseline period, not a performance verdict.

Until then, all organic metrics are **unavailable**.

## 7. Privacy controls

- GA4 IP anonymization is enabled.
- Google Signals and ad personalization are not enabled.
- No User-ID, no cross-site tracking, no remarketing, no pixels.
- The consent policy and cookie policy describe storage keys and providers.
- Lead data is never sent to analytics; delivery happens server-side by email/webhook.

## 8. What still requires owner action

| Item | Status |
|---|---|
| GA4 property + measurement ID | Not supplied |
| Search Console property | Not supplied |
| Historical baseline export | Not supplied |
| Consent-mode verification in GA4 DebugView | Blocked until an ID exists |
| Conversion imports into Google Ads | Not applicable; no ads account |
| Call/WhatsApp attribution | Not implemented; would need a provider and a privacy review |

## 9. Verification steps after enabling

1. Deploy with `NEXT_PUBLIC_GA_ID` set.
2. Open DevTools → Network; confirm **no** `googletagmanager.com` request before consent.
3. Accept; confirm one `gtag/js` request and one `page_view`.
4. Navigate client-side; confirm a second `page_view` with the new path.
5. Submit a test lead; confirm `apply_delivered` **only** if the server reports delivery.
6. Decline in a fresh profile; confirm no script and no `_ga` cookie.
7. Re-open cookie settings from the footer; confirm the banner returns.
