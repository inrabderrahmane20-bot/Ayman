import type { MetadataRoute } from 'next';
import { locales } from '../lib/content/types';
import { absoluteUrl } from '../lib/site';

/**
 * The sitemap is generated from the same route list the navigation uses, so a
 * page cannot be added to the site and silently left out of the sitemap. The
 * gated personal-protection page is intentionally absent.
 */
const CONTENT_UPDATED = new Date('2026-10-26T00:00:00.000Z');

const entries: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/coaching', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/coaching/online-fitness-coaching', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/coaching/weight-loss', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/coaching/muscle-building', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/coaching/nutrition', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/private-services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/private-services/personal-protection', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/private-services/private-accompaniment', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/private-services/how-it-works', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/private-services/request', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/results', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/apply', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    entries.map((entry) => {
      const languages: Record<string, string> = {};
      for (const language of locales) languages[language] = absoluteUrl(language, entry.path);
      languages['x-default'] = absoluteUrl('en', entry.path);

      return {
        url: absoluteUrl(locale, entry.path),
        lastModified: CONTENT_UPDATED,
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: { languages },
      };
    }),
  );
}
