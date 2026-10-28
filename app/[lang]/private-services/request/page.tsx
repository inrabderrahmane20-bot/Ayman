import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../../lib/content/types';
import { ui } from '../../../../lib/content/common';
import { SITE, absoluteUrl } from '../../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../../lib/seo';
import { localePath } from '../../../../lib/routes';
import PageHeader from '../../../../components/PageHeader';
import LeadForm from '../../../../components/LeadForm';
import Reveal from '../../../../components/Reveal';
import SeoJsonLd from '../../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: locale === 'fr' ? 'Demande de service privé | Coach Ayman' : locale === 'ar' ? 'طلب خدمة خاصة | الكوتش أيمن' : 'Request a Private Service | Coach Ayman',
    description: locale === 'fr' ? "Soumettez une demande pour protection personnelle ou accompagnement privé." : locale === 'ar' ? 'أرسل طلبًا للحماية الشخصية أو المرافقة الخاصة.' : 'Submit an enquiry for personal protection or private accompaniment.',
    path: '/private-services/request',
    absoluteTitle: true,
  });
}

export default function PrivateRequestPage({ params, searchParams }: { params: { lang: string }; searchParams?: { service?: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;
  const service = searchParams?.service === 'protection' ? 'protection' : searchParams?.service === 'accompaniment' ? 'accompaniment' : '';

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
      { name: locale === 'fr' ? 'Demande' : locale === 'ar' ? 'طلب' : 'Request', path: '/private-services/request' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: locale === 'fr' ? 'Demande de service privé' : locale === 'ar' ? 'طلب خدمة خاصة' : 'Request a Private Service',
      description: locale === 'fr' ? "Formulaire de demande pour services privés." : locale === 'ar' ? 'نموذج طلب للخدمات الخاصة.' : 'Enquiry form for private services.',
      url: absoluteUrl(locale, '/private-services/request'),
      isPartOf: { '@id': `${SITE.url}/#website` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={locale === 'fr' ? 'DEMANDE PRIVÉE' : locale === 'ar' ? 'طلب خاص' : 'PRIVATE REQUEST'}
        title={locale === 'fr' ? 'Demander un service privé' : locale === 'ar' ? 'طلب خدمة خاصة' : 'Request a Private Service'}
        intro={locale === 'fr' ? "Chaque demande est examinée individuellement. L'envoi de ce formulaire ne confirme pas la disponibilité ni une réservation." : locale === 'ar' ? 'يتم مراجعة كل طلب بشكل فردي. إرسال هذا النموذج لا يؤكد التوفر أو الحجز.' : 'Every request is reviewed individually. Submitting this form does not confirm availability or a booking.'}
        breadcrumbs={[
          { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
          { name: locale === 'fr' ? 'Demande' : locale === 'ar' ? 'طلب' : 'Request' },
        ]}
      />

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="mb-6 font-display text-2xl text-bone">{locale === 'fr' ? 'Formulaire de demande' : locale === 'ar' ? 'نموذج الطلب' : 'Enquiry form'}</h2>
            <LeadForm locale={locale} variant="private" initialService={service} />
          </div>

          <Reveal delay={120}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="panel p-6">
                <h2 className="font-display text-xl text-bone">{locale === 'fr' ? 'Confidentialité et processus' : locale === 'ar' ? 'السرية والعملية' : 'Privacy & Process'}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                  {locale === 'fr'
                    ? "Votre demande est traitée de manière confidentielle. Elle est examinée individuellement et aucun accord n'est implicite par la soumission."
                    : locale === 'ar'
                      ? 'يتم التعامل مع طلبك بسرية. يتم مراجعته بشكل فردي ولا يوجد اتفاق ضمني بإرسال النموذج.'
                      : 'Your request is handled confidentially. It is reviewed individually and no agreement is implied by submission.'}
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-dim">
                  {locale === 'fr'
                    ? "Les informations ne sont utilisées que pour répondre à votre demande, conformément à la politique de confidentialité."
                    : locale === 'ar'
                      ? 'تُستخدم المعلومات فقط للرد على استفسارك، وفقًا لسياسة الخصوصية.'
                      : 'Details are used only to respond to your enquiry, in accordance with the privacy policy.'}
                </p>
              </div>
              <div className="panel p-6">
                <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                  {locale === 'fr' ? 'À savoir' : locale === 'ar' ? 'معلومات' : 'Note'}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-muted">
                  {locale === 'fr'
                    ? "Ne fournissez pas de détails sensibles sur des menaces, de documents d'identité ou d'informations médicales dans ce formulaire initial."
                    : locale === 'ar'
                      ? 'لا تقدم تفاصيل حساسة عن التهديدات أو وثائق الهوية أو معلومات طبية في هذا النموذج الأولي.'
                      : 'Do not provide sensitive threat details, identity documents or medical information in this initial form.'}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
