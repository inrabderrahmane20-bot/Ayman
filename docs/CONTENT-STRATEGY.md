# AYMAN — Content strategy

**Version:** 1.0
**Last reviewed:** 2026-10-26
**Scope:** all public copy, proof standards, localization and editorial operations.
**Related:** `docs/AUDIT.md` (claims review), `docs/SEO.md`, `docs/KEYWORD-RESEARCH.md`, `research/keywords.csv`.

---

## 1. Objective

Convert a qualified visitor into an application or a direct conversation **without overstating what the coach can deliver**.

The site is not a content farm. It is a small, high-intent site with four service pages, a pricing page, an application page and a proof policy. Content exists to answer buying questions and remove risk, not to publish volume for its own sake.

**Primary conversion:** a lead the server confirms as delivered (`apply_delivered`, `contact_delivered`).
**Secondary conversion:** a fallback WhatsApp or email contact after an honest non-delivery state.

## 2. Audience

| Segment | Language | Main question | What they need to see |
|---|---|---|---|
| Adults who already train but are unsure about nutrition | EN / FR / AR | “Can someone organise my food without a rigid diet?” | Nutrition scope, check-in cadence, exclusions, price |
| Adults returning after a break | EN / FR / AR | “Is this realistic with my schedule?” | Process, minimum commitment, honest timelines |
| Busy professionals in Morocco, Saudi Arabia, Qatar | FR / AR / EN | “Is this credible and discreet?” | Clear identity, qualifications stated accurately, written scope, direct contact |
| People comparing coaches or apps | EN / FR / AR | “Why a coach instead of an app?” | Human review, written plan, accountability, no app pretence |
| People with medical concerns | Any | “Is this safe for me?” | Explicit limits and referral language |

Not the audience: minors, people seeking medical treatment, people seeking emergency or protection services, people who want a guarantee of a specific result.

## 3. Messaging hierarchy

1. **What it is:** online fitness and nutrition coaching in English, French and Arabic.
2. **Who it is for:** adults who want a written plan, scheduled reviews and direct support.
3. **How it works:** assessment → written plan → scheduled check-ins → adjustments.
4. **What it costs:** $99 / $169 / $249 USD per month, billed monthly, no minimum term.
5. **What it is not:** not an app, not medical care, not a quick fix, not a guarantee.
6. **What to do next:** apply, or contact directly on WhatsApp or email.

Every page should make sense if a visitor reads only the H1, the intro and the primary CTA.

## 4. Claims policy

### 4.1 Allowed

| Claim | Condition |
|---|---|
| “220+ clients coached” | Owner-reported. Keep the wording “owner-reported” in internal documentation; public copy may state the figure plainly but must not derive other metrics from it. |
| “Coaching in English, French and Arabic” | True and implemented. |
| “Online, worldwide” | True; no local presence implied. |
| “NASM Nutrition Essentials” | Describe as a completed course, not “NASM Certified”. |
| “Healthy Practices certification” | Use the owner’s exact wording; do not inflate the issuer or level. |
| “Exercise science background” | Background, not a degree claim. |
| Published prices | Only while the owner confirms them. Currency and billing terms must be adjacent. |

### 4.2 Prohibited until evidence exists

- Any client count other than the owner-reported 220+.
- “12k kg lost”, “180+ transformations”, “9 countries”, “5+ years”, “5.0 rated”.
- Star ratings, review counts, awards, “best”, “#1”, “top-rated”, “most trusted”.
- Named transformations, ages, weights, before/after photos or quotes without written consent and a source record.
- “Members app”, “app access”, push notifications, in-app chat or any feature that does not exist.
- Scarcity (“3 spots left”, “only this month”) unless capacity is a verified, current fact.
- Medical outcomes, cure claims, guaranteed fat loss or muscle gain, or a stated timeline for a result.
- Protection services as available, licensed, insured or staffed.
- Any competitor comparison with unverified pricing or performance.
- Any claim that `coachayman.com` is affiliated with this business. It is a different business.

### 4.3 Health and safety language

Use process language, not outcome language.

| Avoid | Use |
|---|---|
| “Lose 10 kg in 8 weeks” | “A plan built around your starting point, schedule and preferences” |
| “Guaranteed results” | “Results depend on adherence, health status and factors outside coaching” |
| “Treats PCOS / diabetes / thyroid issues” | “Coaching is educational and does not replace medical care” |
| “Doctor-approved diet” | “If you have a medical condition, involve your clinician” |
| “No effort needed” | “You will need to report honestly and follow the plan” |

