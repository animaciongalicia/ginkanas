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

// Añade srcset a las fotos de /images/fotos/ que tienen versiones pequeñas (las genera scripts/optimizar-fotos.mjs),
// para que el móvil no descargue la foto grande. Solo en imágenes con `sizes` o en las portadas (.hero-photo).
const variantes = JSON.parse(fs.readFileSync(new URL('./src/data/fotos-variantes.json', import.meta.url), 'utf8'));
const SIZES_PORTADA = '(max-width: 1024px) calc(100vw - 32px), 540px';
const srcsetFotos = {
  name: 'srcset-fotos',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const recorre = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? recorre(new URL(e.name + '/', d)) : e.name.endsWith('.html') ? [new URL(e.name, d)] : []);
      for (const file of recorre(dir)) {
        const html = fs.readFileSync(file, 'utf8');
        const out = html.replace(/<img\b[^>]*>/g, (tag) => {
          const m = tag.match(/src="\/images\/fotos\/([\w-]+)\.webp"/);
          const anchos = m && variantes[m[1]];
          if (!anchos || anchos.length < 2 || tag.includes('srcset=')) return tag;
          const portada = /class="[^"]*hero-photo/.test(tag);
          if (!portada && !tag.includes('sizes=')) return tag;
          const max = anchos.at(-1);
          const srcset = anchos.map((w) => `/images/fotos/${m[1]}${w === max ? '' : '-' + w}.webp ${w}w`).join(', ');
          return tag.replace('<img', `<img srcset="${srcset}"${tag.includes('sizes=') ? '' : ` sizes="${SIZES_PORTADA}"`}`);
        });
        if (out !== html) fs.writeFileSync(file, out);
      }
    },
  },
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    srcsetFotos,
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
