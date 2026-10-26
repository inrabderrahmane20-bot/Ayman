import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { protection } from '../../../lib/content/protection';
import { ui } from '../../../lib/content/common';
import { SITE } from '../../../lib/site';
import { pageMetadata } from '../../../lib/seo';
import { Check, X } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import LeadForm from '../../../components/LeadForm';
import CtaSection from '../../../components/CtaSection';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang) || !SITE.protectionLive) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: protection.metaTitle[locale],
    description: protection.metaDescription[locale],
    path: '/personal-protection',
    absoluteTitle: true,
    noindex: true,
  });
}

export default function PersonalProtectionPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang) || !SITE.protectionLive) notFound();
  const locale: Locale = params.lang;

  return (
    <>
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: protection.h1[locale],
          description: protection.metaDescription[locale],
          url: `${SITE.url}/${locale}/personal-protection`,
          isPartOf: { '@id': `${SITE.url}/#website` },
        }}
      />
      <PageHeader
        locale={locale}
        eyebrow={protection.eyebrow[locale]}
        title={protection.h1[locale]}
        intro={protection.intro[locale]}
      />

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
              {protection.statusLabel[locale]}
            </p>
            <p className="mt-4 border-s-2 border-accent/60 ps-4 text-sm leading-relaxed text-stone-muted">
              {protection.statusOn[locale]}
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl text-bone">{protection.scopeTitle[locale]}</h2>
              <p className="mt-3 text-sm leading-relaxed text-dim">{protection.scopeNote[locale]}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {protection.scope[locale].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                    <Check width={15} height={15} className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone">{protection.gateTitle[locale]}</h2>
              <ul className="mt-5 space-y-3">
                {protection.gate[locale].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-bone">{protection.notOfferedTitle[locale]}</h2>
              <ul className="mt-5 space-y-3">
                {protection.notOffered[locale].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                    <X width={15} height={15} className="mt-0.5 shrink-0 text-accent-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="protection-enquiry-title">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <h2 id="protection-enquiry-title" className="font-display text-2xl text-bone">
              {protection.enquiryTitle[locale]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-muted">
              {protection.enquiryBody[locale]}
            </p>
            <p className="mt-5 border border-red-400/30 bg-red-950/20 p-4 text-xs leading-relaxed text-red-100/80">
              {protection.enquiryNote[locale]}
            </p>
          </div>
          <LeadForm locale={locale} variant="protection" />
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={protection.eyebrow[locale]}
        title={protection.returnToCoaching[locale]}
        body={ui.disclaimer[locale]}
        primaryLabel={ui.viewCoaching[locale]}
        primaryPath="/coaching"
        secondaryLabel={ui.contact[locale]}
        secondaryPath="/contact"
        location="protection_final_cta"
      />
    </>
  );
}
