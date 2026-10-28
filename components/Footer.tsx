import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '../lib/content/types';
import { footer, nav, ui } from '../lib/content/common';
import { services } from '../lib/content/services';
import { SITE, mailtoLink, whatsappLink } from '../lib/site';
import { localePath } from '../lib/routes';
import { Arrow, Mail, Phone, WhatsApp } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import CookieSettingsButton from './CookieSettingsButton';
import TrackedLink from './TrackedLink';

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const explore = [
    { path: '/coaching', label: nav.coaching[locale] },
    { path: '/private-services', label: nav.privateServices[locale] },
    { path: '/results', label: nav.results[locale] },
    { path: '/about', label: nav.about[locale] },
    { path: '/pricing', label: nav.pricing[locale] },
    { path: '/faq', label: nav.faq[locale] },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 glow-gold opacity-30"
        aria-hidden="true"
      />
      <div className="container-luxe relative z-10 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
          <div>
            <Link href={localePath(locale)} className="inline-flex min-h-11 items-center gap-3">
              <Image
                src="/Logo%20Coach%20Ayman%20sur%20fond%20noir.png"
                alt="Coach Ayman"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain"
              />
              <span className="font-display text-lg tracking-wide text-bone">Coach Ayman</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-muted">
              {footer.blurb[locale]}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-dim">
              <span className="text-stone-muted">220+</span> {ui.ownerReported[locale]}
            </p>
            <div className="mt-6">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
                {nav.language[locale]}
              </p>
              <div className="mt-2">
                <LanguageSwitcher locale={locale} variant="footer" label={nav.language[locale]} />
              </div>
            </div>
          </div>

          <nav aria-label={footer.explore[locale]}>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
              {footer.explore[locale]}
            </p>
            <ul className="mt-4 space-y-2.5">
              {explore.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localePath(locale, item.path)}
                    className="text-sm text-stone-muted transition-colors hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.services[locale]}>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
              {footer.services[locale]}
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={localePath(locale, `/coaching/${service.slug}`)}
                    className="text-sm text-stone-muted transition-colors hover:text-accent-soft"
                  >
                    {service.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-dim">
              {footer.privateServices[locale]}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href={localePath(locale, '/private-services/personal-protection')}
                  className="text-sm text-stone-muted transition-colors hover:text-accent-soft"
                >
                  {locale === 'fr' ? 'Protection Personnelle' : locale === 'ar' ? 'الحماية الشخصية' : 'Personal Protection'}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, '/private-services/private-accompaniment')}
                  className="text-sm text-stone-muted transition-colors hover:text-accent-soft"
                >
                  {locale === 'fr' ? 'Accompagnement Privé' : locale === 'ar' ? 'مرافقة خاصة' : 'Private Accompaniment'}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, '/private-services/request')}
                  className="text-sm text-stone-muted transition-colors hover:text-accent-soft"
                >
                  {locale === 'fr' ? 'Faire une demande' : locale === 'ar' ? 'طلب خدمة' : 'Request a service'}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
              {footer.contact[locale]}
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <TrackedLink
                  href={mailtoLink()}
                  event="email_click"
                  location="footer"
                  label="email"
                  className="inline-flex items-center gap-2.5 text-sm text-stone-muted transition-colors hover:text-accent-soft"
                >
                  <Mail width={16} height={16} aria-hidden="true" />
                  <span className="break-all">{SITE.email}</span>
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={whatsappLink()}
                  event="whatsapp_click"
                  location="footer"
                  label="whatsapp"
                  external
                  className="inline-flex items-center gap-2.5 text-sm text-stone-muted transition-colors hover:text-accent-soft"
                >
                  <WhatsApp width={16} height={16} aria-hidden="true" />
                  WhatsApp
                </TrackedLink>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2.5 text-sm text-stone-muted transition-colors hover:text-accent-soft"
                >
                  <Phone width={16} height={16} aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
            <Link
              href={localePath(locale, '/apply')}
              className="btn btn-outline btn-sm mt-6"
            >
              {ui.applyShort[locale]}
              <Arrow width={14} height={14} />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs leading-relaxed text-dim">{footer.independence[locale]}</p>
              <p className="text-xs leading-relaxed text-dim">{ui.disclaimer[locale]}</p>
            </div>
            <nav aria-label={footer.legal[locale]} className="shrink-0">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <li>
                  <Link
                    href={localePath(locale, '/privacy')}
                    className="text-stone-muted transition-colors hover:text-bone"
                  >
                    {footer.privacy[locale]}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localePath(locale, '/terms')}
                    className="text-stone-muted transition-colors hover:text-bone"
                  >
                    {footer.terms[locale]}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localePath(locale, '/cookies')}
                    className="text-stone-muted transition-colors hover:text-bone"
                  >
                    {footer.cookies[locale]}
                  </Link>
                </li>
                <li>
                  <CookieSettingsButton label={footer.cookies[locale]} />
                </li>
                {SITE.protectionLive && (
                  <li>
                    <Link
                      href={localePath(locale, '/personal-protection')}
                      className="text-stone-muted transition-colors hover:text-bone"
                    >
                      {footer.protection[locale]}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <p className="mt-7 text-xs text-dim">
            © {year} {SITE.coachName}. {footer.rights[locale]}
          </p>
        </div>
      </div>
    </footer>
  );
}
