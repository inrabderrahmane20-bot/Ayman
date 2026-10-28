import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import localFont from 'next/font/local';
import '../globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StickyCTA from '../../components/StickyCTA';
import ConsentBanner from '../../components/ConsentBanner';
import Analytics from '../../components/Analytics';
import SeoJsonLd from '../../components/SeoJsonLd';
import { isLocale, locales, defaultLocale, type Locale } from '../../lib/content/types';
import { home } from '../../lib/content/home';
import { nav } from '../../lib/content/common';
import { SITE, OG_IMAGE } from '../../lib/site';
import { organizationSchema, personSchema, websiteSchema } from '../../lib/seo';

const bodoni = localFont({
  src: '../fonts/bodoni-moda-latin.woff2',
  weight: '400 600',
  variable: '--font-bodoni',
  display: 'swap',
  preload: true,
  fallback: ['Didot', 'Georgia', 'serif'],
  adjustFontFallback: false,
});

const jost = localFont({
  src: '../fonts/jost-latin.woff2',
  weight: '300 700',
  variable: '--font-jost',
  display: 'swap',
  preload: true,
});

const arabic = localFont({
  src: '../fonts/noto-kufi-arabic-arabic.woff2',
  weight: '400 700',
  variable: '--font-arabic-family',
  display: 'swap',
  preload: false,
  fallback: ['Noto Kufi Arabic', 'Segoe UI', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#08080A',
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const locale: Locale = isLocale(params.lang) ? params.lang : defaultLocale;
  const title = home.metaTitle[locale];
  const description = home.metaDescription[locale];

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: title,
      template: `%s | ${SITE.name}`,
    },
    description,
    applicationName: SITE.name,
    authors: [{ name: SITE.coachName, url: SITE.url }],
    creator: SITE.coachName,
    publisher: SITE.name,
    category: 'health and fitness',
    referrer: 'strict-origin-when-cross-origin',
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: `${SITE.url}/${locale}`,
      languages: Object.fromEntries([
        ...locales.map((language) => [language, `${SITE.url}/${language}`]),
        ['x-default', `${SITE.url}/en`],
      ]),
    },
    openGraph: {
      type: 'website',
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name,
      title,
      description,
      locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'ar_MA',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
    icons: {
      icon: [
        { url: '/Logo%20Coach%20Ayman%20sur%20fond%20noir.png', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      shortcut: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
    ...(SITE.siteVerification
      ? { verification: { google: SITE.siteVerification } }
      : {}),
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${bodoni.variable} ${jost.variable} ${arabic.variable}`}
    >
      <body className="min-h-screen bg-ink font-sans text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-white"
        >
          {nav.skip[locale]}
        </a>
        <Navbar locale={locale} />
        <main id="main" tabIndex={-1} className="min-h-[60vh] pb-24 outline-none md:pb-0">
          {children}
        </main>
        <Footer locale={locale} />
        <StickyCTA locale={locale} />
        <ConsentBanner locale={locale} />
        <Analytics />
        <SeoJsonLd data={[organizationSchema(), personSchema(), websiteSchema(locale)]} />
      </body>
    </html>
  );
}
