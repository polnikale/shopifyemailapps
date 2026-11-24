import type { APIRoute } from 'astro';

const site = 'https://www.shopifyemailapps.com';
// File routes follow the same extensionless, non-trailing-slash paths as canonicals.
// Do not manufacture modification dates from deployment or generation time.
const pages = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\.\//, '').replace(/(?:^|\/)index\.astro$/, '').replace(/\.astro$/, '').replace(/\/$/, ''))
  .map((path) => `/${path}`)
  .sort();

const escapeXml = (value: string) => value.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
}[char]!));

export const GET: APIRoute = () => {
  const urls = pages.map((path) => `  <url><loc>${escapeXml(`${site}${path}`)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