Every service page and the FAQ must state that coaching is not medical care, physiotherapy, diagnostic testing or registered-dietitian services.

## 5. Page roles

| Page | Job | Primary CTA | Proof used |
|---|---|---|---|
| Home | Explain the offer and route to the right page | Apply | Process, languages, owner-reported scale, no invented social proof |
| Coaching index | Compare the four services | Choose a service | Scope summaries, not rankings |
| Online fitness coaching | Explain the core system | Apply | Written plan, check-ins, messaging |
| Weight loss | Explain a fat-loss process without promising a number | Apply | Process and exclusions |
| Muscle building | Explain hypertrophy coaching without promising a number | Apply | Process and exclusions |
| Nutrition | Explain nutrition scope and limits | Apply | Process, calculator, referral note |
| Results | State the evidence policy and what will be published | Apply | Policy, not fabricated cases |
| About | Establish identity, qualifications and limits | Apply / contact | Owner-supplied credentials, stated accurately |
| Pricing | Remove price and commitment uncertainty | Apply with plan preselected | Published prices, billing terms, exclusions |
| FAQ | Answer objections and safety questions | Apply / contact | Direct answers |
| Apply | Collect a qualified lead | Submit | Consent and honest delivery state |
| Contact | Offer a low-friction alternative | Send / WhatsApp / email | Direct channels |
| Personal protection | Document a gated service line honestly | None while gated | Status page only |
| Privacy / Terms / Cookies | Explain data, payment and cancellation rules | Contact | Legal text, effective date |

## 6. Localization rules

### 6.1 Principle

Each locale is written, not machine-translated. The three versions share structure, facts and prices; they do not share sentences.

### 6.2 French (Morocco)

- Use professional, neutral French. Avoid Parisian slang and avoid literal English syntax.
- Address the reader as **vous**.
- Keep fitness terms that Moroccan readers use in English only when the French term is unclear (for example, “check-in” may be explained rather than replaced).
- Use non-breaking spaces before `:` `;` `?` `!` in published copy where the rendering supports it; do not let punctuation break layout.
- Prices remain in USD and are labelled as such.

### 6.3 Arabic (Morocco, Saudi Arabia, Qatar)

- Use Modern Standard Arabic. Avoid dialect that narrows the audience to one country.
- Keep the tone direct and respectful; avoid exaggerated religious or honour-based appeals.
- Use Arabic-Indic or Western digits consistently within a page. The current implementation uses Western digits for prices to avoid ambiguity.
- Do not mirror Latin brand names or prices unless the layout requires it; test RTL rendering.
- Ensure every form label, error message, legal page and 404 is translated. An English error inside an Arabic flow is a trust failure.
- Verify that icons, arrows and progress indicators flip correctly under `dir="rtl"`.

### 6.4 English

- International English, not US-only idiom. Use “programme” in body copy only if consistent; the current site uses “program” for search clarity.
- Keep sentences short. Define jargon on first use.

### 6.5 What must never be localized loosely

- Prices, currency, billing frequency and cancellation terms.
- Qualifications and their exact level.
- Legal entity, jurisdiction and contact details.
- Health and safety disclaimers.
- The statement that protection services are not currently offered.

## 7. Proof programme

### 7.1 Current state

There are **no verified case studies or testimonials on the site**. The previous testimonials and transformations were removed because no source record or consent existed. This is deliberate, not an oversight.

### 7.2 What can be published

A case study may be published only when all of the following exist:

1. A client record showing the starting point, process and outcome.
2. Written consent that names the website and the specific assets (photos, quotes, first name, age range, country).
3. A signed statement that the result is the client’s own and not typical.
4. A clear label: “Individual result. Not typical. Results vary.”
5. No medical claim and no implication that the same result is guaranteed.

### 7.3 Intake template

Use a separate consent form, stored outside the public repository. Minimum fields:

- Client name and contact.
- Coaching dates and plan.
- Starting and ending measurements, with the method used.
- What the client actually did (adherence, sessions, check-ins).
- What changed and what did not.
- Permission for: first name only / initials / anonymous; quote; photos; country; age range.
- Withdrawal process and contact.
- Signature and date.
- Reviewer and publication date.

### 7.4 Photo standards

- No misleading lighting, posing or editing that changes body shape.
- Same angle and comparable clothing where possible.
- No minors.
- No images that reveal identity without explicit consent.
- Store the original file and the consent record; publish a compressed derivative.

