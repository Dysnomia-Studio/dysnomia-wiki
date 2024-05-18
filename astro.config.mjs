import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), playformCompress(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        fr: 'fr-FR'
      }
    }
  }), robotsTxt()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://wiki.dysnomia.studio'
});