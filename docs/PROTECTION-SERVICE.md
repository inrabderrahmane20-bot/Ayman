# Personal protection service — gated readiness plan

**Status:** built, unlinked, `noindex`, and returns **404** while `NEXT_PUBLIC_PROTECTION_LIVE` is not `true`.
**Decision owner:** Coach Ayman.
**Last reviewed:** 2026-10-26.
**Not legal advice.** Every jurisdiction in scope requires review by qualified local counsel before any service is offered.

---

## 1. Decision

Personal protection is **not** being offered, marketed, priced or booked. The site contains a private status/enquiry page so the service can be evaluated and, if approved, launched without rebuilding the site.

The page exists to:

- document the proposed scope and the checks that must pass;
- prevent the service from leaking into the coaching brand;
- give a controlled place to receive a **preliminary** enquiry after launch approval;
- make the “not offered” state explicit rather than implying availability.

The page must never be described as “coming soon”, “available on request”, “licensed”, “insured” or “professional bodyguards” while the gates below are open.

## 2. What is implemented

| Control | Implementation |
|---|---|
| Route | `/[lang]/personal-protection` |
| Default state | `notFound()` → 404 |
| Flag | `NEXT_PUBLIC_PROTECTION_LIVE=true` |
| Indexing | `noindex` metadata even when enabled |
| Sitemap | Excluded always (`app/sitemap.ts`) |
| Navigation | Not linked in header or footer |
| Internal links | None from public pages |
| API | `formType: "protection"` rejected with 404 unless the flag is true |
| Content | Proposed scope, verification gates, “not offered” list, enquiry form, emergency disclaimer |
| Structured data | A minimal `WebPage` only; no service, offer or local-business schema |
| Analytics | `protection_enquiry` exists but no PII is sent |

Because the page is `noindex`, enabling it does **not** make it a search-acquisition channel. It is a private, directly shared page for vetted introductions or a future decision to market the service properly.

## 3. Service boundary

### Proposed enquiry areas (not promises)

- Personal risk and movement review for individuals and families.
- Travel and event security planning, coordinated with local providers.
- Close protection coordination **only** where legally licensed and insured.
- Residential and workplace security recommendations.
- Discreet liaison with vetted local partners.
- Crisis-response planning and rehearsed procedures.

### Explicitly not offered

- Armed services of any kind.
- Any service requiring a licence the provider does not hold.
- Emergency response, or a replacement for police, ambulance or military services.
- Guarantees of absolute safety or prevention of all incidents.
- Surveillance or investigation of individuals.

This boundary must remain on the page after launch. Removing it would turn a cautious enquiry page into a misleading service advertisement.

## 4. Launch gates

All gates must be closed and evidenced before the flag is enabled. A gate is not “probably fine”; it is a document, a date and a named reviewer.

| Gate | Requirement | Evidence to store | Owner | Status |
|---|---|---|---|---|
| G0 | Written business decision to enter the category | Signed decision note with date | Coach | Open |
| G1 | Legal entity and permitted activities confirmed | Corporate documents + counsel opinion | Coach + counsel | Open |
| G2 | Licensing/permit in every country of operation | Licence numbers, scope, expiry | Coach + counsel | Open |
| G3 | Professional indemnity and public liability cover | Certificate naming the entity and activities | Insurance broker | Open |
| G4 | Vetted personnel and training standards | Background checks, training records, role matrix | Operations lead | Open |
| G5 | Written operations plan | Scope, mobilisation, escalation, incident, debrief | Operations lead | Open |
| G6 | Data protection for sensitive information | Separate notice, lawful basis, retention, access control, DPIA | Coach + adviser | Open |
| G7 | Contracts and use-of-force policy reviewed locally | Counsel-approved templates | Counsel | Open |
| G8 | Emergency and media/crisis communication plan | Contact tree, holding statement, insurer notification path | Operations lead | Open |
| G9 | Insurance and counsel confirmation that the live page copy is accurate | Signed copy review | Coach + counsel | Open |

**Default: do not enable.** If any gate is open, the flag stays `false`.

## 5. Jurisdiction checklist

This is a preparation checklist, not a legal conclusion.

### Morocco

- Confirm the entity can legally provide each proposed activity.
- Confirm whether private security/close protection requires a specific licence, authorisation or registered structure.
- Confirm local employment, subcontracting and firearm rules (the service offers no armed work).
- Confirm insurance is valid for Moroccan operations and for services sold to foreign clients.
- Confirm data-protection registration/notification and cross-border transfer rules for client files.
- Confirm consumer-contract language, cancellation and complaint handling.

### Saudi Arabia

- Confirm licensing and foreign-ownership rules for security services.
- Confirm whether the entity may contract directly or must work through a licensed local provider.
- Confirm personnel vetting, residency and work-permit requirements.
- Confirm insurance and liability rules.
- Confirm data-localisation and sensitive-data rules.
- Obtain local counsel sign-off before any Saudi-facing copy is published.

