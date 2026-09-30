import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Fecha de última modificación de cada artículo del blog para el sitemap (Google la usa para recrawlear).
const SITE = 'https://www.ginkanas.es';
const lastmod = {};
const blogDir = new URL('./src/content/blog/', import.meta.url);
for (const file of fs.readdirSync(blogDir)) {
  if (!file.endsWith('.md') || file.startsWith('_')) continue;
  const text = fs.readFileSync(new URL(file, blogDir), 'utf8');
  if (/^borrador:\s*true/m.test(text)) continue;
  const m = text.match(/^actualizado:\s*(\S+)/m) || text.match(/^fecha:\s*(\S+)/m);
  if (m) lastmod[`${SITE}/blog/${file.slice(0, -3)}/`] = new Date(m[1]).toISOString();
}
const newest = Object.values(lastmod).sort().at(-1);
if (newest) lastmod[`${SITE}/blog/`] = newest;

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [
    sitemap({
      // Páginas sin valor SEO: fuera del sitemap
      filter: (page) => !page.includes('/gracias/') && !page.includes('/404'),
      serialize(item) {
        if (lastmod[item.url]) item.lastmod = lastmod[item.url];
        return item;
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: true
    }
  }
});
