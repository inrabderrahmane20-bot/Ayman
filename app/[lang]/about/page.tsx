import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { about } from '../../../lib/content/pages';
import { identity } from '../../../lib/content/identity';
import { ui } from '../../../lib/content/common';
import { SITE, absoluteUrl } from '../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import { Check, X, Globe, Languages } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import CtaSection from '../../../components/CtaSection';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: about.metaTitle[locale],
    description: about.metaDescription[locale],
    path: '/about',
    absoluteTitle: true,
  });
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: about.eyebrow[locale], path: '/about' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: about.h1[locale],
      description: about.metaDescription[locale],
      url: absoluteUrl(locale, '/about'),
      isPartOf: { '@id': `${SITE.url}/#website` },
      mainEntity: { '@id': `${SITE.url}/#person` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={about.eyebrow[locale]}
        title={about.h1[locale]}
        intro={about.intro[locale]}
        breadcrumbs={[{ name: about.eyebrow[locale] }]}
      />

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <SectionHeading
              id="about-story-title"
              eyebrow={identity.role[locale]}
              title={about.story.title[locale]}
            />
          </div>
          <div className="space-y-5">
            {about.story.paragraphs[locale].map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 70}>
                <p className="text-[1rem] leading-relaxed text-stone-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="about-credentials-title">
        <div className="container-luxe">
          <SectionHeading
            id="about-credentials-title"
            eyebrow={about.eyebrow[locale]}
            title={about.credentials.title[locale]}
            intro={about.credentials.note[locale]}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {identity.credentials.map((credential, index) => (
              <Reveal key={credential.title[locale]} delay={index * 60}>
                <article className="card h-full p-6">
                  <span className="tnum font-display text-2xl text-accent/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-lg leading-snug text-bone">
                    {credential.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                    {credential.issuer[locale]}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-areas-title">
        <div className="container-luxe grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="about-areas-title"
              eyebrow={about.eyebrow[locale]}
              title={about.areas.title[locale]}
            />
            <ul className="mt-7 space-y-3.5">
              {about.areas.items[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              id="about-limits-title"
              eyebrow={about.eyebrow[locale]}
              title={about.limits.title[locale]}
            />
            <ul className="mt-7 space-y-3.5">
              {about.limits.items[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-muted">
                  <X width={16} height={16} className="mt-0.5 shrink-0 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="about-languages-title">
        <div className="container-luxe grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-accent-soft">
              <Languages width={20} height={20} />
            </span>
            <h2 id="about-languages-title" className="font-display text-2xl text-bone">
              {about.languages.title[locale]}
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-stone-muted">{about.languages.body[locale]}</p>
            <p className="mt-5 flex items-center gap-2.5 text-xs uppercase tracking-[0.14em] text-dim">
              <Globe width={15} height={15} />
              {identity.location[locale]}
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={about.eyebrow[locale]}
        title={about.cta[locale]}
        body={identity.philosophy[locale]}
        primaryLabel={ui.apply[locale]}
        secondaryLabel={ui.viewCoaching[locale]}
        secondaryPath="/coaching"
        location="about_final_cta"
      />
    </>
  );
}
