import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import securityHeaders from './integrations/security-headers';

export default defineConfig({
  site: 'https://luisperfeito.com.br',
  build: {
    // Keep every stylesheet external so the CSP can stay at `style-src 'self'`.
    inlineStylesheets: 'never',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en' },
      },
    }),
    securityHeaders(),
  ],
});
