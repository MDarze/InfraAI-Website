import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://www.infraai-dx.com (Cloudflare CDN + DNS)
export default defineConfig({
  site: 'https://infraai-dx.com',
  output: 'static',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: {
          ar: 'ar-SA',
          en: 'en-US',
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      // Arabic → /          (no prefix for default locale)
      // English → /en/      (prefixed)
      prefixDefaultLocale: false,
    },
  },

  image: {
    // Use Astro's built-in sharp image service for build-time optimisation
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  vite: {
    css: {
      // Ensure logical CSS properties are preserved as-is
      transformer: 'postcss',
    },
  },
});
