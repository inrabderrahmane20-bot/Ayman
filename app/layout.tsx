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

const SITE_URL = 'https://ayman-coaching.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${coach.name} — Elite Online Transformation Coach`,
    template: `%s · ${coach.shortName}`,
  },
  description:
    'Personalized training, nutrition, and accountability coaching engineered around your goals, lifestyle and schedule. Join 220+ transformed clients.',
  keywords: [
    'online coaching',
    'fitness transformation',
    'personal trainer',
    'nutrition coaching',
    'fat loss',
    'muscle gain',
    'Mohamed Ayman Yakhmim',
  ],
  authors: [{ name: coach.name }],
  openGraph: {
    title: `${coach.name} — Elite Online Transformation Coach`,
    description:
      'Personalized training, nutrition, and accountability coaching built around your life. 220+ clients transformed.',
    type: 'website',
    url: SITE_URL,
    images: ['/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${coach.name} — Elite Online Transformation Coach`,
    description: 'Personalized coaching built around your life. 220+ clients transformed.',
    images: ['/hero.jpg'],
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
