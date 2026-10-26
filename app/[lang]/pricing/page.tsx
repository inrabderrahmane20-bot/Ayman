import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { pricing, faqPage } from '../../../lib/content/pages';
import { billingTerms } from '../../../lib/content/home';
import { ui } from '../../../lib/content/common';
import { absoluteUrl, SITE } from '../../../lib/site';
import { breadcrumbSchema, faqSchema, pageMetadata } from '../../../lib/seo';
import { Check, X } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import PricingCards from '../../../components/PricingCards';
import Accordion from '../../../components/Accordion';
import CtaSection from '../../../components/CtaSection';
import SeoJsonLd from '../../../components/SeoJsonLd';
import TrackOnMount from '../../../components/TrackOnMount';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: pricing.metaTitle[locale],
    description: pricing.metaDescription[locale],
    path: '/pricing',
    absoluteTitle: true,
  });
}

export default function PricingPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;
  const pricingFaqs = faqPage.categories[1].items.map((item) => ({
    q: item.q[locale],
    a: item.a[locale],
  }));

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: pricing.eyebrow[locale], path: '/pricing' },
    ]),
    faqSchema(pricingFaqs),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pricing.h1[locale],
      description: pricing.metaDescription[locale],
      url: absoluteUrl(locale, '/pricing'),
      isPartOf: { '@id': `${SITE.url}/#website` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <TrackOnMount event="pricing_view" location="pricing_page" />
      <PageHeader
        locale={locale}
        eyebrow={pricing.eyebrow[locale]}
        title={pricing.h1[locale]}
        intro={pricing.intro[locale]}
        breadcrumbs={[{ name: pricing.eyebrow[locale] }]}
      />

      <section className="section" aria-labelledby="pricing-plans-title">
        <div className="container-luxe">
          <SectionHeading
            id="pricing-plans-title"
            eyebrow={pricing.eyebrow[locale]}
            title={pricing.h1[locale]}
            intro={pricing.intro[locale]}
          />
          <div className="mt-10">
            <PricingCards locale={locale} />
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-dim">
            {billingTerms.note[locale]}
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="pricing-billing-title">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              id="pricing-billing-title"
              eyebrow={pricing.eyebrow[locale]}
              title={billingTerms.title[locale]}
            />
            <ul className="mt-7 space-y-3.5">
              {billingTerms.items[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={100}>
            <div className="panel p-7 sm:p-8">
              <h2 className="font-display text-2xl text-bone">{pricing.comparisonTitle[locale]}</h2>
              <ul className="mt-5 space-y-3">
                {pricing.comparison[locale].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                    <X width={15} height={15} className="mt-0.5 shrink-0 text-accent-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="pricing-payment-title">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            id="pricing-payment-title"
            eyebrow={pricing.eyebrow[locale]}
            title={pricing.paymentTitle[locale]}
          />
          <ol className="space-y-4">
            {pricing.paymentSteps[locale].map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <li className="flex items-start gap-4 border border-white/10 bg-ink/40 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-sm text-accent-soft">
                    {index + 1}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-stone-muted">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="pricing-faq-title">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeading
              id="pricing-faq-title"
              eyebrow={pricing.eyebrow[locale]}
              title={pricing.faqTitle[locale]}
            />
          </div>
          <Accordion items={pricingFaqs} group="pricing" />
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={pricing.eyebrow[locale]}
        title={ui.apply[locale]}
        body={billingTerms.note[locale]}
        primaryLabel={ui.apply[locale]}
        secondaryLabel={ui.askQuestion[locale]}
        secondaryPath="/contact"
        location="pricing_final_cta"
      />
    </>
  );
}
