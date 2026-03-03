// Production config — fully static for GitHub Pages
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

const keystaticStub = {
  name: 'keystatic-stub',
  resolveId(id) {
    if (id === 'virtual:keystatic-config') return '\0virtual:keystatic-config';
  },
  load(id) {
    if (id === '\0virtual:keystatic-config') return 'export default {}';
  },
};

export default defineConfig({
  integrations: [react(), markdoc()],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [keystaticStub],
  },
});
