#!/usr/bin/env node
/**
 * Production smoke checks for the AYMAN site.
 *
 * Usage:
 *   npm run build
 *   npm run start -- -p 3000
 *   npm run check
 *
 * Set BASE_URL to test a deployment instead of localhost. The script only reads
 * public pages; it never submits a real lead.
 */

const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');
// Canonicals, hreflang, sitemap and robots always use the configured production
// origin, never the host the smoke test happens to be running against.
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ayman-nu.vercel.app').replace(
  /\/+$/,
  '',
);
const results = [];
let failed = 0;

function record(name, ok, detail = '') {
  results.push({ name, ok, detail });
  if (!ok) failed += 1;
}

async function get(path, init = {}) {
  const response = await fetch(`${base}${path}`, {
    redirect: 'manual',
    headers: { 'accept-language': 'en-US,en;q=0.9', ...(init.headers || {}) },
    ...init,
  });
  const body = await response.text();
  return { response, body };
}

function has(html, needle) {
  return html.includes(needle);
}

function jsonLdBlocks(html) {
  const blocks = [];
  const regex = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = regex.exec(html))) {
    blocks.push(match[1]);
  }
  return blocks;
}

async function main() {
  const root = await get('/');
  record(
    'root negotiates a locale',
    [301, 302, 307, 308].includes(root.response.status) &&
      /^\/[a-z]{2}(\/|$)/.test(root.response.headers.get('location') || ''),
    `${root.response.status} ${root.response.headers.get('location') || ''}`,
  );

  const en = await get('/en');
  record('home returns 200', en.response.status === 200, String(en.response.status));
  record('html lang is en', has(en.body, '<html lang="en"'));
  record(
    'canonical is production origin',
    has(en.body, `rel="canonical" href="${origin}/en"`),
  );
  record('no foreign canonical', !has(en.body, 'coachayman.com'));
  const enHead = en.body.replace(/hrefLang=/g, 'hreflang=');
  record('hreflang en present', has(enHead, `hreflang="en" href="${origin}/en"`));
  record('hreflang fr present', has(enHead, `hreflang="fr" href="${origin}/fr"`));
  record('hreflang ar present', has(enHead, `hreflang="ar" href="${origin}/ar"`));
  record('x-default present', has(enHead, `hreflang="x-default"`));

  const blocks = jsonLdBlocks(en.body);
  let parsedOk = blocks.length > 0;
  const types = new Set();
  for (const block of blocks) {
    try {
      const data = JSON.parse(block);
      for (const item of Array.isArray(data) ? data : [data]) {
        if (item && item['@type']) types.add(item['@type']);
      }
    } catch {
      parsedOk = false;
    }
  }
  record('JSON-LD parses', parsedOk, `${blocks.length} blocks`);
  record('Organization schema present', types.has('Organization'));
  record('Person schema present', types.has('Person'));
  record('WebSite schema present', types.has('WebSite'));

  const fr = await get('/fr/about');
  record('French page 200', fr.response.status === 200, String(fr.response.status));
  record('French html lang', has(fr.body, '<html lang="fr"'));
  record('French canonical', has(fr.body, `rel="canonical" href="${origin}/fr/about"`));

  const ar = await get('/ar');
  record('Arabic page 200', ar.response.status === 200, String(ar.response.status));
  record('Arabic html lang', has(ar.body, '<html lang="ar"'));
  record('Arabic direction rtl', has(ar.body, 'dir="rtl"'));

  const legacy = await get('/transformations');
  record(
    'legacy path 301 to locale results',
    legacy.response.status === 301 &&
      /\/en\/results$/.test(legacy.response.headers.get('location') || ''),
    `${legacy.response.status} ${legacy.response.headers.get('location') || ''}`,
  );

  const legacyLocale = await get('/en/transformations');
  record(
    'prefixed legacy path 301',
    legacyLocale.response.status === 301 &&
      /\/en\/results$/.test(legacyLocale.response.headers.get('location') || ''),
    `${legacyLocale.response.status} ${legacyLocale.response.headers.get('location') || ''}`,
  );

  const trailing = await get('/en/pricing/');
  record(
    'trailing slash normalises',
    trailing.response.status === 308 || trailing.response.status === 301,
    String(trailing.response.status),
  );

  const sitemap = await get('/sitemap.xml');
  record('sitemap 200', sitemap.response.status === 200);
  record('sitemap contains pricing', has(sitemap.body, `${origin}/en/pricing`));
  record('sitemap excludes protection', !has(sitemap.body, 'personal-protection'));
  record('sitemap uses production origin', !has(sitemap.body, 'coachayman.com'));

  const robots = await get('/robots.txt');
  record('robots 200', robots.response.status === 200);
  record('robots references sitemap', has(robots.body, `${origin}/sitemap.xml`));
  record('robots disallows api', has(robots.body, '/api/'));

  const notFound = await get('/en/this-page-does-not-exist');
  record('unknown locale path is 404', notFound.response.status === 404);
  record('unknown path is noindex', has(notFound.body, 'name="robots" content="noindex"'));
  record('unknown path has no canonical', !has(notFound.body, 'rel="canonical"'));

  const frNotFound = await get('/fr/cette-page-nexiste-pas');
  record(
    'French 404 title is localized',
    frNotFound.response.status === 404 && has(frNotFound.body, '404 — Cette page n’existe pas'),
  );

  const arNotFound = await get('/ar/unknown');
  record(
    'Arabic 404 title is localized',
    arNotFound.response.status === 404 && has(arNotFound.body, '404 — هذه الصفحة غير موجودة'),
  );

  const unknownService = await get('/en/coaching/not-a-service');
  record('unknown service slug is 404', unknownService.response.status === 404);

  const protection = await get('/en/personal-protection');
  if (protection.response.status === 404) {
    record('gated protection returns 404 when disabled', true);
  } else {
    record(
      'enabled protection is noindex',
      has(protection.body, 'noindex'),
      String(protection.response.status),
    );
  }

  const apiGet = await get('/api/leads');
  record('leads API rejects GET', apiGet.response.status === 405);

  const headers = en.response.headers;
  record('CSP present', Boolean(headers.get('content-security-policy')));
  record('HSTS present', Boolean(headers.get('strict-transport-security')));
  record('nosniff present', headers.get('x-content-type-options') === 'nosniff');
  record('frame denied', headers.get('x-frame-options') === 'DENY');
  record('powered-by hidden', !headers.get('x-powered-by'));

  const social = ['/en/about', '/en/results', '/en/faq', '/en/terms'];
  for (const path of social) {
    const page = await get(path);
    record(`${path} returns 200`, page.response.status === 200, String(page.response.status));
  }

  for (const result of results) {
    console.log(`${result.ok ? 'PASS' : 'FAIL'}  ${result.name}${result.detail ? ` — ${result.detail}` : ''}`);
  }
  console.log(`\n${results.length - failed}/${results.length} checks passed against ${base}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