### Qatar

- Confirm licensing and foreign-ownership rules for security services.
- Confirm whether operations must be delivered by a licensed Qatari entity or partner.
- Confirm personnel vetting and residency requirements.
- Confirm insurance and liability rules.
- Confirm data-protection and cross-border transfer rules.
- Obtain local counsel sign-off before any Qatar-facing copy is published.

### Cross-border engagements

- Identify the country of performance, the client’s nationality and the provider’s entity.
- Do not assume the law of the client’s residence governs.
- Confirm tax, invoicing and foreign-exchange treatment separately.
- Confirm sanctions and export-control screening where relevant.

## 6. People and operations

Minimum before launch:

1. **Named accountable lead** for every engagement.
2. **Role matrix** with clear authority and no ambiguous “security consultant” titles.
3. **Background checks** appropriate to the jurisdiction, documented and repeatable.
4. **Training records** for first aid, evacuation, driver security, conflict de-escalation and incident reporting, as applicable.
5. **Subcontractor register** with licence and insurance evidence for each partner.
6. **Mobilisation checklist** per engagement, including a written scope and a client briefing.
7. **Incident reporting** with timelines, preservation of evidence and insurer notification.
8. **Debrief and complaints** process with a named reviewer.
9. **Emergency escalation** that routes to local emergency services first, not to the website or social media.

The site is **not** an emergency channel. The page already says this; keep it visible.

## 7. Sensitive data handling

The existing enquiry form is deliberately generic and warns visitors not to send sensitive security details, identity documents or medical information. That is appropriate for a preliminary enquiry only.

Before accepting real operational data:

- Publish a **separate** privacy notice for protection clients.
- Collect sensitive data through an encrypted, access-controlled channel, not the public form.
- Define lawful basis, retention period and deletion method.
- Restrict access to named personnel; log access.
- Do not store identity documents in the repository, email inbox or generic CRM.
- Run a data-protection impact assessment if the jurisdiction requires one.
- Have a breach-response plan with regulator and client notification steps.
- Do not send any protection enquiry content to GA4 or any advertising tool.

## 8. Technical activation runbook

Do **not** perform these steps until every gate is closed.

1. Obtain written approval naming the countries, services, entity, insurance and counsel reviewer.
2. Update the page copy so the status reflects reality (no “pending”, no implied availability).
3. Update `lib/content/protection.ts` in all three locales; have each translation reviewed.
4. Publish the separate protection privacy notice and link it from the page.
5. Set `NEXT_PUBLIC_PROTECTION_LIVE=true` in the production environment only.
6. Confirm lead delivery is configured and tested; the fallback is not acceptable for sensitive enquiries.
7. Decide deliberately whether to add the page to navigation. The current decision is **no**; it remains a private, directly shared page.
8. Keep the page out of the sitemap and keep `noindex` until a separate, counsel-approved marketing decision is made.
9. Run `npm run check`; the protection assertion changes from “404 when disabled” to “enabled page is noindex”.
10. Test the form with a non-sensitive test enquiry and confirm delivery.
11. Record the launch decision, date, approvers and evidence location in the register below.
12. Review after 30 days: enquiries, incidents, complaints, insurance notifications, legal changes.

### Rollback

Set `NEXT_PUBLIC_PROTECTION_LIVE=false`, redeploy, and confirm the route returns 404 and the API rejects `formType: "protection"`. Preserve any received enquiries under the retention policy; do not delete them as part of a rollback.

## 9. Copy rules after launch

- Never say “licensed” unless the specific licence number and scope are current.
- Never say “insured” without naming the coverage type internally; public copy may say “insured where required” only after counsel approves.
- Never imply police, military or government affiliation.
- Never promise absolute safety.
- Never publish client names, locations, travel dates or identities.
- Never use images of personnel in tactical equipment as generic marketing.
- Always include the emergency disclaimer and the “not offered” list.
- Always state that an enquiry is not a confirmed engagement.

## 10. Stop conditions

Stop and revert to `false` if:

- a licence expires or is challenged;
- insurance lapses or excludes the activity;
- a partner cannot evidence licensing or insurance;
- an incident occurs and the escalation process is not followed;
- counsel advises that the copy or scope is inaccurate;
- a client’s sensitive data is exposed;
- the service is asked to do something outside the stated boundary.

## 11. Evidence register

| Date | Gate | Evidence | Reviewer | Decision |
|---|---|---|---|---|
| — | G0–G9 | — | — | Not started |

## 12. Related documents

- `docs/AUDIT.md` — why the service was gated.
- `lib/content/protection.ts` — the localized page copy.
- `app/[lang]/personal-protection/page.tsx` — the route gate.
- `app/api/leads/route.ts` — server-side rejection when disabled.
- `docs/DEPLOYMENT.md` — environment flag and rollback.
- `docs/CONTENT-STRATEGY.md` — claims policy.
