import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { results } from '../../../lib/content/pages';
import { ui } from '../../../lib/content/common';
import { absoluteUrl, SITE } from '../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import { X, Check, Star } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import CtaSection from '../../../components/CtaSection';
import TrackedNextLink from '../../../components/TrackedNextLink';
import SeoJsonLd from '../../../components/SeoJsonLd';
import { localePath } from '../../../lib/routes';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: results.metaTitle[locale],
    description: results.metaDescription[locale],
    path: '/results',
    absoluteTitle: true,
  });
}

export default function ResultsPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: results.eyebrow[locale], path: '/results' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: results.h1[locale],
      description: results.metaDescription[locale],
      url: absoluteUrl(locale, '/results'),
      isPartOf: { '@id': `${SITE.url}/#website` },
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={results.eyebrow[locale]}
        title={results.h1[locale]}
        intro={results.intro[locale]}
        breadcrumbs={[{ name: results.eyebrow[locale] }]}
      >
        <TrackedNextLink
          href={localePath(locale, '/pricing')}
          event="cta_click"
          location="results_header"
          label="pricing"
          className="btn btn-outline"
        >
          {ui.viewPlans[locale]}
        </TrackedNextLink>
      </PageHeader>

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            id="results-status-title"
            eyebrow={results.eyebrow[locale]}
            title={results.statusTitle[locale]}
          />
          <Reveal delay={100}>
            <div className="panel-raised p-7 sm:p-9">
              <p className="text-[0.98rem] leading-relaxed text-stone-muted">
                {results.statusBody[locale]}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="results-standards-title">
        <div className="container-luxe">
          <SectionHeading
            id="results-standards-title"
            eyebrow={results.eyebrow[locale]}
            title={results.standardsTitle[locale]}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {results.standards[locale].map((item, index) => (
              <Reveal key={item} delay={index * 60}>
                <div className="card flex h-full items-start gap-3 p-5">
                  <Check width={17} height={17} className="mt-0.5 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-relaxed text-stone-muted">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="results-wont-title">
        <div className="container-luxe grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              id="results-wont-title"
              eyebrow={results.eyebrow[locale]}
              title={results.wontTitle[locale]}
            />
            <ul className="mt-7 space-y-3.5">
              {results.wontList[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                  <X width={16} height={16} className="mt-0.5 shrink-0 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <div className="panel p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-accent-soft">
                  <Star width={17} height={17} />
                </span>
                <h2 className="font-display text-2xl text-bone">{results.ownerTitle[locale]}</h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-stone-muted">
                {results.ownerBody[locale]}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-dim">
                {ui.ownerReported[locale]}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={results.eyebrow[locale]}
        title={results.ctaTitle[locale]}
        body={results.ctaBody[locale]}
        primaryLabel={ui.askQuestion[locale]}
        primaryPath="/contact"
        secondaryLabel={ui.viewPlans[locale]}
        secondaryPath="/pricing"
        location="results_final_cta"
      />
    </>
  );
}
