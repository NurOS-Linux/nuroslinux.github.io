// Dev config — hybrid output for Keystatic admin UI (SSR)
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
});
