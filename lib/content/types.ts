export type Locale = 'en' | 'fr' | 'ar';

export const locales = ['en', 'fr', 'ar'] as const;

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Localized<T> = Record<Locale, T>;

/** Define one value per locale in a fixed order: English, French, Arabic. */
export const L = <T>(en: T, fr: T, ar: T): Localized<T> => ({ en, fr, ar });

export const pick = <T>(value: Localized<T>, locale: Locale): T => value[locale];

export type Section = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type Faq = { q: string; a: string };

export type PageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections?: Section[];
  faqs?: Faq[];
};
