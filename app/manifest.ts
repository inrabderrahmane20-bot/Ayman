import type { MetadataRoute } from 'next';
import { SITE } from '../lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Online fitness and nutrition coaching`,
    short_name: 'AYMAN',
    description:
      'Online fitness and nutrition coaching with written plans, scheduled reviews and direct support.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#08080A',
    theme_color: '#08080A',
    lang: 'en',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
