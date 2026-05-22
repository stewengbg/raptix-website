// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://raptix.se',

  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: {
          sv: 'sv-SE',
          en: 'en-GB',
        },
      },
      lastmod: new Date(),
      serialize(item) {
        // Strip trailing slash for cleaner matching
        const path = item.url
          .replace('https://raptix.se', '')
          .replace(/\/$/, '');

        // Homepage — highest authority
        if (path === '' || path === '/en') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          return item;
        }

        // Top-level Solutions hubs and the For-Your-Store hub
        const hubs = ['/butik', '/haccp', '/kedjor', '/en/retail', '/en/haccp', '/en/multi-site'];
        if (hubs.includes(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
          return item;
        }

        // Legal pages — important to exist but rarely updated and not a ranking target
        const legal = ['/integritetspolicy', '/en/privacy'];
        if (legal.includes(path)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
          return item;
        }

        // Spoke pages under hubs
        item.priority = 0.8;
        item.changefreq = 'monthly';
        return item;
      },
    }),
  ],
});
