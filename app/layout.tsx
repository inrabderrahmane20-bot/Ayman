import './globals.css';
import type { Metadata } from 'next';
import { Bodoni_Moda, Jost } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import { coach } from '../lib/content';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
  fallback: ['Didot', 'Georgia', 'serif'],
  adjustFontFallback: false,
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coachayman.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Online Fitness & Nutrition Coach | Coach Ayman',
    template: '%s | Coach Ayman',
  },
  description:
    'Custom training, nutrition and weekly accountability for fat loss and muscle gain. Online coaching built around your schedule. Apply in 60 seconds.',
  authors: [{ name: coach.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Online Fitness & Nutrition Coach | Coach Ayman',
    description:
      'Custom training, nutrition and weekly accountability for fat loss and muscle gain. Online coaching built around your schedule.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Coach Ayman',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Coach Ayman' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Fitness & Nutrition Coach | Coach Ayman',
    description:
      'Custom training, nutrition and weekly accountability for fat loss and muscle gain. Online coaching built around your schedule.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body style={{ fontFamily: 'var(--font-jost), Jost, Inter, sans-serif' }}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
