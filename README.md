# Ayman Coaching — Luxury Online Coaching Website

A world-class, fully static fitness coaching website for **Coach Mohamed Ayman Yakhmim**.
Dark · charcoal · gold luxury design, built with Next.js 14 (App Router), TypeScript,
Tailwind CSS and Framer Motion.

## ✨ Highlights

- **7 distinct pages** — Home, About, Results, Coaching, Pricing, Apply, Contact (+ Privacy, Terms, 404)
- **Zero backend / zero env vars** — deploys to Vercel with one click, nothing to configure
- **100% static** — every route is prerendered for extremely fast loads
- Cinematic hero, animated counters, draggable before/after sliders, premium timeline,
  app mockups, plan comparison table
- **Working tools** — macro/calorie calculator, multi-step application quiz, contact form
- Conversion system — sticky apply bar, floating WhatsApp button, scarcity cues, social proof
- Fully responsive, accessible (skip links, focus states, reduced-motion), SEO + OpenGraph ready

## 🚀 Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the Next.js preset is detected automatically.
3. Click **Deploy**. No environment variables required.

## 🗂 Structure

```
app/                 Routes (one folder = one page)
components/           Shared UI + section components
  home/              Homepage sections
lib/content.ts       Single source of truth — all copy & coach details
public/hero.jpg      Coach portrait (auto-optimized via next/image)
```

## ✏️ Editing content

All text, stats, pricing, transformations, FAQs and the coach's details live in
[`lib/content.ts`](lib/content.ts). Edit it there and every page updates.

To drop in real client before/after photos, pass `beforeSrc` / `afterSrc` to the
`BeforeAfter` component (it renders elegant placeholders until then).

---

## Coach Details (preserved from the original brand profile)

- **Name:** Mohamed Ayman Yakhmim — Online Coach
- **Phone:** +212 707072662
- **Email:** aymanyakhmim1@gmail.com
- **Languages:** English, Arabic, French
- **Certifications:** NASM Nutrition Essentials · Healthy Practices (Nutrition, Physical Activity & Family Participation) · Exercise Science background
- **Specialties:** Online Coaching, Program Design, Client Motivation, Nutrition Guidance, Communication, Time Management, Goal Setting, Social Media Marketing
- **Track record:** 220+ satisfied clients
