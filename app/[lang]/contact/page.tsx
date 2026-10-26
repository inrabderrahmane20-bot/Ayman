import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { contactPage } from '../../../lib/content/pages';
import { ui } from '../../../lib/content/common';
import { SITE, absoluteUrl, mailtoLink, whatsappLink } from '../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import { Mail, Phone, WhatsApp } from '../../../components/Icons';
import PageHeader from '../../../components/PageHeader';
import LeadForm from '../../../components/LeadForm';
import Reveal from '../../../components/Reveal';
import TrackedLink from '../../../components/TrackedLink';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: contactPage.metaTitle[locale],
    description: contactPage.metaDescription[locale],
    path: '/contact',
    absoluteTitle: true,
  });
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: contactPage.eyebrow[locale], path: '/contact' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: contactPage.h1[locale],
      description: contactPage.metaDescription[locale],
      url: absoluteUrl(locale, '/contact'),
      isPartOf: { '@id': `${SITE.url}/#website` },
      mainEntity: { '@id': `${SITE.url}/#person` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={contactPage.eyebrow[locale]}
        title={contactPage.h1[locale]}
        intro={contactPage.intro[locale]}
        breadcrumbs={[{ name: contactPage.eyebrow[locale] }]}
      />

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="mb-6 font-display text-2xl text-bone">{contactPage.formTitle[locale]}</h2>
            <LeadForm locale={locale} variant="contact" />
          </div>

          <Reveal delay={120}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="panel p-6">
                <h2 className="font-display text-xl text-bone">{contactPage.directTitle[locale]}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                  {contactPage.directBody[locale]}
                </p>
                <ul className="mt-6 space-y-3">
                  <li>
                    <TrackedLink
                      href={mailtoLink()}
                      event="email_click"
                      location="contact_page"
                      label="email"
                      className="inline-flex min-h-11 items-center gap-3 text-sm text-stone-muted transition-colors hover:text-accent-soft"
                    >
                      <Mail width={17} height={17} />
                      <span className="break-all">{SITE.email}</span>
                    </TrackedLink>
                  </li>
                  <li>
                    <TrackedLink
                      href={whatsappLink()}
                      event="whatsapp_click"
                      location="contact_page"
                      label="whatsapp"
                      external
                      className="inline-flex min-h-11 items-center gap-3 text-sm text-stone-muted transition-colors hover:text-accent-soft"
                    >
                      <WhatsApp width={17} height={17} />
                      WhatsApp — {SITE.phoneDisplay}
                    </TrackedLink>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="inline-flex min-h-11 items-center gap-3 text-sm text-stone-muted transition-colors hover:text-accent-soft"
                    >
                      <Phone width={17} height={17} />
                      {SITE.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="panel p-6">
                <p className="text-sm leading-relaxed text-stone-muted">
                  {contactPage.responseNote[locale]}
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-dim">
                  {contactPage.privacyNote[locale]}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
