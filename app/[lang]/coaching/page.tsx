import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { coaching } from '../../../lib/content/pages';
import { services } from '../../../lib/content/services';
import { ui } from '../../../lib/content/common';
import { localePath } from '../../../lib/routes';
import { absoluteUrl, SITE } from '../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import { Arrow, Check, iconMap } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import CtaSection from '../../../components/CtaSection';
import TrackedNextLink from '../../../components/TrackedNextLink';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: coaching.metaTitle[locale],
    description: coaching.metaDescription[locale],
    path: '/coaching',
  });
}

export default function CoachingPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: coaching.eyebrow[locale], path: '/coaching' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: coaching.h1[locale],
      description: coaching.metaDescription[locale],
      url: absoluteUrl(locale, '/coaching'),
      isPartOf: { '@id': `${SITE.url}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name[locale],
          url: absoluteUrl(locale, `/coaching/${service.slug}`),
        })),
      },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={coaching.eyebrow[locale]}
        title={coaching.h1[locale]}
        intro={coaching.intro[locale]}
        breadcrumbs={[{ name: coaching.eyebrow[locale] }]}
      >
        <TrackedNextLink
          href={localePath(locale, '/pricing')}
          event="cta_click"
          location="coaching_header"
          label="pricing"
          className="btn btn-gold"
        >
          {coaching.cta[locale]}
          <Arrow width={16} height={16} />
        </TrackedNextLink>
      </PageHeader>

      <section className="section" aria-labelledby="services-list-title">
        <div className="container-luxe">
          <SectionHeading
            id="services-list-title"
            eyebrow={coaching.eyebrow[locale]}
            title={coaching.h1[locale]}
            intro={coaching.intro[locale]}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} delay={index * 70}>
                  <article className="card card-hover relative flex h-full flex-col p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-accent-soft">
                        <Icon width={21} height={21} />
                      </span>
                      <span className="text-[0.62rem] uppercase tracking-[0.18em] text-dim">
                        {service.eyebrow[locale]}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-bone">
                      <Link
                        href={localePath(locale, `/coaching/${service.slug}`)}
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {service.name[locale]}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                      {service.summary[locale]}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {service.forWho[locale].slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-stone-muted">
                          <Check width={15} height={15} className="mt-0.5 shrink-0 text-accent-soft" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto flex items-center gap-2 pt-6 text-xs uppercase tracking-[0.14em] text-accent-soft">
                      {ui.readMore[locale]}
                      <Arrow width={14} height={14} />
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="common-title">
        <div className="container-luxe grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              id="common-title"
              eyebrow={coaching.eyebrow[locale]}
              title={coaching.includesTitle[locale]}
            />
            <ul className="mt-7 space-y-3.5">
              {coaching.includes[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={100}>
            <div className="panel-raised p-7 sm:p-9">
              <h2 className="font-display text-2xl text-bone">{coaching.deliveryTitle[locale]}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-muted">
                {coaching.deliveryBody[locale]}
              </p>
              <TrackedNextLink
                href={localePath(locale, '/apply')}
                event="cta_click"
                location="coaching_delivery"
                label="apply"
                className="btn btn-gold mt-7"
              >
                {ui.apply[locale]}
                <Arrow width={15} height={15} />
              </TrackedNextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={ui.from[locale]}
        title={coaching.cta[locale]}
        body={coaching.deliveryBody[locale]}
        primaryLabel={ui.apply[locale]}
        secondaryLabel={ui.viewPlans[locale]}
        secondaryPath="/pricing"
        location="coaching_final_cta"
      />
    </>
  );
}
