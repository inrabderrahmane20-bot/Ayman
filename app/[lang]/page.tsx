import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLocale, type Locale } from '../../lib/content/types';
import { home, billingTerms } from '../../lib/content/home';
import { ui } from '../../lib/content/common';
import { faqPage } from '../../lib/content/pages';
import { localePath } from '../../lib/routes';
import { pageMetadata } from '../../lib/seo';
import { SITE } from '../../lib/site';
import { Arrow, Calendar, Check, Globe, Languages, Lock, X } from '../../components/Icons';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import ServiceCards from '../../components/ServiceCards';
import PricingCards from '../../components/PricingCards';
import MacroCalculator from '../../components/MacroCalculator';
import Accordion from '../../components/Accordion';
import CtaSection from '../../components/CtaSection';
import TrackedNextLink from '../../components/TrackedNextLink';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: home.metaTitle[locale],
    description: home.metaDescription[locale],
    path: '',
    absoluteTitle: true,
  });
}

function splitHighlight(title: string, highlight: string): ReactNode {
  const index = title.indexOf(highlight);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="brand-gradient">{title.slice(index, index + highlight.length)}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

const trustIcons = [Globe, Languages, Lock, Check];

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const homeFaqSources = [
    faqPage.categories[0].items[0],
    faqPage.categories[1].items[0],
    faqPage.categories[1].items[2],
    faqPage.categories[2].items[1],
    faqPage.categories[3].items[0],
    faqPage.categories[3].items[2],
  ];
  const homeFaqs = homeFaqSources.map((item) => ({ q: item.q[locale], a: item.a[locale] }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <div
          className="pointer-events-none absolute inset-0 grid-overlay opacity-50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-40 end-0 h-[36rem] w-[36rem] glow-gold opacity-60"
          aria-hidden="true"
        />
        <div className="container-luxe relative z-10 grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">{home.hero.eyebrow[locale]}</span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display mt-6 text-[2.9rem] leading-[0.98] text-bone sm:text-[4.1rem] lg:text-[4.65rem]">
                {splitHighlight(home.hero.title[locale], home.hero.highlight[locale])}
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="lede mt-6 max-w-xl">{home.hero.intro[locale]}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedNextLink
                  href={localePath(locale, '/apply')}
                  event="cta_click"
                  location="home_hero"
                  label="apply"
                  className="btn btn-gold"
                >
                  {home.hero.primaryCta[locale]}
                  <Arrow width={16} height={16} />
                </TrackedNextLink>
                <a href="#process" className="btn btn-outline">
                  {home.hero.secondaryCta[locale]}
                </a>
              </div>
            </Reveal>
            <Reveal delay={310}>
              <p className="mt-7 inline-flex items-center gap-2 border border-white/12 bg-white/[0.03] px-3.5 py-2 text-xs text-stone-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                {home.hero.proof[locale]}
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} slow>
            <figure className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] border border-white/12">
                <Image
                  src="/hero.jpg"
                  alt={home.hero.imageAlt[locale]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover object-[50%_26%]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="font-display text-lg text-bone">{SITE.coachName}</p>
                    <p className="mt-1 text-xs text-stone-muted">{home.hero.eyebrow[locale]}</p>
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-stone-muted">
                    {ui.online[locale]}
                  </span>
                </figcaption>
              </div>
              <div
                className="pointer-events-none absolute -inset-3 -z-10 border border-gold/20"
                aria-hidden="true"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Trust band */}
      <section aria-label={home.trust[0].label[locale]} className="border-y border-white/10 bg-ink-900">
        <div className="container-luxe grid gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
          {home.trust.map((item, index) => {
            const Icon = trustIcons[index] ?? Check;
            return (
              <div
                key={item.label[locale]}
                className="flex gap-3.5 border-white/10 px-1 py-5 sm:px-5 lg:border-s lg:first:border-s-0"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-accent-soft">
                  <Icon width={17} height={17} />
                </span>
                <div>
                  <p className="text-sm font-medium text-bone">{item.label[locale]}</p>
                  <p className="mt-1 text-xs leading-relaxed text-dim">{item.detail[locale]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Audience */}
      <section className="section section-alt" aria-labelledby="audience-title">
        <div className="container-luxe">
          <SectionHeading
            id="audience-title"
            eyebrow={home.audience.eyebrow[locale]}
            title={home.audience.title[locale]}
            intro={home.audience.intro[locale]}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="font-display text-2xl text-bone">{home.audience.forTitle[locale]}</h3>
                <ul className="mt-6 space-y-3.5">
                  {home.audience.forList[locale].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 shrink-0 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="font-display text-2xl text-bone">{home.audience.notTitle[locale]}</h3>
                <ul className="mt-6 space-y-3.5">
                  {home.audience.notList[locale].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                      <X width={16} height={16} className="mt-0.5 shrink-0 text-accent-soft" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="mt-6 border-s-2 border-accent/60 ps-4 text-sm leading-relaxed text-dim">
              {home.audience.note[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="section" aria-labelledby="approach-title">
        <div className="container-luxe">
          <SectionHeading
            id="approach-title"
            eyebrow={home.approach.eyebrow[locale]}
            title={home.approach.title[locale]}
            intro={home.approach.intro[locale]}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {home.approach.items.map((item, index) => (
              <Reveal key={item.title[locale]} delay={index * 60}>
                <article className="card card-hover h-full p-6 sm:p-7">
                  <span className="tnum font-display text-3xl text-accent/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-bone">{item.title[locale]}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-muted">{item.body[locale]}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section section-alt" aria-labelledby="process-title">
        <div className="container-luxe">
          <SectionHeading
            id="process-title"
            eyebrow={home.process.eyebrow[locale]}
            title={home.process.title[locale]}
            intro={home.process.intro[locale]}
          />
          <ol className="mt-12 grid gap-4 lg:grid-cols-4">
            {home.process.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.n}
                delay={index * 70}
                className="relative h-full border border-white/10 bg-ink/40 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-display text-sm text-accent-soft">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-xl text-bone">{step.title[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-muted">{step.body[locale]}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <p className="mt-7 flex items-start gap-2.5 text-sm leading-relaxed text-dim">
              <Calendar width={16} height={16} className="mt-0.5 shrink-0" />
              {home.process.note[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container-luxe">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="services-title"
              eyebrow={home.servicesSection.eyebrow[locale]}
              title={home.servicesSection.title[locale]}
              intro={home.servicesSection.intro[locale]}
            />
            <TrackedNextLink
              href={localePath(locale, '/coaching')}
              event="cta_click"
              location="home_services"
              label="all_services"
              className="btn btn-outline btn-sm shrink-0"
            >
              {ui.viewCoaching[locale]}
              <Arrow width={14} height={14} />
            </TrackedNextLink>
          </div>
          <div className="mt-10">
            <ServiceCards locale={locale} />
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="section section-alt" aria-labelledby="pricing-title">
        <div className="container-luxe">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="pricing-title"
              eyebrow={home.pricingSection.eyebrow[locale]}
              title={home.pricingSection.title[locale]}
              intro={home.pricingSection.intro[locale]}
            />
            <TrackedNextLink
              href={localePath(locale, '/pricing')}
              event="cta_click"
              location="home_pricing"
              label="pricing_details"
              className="btn btn-outline btn-sm shrink-0"
            >
              {billingTerms.title[locale]}
              <Arrow width={14} height={14} />
            </TrackedNextLink>
          </div>
          <div className="mt-10">
            <PricingCards locale={locale} compact />
          </div>
          <Reveal delay={130}>
            <p className="mt-6 max-w-3xl text-xs leading-relaxed text-dim">
              {home.pricingSection.note[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Results policy */}
      <section className="section" aria-labelledby="results-title">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              id="results-title"
              eyebrow={home.resultsSection.eyebrow[locale]}
              title={home.resultsSection.title[locale]}
            />
            <Reveal delay={120}>
              <p className="lede mt-5">{home.resultsSection.body[locale]}</p>
            </Reveal>
            <Reveal delay={190}>
              <TrackedNextLink
                href={localePath(locale, '/results')}
                event="cta_click"
                location="home_results"
                label="results_policy"
                className="btn btn-outline mt-7"
              >
                {home.resultsSection.cta[locale]}
                <Arrow width={15} height={15} />
              </TrackedNextLink>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {home.resultsSection.stats.map((stat, index) => (
              <Reveal key={stat.label[locale]} delay={index * 80}>
                <div className="card h-full p-6">
                  <p className="tnum font-display text-4xl text-bone">{stat.value}</p>
                  <p className="mt-2 text-sm text-stone-muted">{stat.label[locale]}</p>
                  <p className="mt-3 text-[0.68rem] leading-relaxed text-dim">{stat.note[locale]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section section-alt" aria-labelledby="calculator-title">
        <div className="container-luxe">
          <SectionHeading
            id="calculator-title"
            eyebrow={home.calculatorSection.eyebrow[locale]}
            title={home.calculatorSection.title[locale]}
            intro={home.calculatorSection.intro[locale]}
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <MacroCalculator locale={locale} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              id="faq-title"
              eyebrow={home.faqSection.eyebrow[locale]}
              title={home.faqSection.title[locale]}
            />
            <Reveal delay={120}>
              <TrackedNextLink
                href={localePath(locale, '/faq')}
                event="cta_click"
                location="home_faq"
                label="all_faq"
                className="btn btn-outline btn-sm mt-7"
              >
                {home.faqSection.cta[locale]}
                <Arrow width={14} height={14} />
              </TrackedNextLink>
            </Reveal>
          </div>
          <Accordion items={homeFaqs} group="home" />
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={home.finalCta.eyebrow[locale]}
        title={home.finalCta.title[locale]}
        body={home.finalCta.body[locale]}
        primaryLabel={home.finalCta.primary[locale]}
        secondaryLabel={home.finalCta.secondary[locale]}
        secondaryPath="/contact"
        location="home_final_cta"
      />

    </>
  );
}
