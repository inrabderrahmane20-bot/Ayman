import type { MetadataRoute } from 'next';
import { SITE } from '../lib/site';

export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development';

  if (preview) {
    return {
      rules: { userAgent: '*', disallow: '/' },
      sitemap: `${SITE.url}/sitemap.xml`,
      host: SITE.url,
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
