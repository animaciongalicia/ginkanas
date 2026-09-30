import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ginkanas.es',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [
    sitemap({
      // Páginas sin valor SEO: fuera del sitemap
      filter: (page) => !page.includes('/gracias/') && !page.includes('/404'),
    }),
  ],
  vite: {
    build: {
      cssMinify: true
    }
  }
});