### 7.5 If no proof is available

Say so plainly on the results page, keep the process explanation, and rely on qualifications, scope and direct contact. Do not substitute stock photos or invented quotes.

## 8. Editorial style

- **Voice:** direct, calm, specific. No hype, no “transform your life”, no exclamation marks in body copy.
- **Person:** first person for the coach (“I review every application”), second person for the reader (“you receive a written plan”).
- **Sentences:** average under 20 words. One idea per paragraph.
- **Numbers:** Western digits; use a space or comma consistently; always state currency (`USD`) and cadence (`per month`).
- **Dates:** `26 October 2026` in English, `26 octobre 2026` in French, localized Arabic date format.
- **CTAs:** verb + object. “Apply for coaching”, “See the plans”, “Message on WhatsApp”. Never “Click here”.
- **Headings:** sentence case in English and French; Arabic headings without Latin capitalization.
- **Links:** descriptive anchor text; no “learn more” without context.
- **Emphasis:** bold for key facts, never for whole paragraphs. No all-caps body text.
- **Claims:** if a sentence contains a number, a timeframe or a superlative, it needs a source or it gets cut.

## 9. SEO content mapping

Detailed keyword hypotheses and the unavailable-metric register live in `docs/KEYWORD-RESEARCH.md` and `research/keywords.csv`. Content rules:

- One primary intent per page. Do not create near-duplicate pages for every city or spelling variant.
- Service pages target commercial intent; FAQ and results target objection and trust intent; pricing targets transactional intent.
- Each locale has its own metadata, not a translated template with the same title.
- No doorway pages, no fake location pages, no spun content.
- Internal links use the service names, not “this page”.
- Add content only when it answers a question the current pages cannot. Volume without evidence is not a strategy.

## 10. Content operations

| Item | Owner | Cadence |
|---|---|---|
| Price and plan terms | Coach | Review before every price change and at least quarterly |
| Qualifications and bio | Coach | On change; re-verify issuer wording |
| Legal pages | Coach + local adviser | At launch, then annually or on process change |
| Case studies | Coach + client consent | Only when a complete record exists |
| Service copy | Coach + editor | Quarterly review |
| Translations | Native-level reviewer per locale | With every English change; no unreviewed machine translation |
| Broken links / redirects | Developer | Monthly |
| Search performance | Owner (GSC access) | Monthly after verification |
| Analytics review | Owner | Monthly after consent-based GA4 is live |

**Change rule:** any change to a price, claim, credential or legal term requires a dated note in the pull request and a re-run of `npm run check`.

## 11. First 90 days (editorial, not a traffic forecast)

| Window | Work | Why |
|---|---|---|
| Days 0–14 | Deploy; verify canonical, hreflang, sitemap, forms; connect GSC and GA4 if credentials exist | Fix the foundation before writing more |
| Days 15–30 | Review the first real leads and fallback contacts; fix friction in the application flow | Conversion before content volume |
| Days 31–60 | Publish one verified FAQ expansion based on actual questions received | Demand-led, not speculative |
| Days 61–90 | If consent records exist, publish the first verified case study; otherwise improve service-page clarity | Proof must be real |
| Ongoing | One useful update per month, not a fixed article quota | Avoid thin content |

No traffic, ranking or lead-volume target is set here. Those numbers cannot be responsibly forecast without baseline data.

## 12. Measurement

- Primary: delivered leads by locale, service page and plan.
- Secondary: fallback contacts, WhatsApp clicks, email clicks.
- Diagnostic: FAQ opens, calculator use, pricing views, language switches.
- Qualitative: actual questions in leads and replies.
- Explicitly unavailable until access exists: impressions, clicks, CTR, average position, keyword volumes, competitor traffic.

See `docs/ANALYTICS.md` for the event taxonomy and consent rules.

## 13. Risks

| Risk | Mitigation |
|---|---|
| Copy drifts back into hype or invented proof | Claims table in section 4; review every number |
| Machine translation ships without review | Native reviewer sign-off per locale |
| A testimonial is published without consent | Consent record required before publication |
| Price changes create stale copy | Single source in `lib/content/home.ts`; update all locales and schema together |
| Arabic layout breaks with Latin prices or mixed direction | Test every page at 360 px and 1440 px in RTL |
| Legal text is copied from another business | Owner + local adviser review; no copied policies |
| Protection page leaks into navigation or sitemap | Flag off by default; `npm run check` asserts 404 and sitemap exclusion |
