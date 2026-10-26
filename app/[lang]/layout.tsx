import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Bodoni_Moda, Jost, Noto_Kufi_Arabic } from 'next/font/google';
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

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-bodoni',
  display: 'swap',
  preload: true,
  fallback: ['Didot', 'Georgia', 'serif'],
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
  preload: true,
});

const arabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
  preload: false,
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
        { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
      shortcut: '/favicon.ico',
    },
    manifest: '/manifest.webmanifest',
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
