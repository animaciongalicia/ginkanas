import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ginkanas.es',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
