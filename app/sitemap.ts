import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coachayman.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/about',
    '/transformations',
    '/coaching',
    '/pricing',
    '/contact',
    '/apply',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
