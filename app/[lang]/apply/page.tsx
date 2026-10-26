import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { applyPage } from '../../../lib/content/pages';
import { ui } from '../../../lib/content/common';
import { SITE, absoluteUrl } from '../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import { Check } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import LeadForm from '../../../components/LeadForm';
import Reveal from '../../../components/Reveal';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: applyPage.metaTitle[locale],
    description: applyPage.metaDescription[locale],
    path: '/apply',
    absoluteTitle: true,
  });
}

export default function ApplyPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: applyPage.eyebrow[locale], path: '/apply' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: applyPage.h1[locale],
      description: applyPage.metaDescription[locale],
      url: absoluteUrl(locale, '/apply'),
      isPartOf: { '@id': `${SITE.url}/#website` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={applyPage.eyebrow[locale]}
        title={applyPage.h1[locale]}
        intro={applyPage.intro[locale]}
        breadcrumbs={[{ name: applyPage.eyebrow[locale] }]}
      />

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <LeadForm locale={locale} variant="application" />
          </div>

          <Reveal delay={120}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="panel p-6 sm:p-7">
                <h2 className="font-display text-xl text-bone">{applyPage.nextTitle[locale]}</h2>
                <ol className="mt-5 space-y-4">
                  {applyPage.nextSteps[locale].map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-[0.7rem] text-accent-soft">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-stone-muted">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="panel p-6">
                <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                  {applyPage.noteTitle[locale]}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                  {applyPage.noteBody[locale]}
                </p>
              </div>

              <div className="panel p-6">
                <h2 className="flex items-center gap-2.5 font-display text-lg text-bone">
                  <Check width={17} height={17} className="text-emerald-300" />
                  {applyPage.fallbackTitle[locale]}
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-dim">
                  {applyPage.fallbackBody[locale]}
                </p>
              </div>

              <div className="border-s-2 border-accent/60 ps-4">
                <p className="text-xs leading-relaxed text-dim">{ui.disclaimer[locale]}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
