// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production' ? 'https://dyudin0821.github.io' : 'http://localhost:4321',
  base: process.env.NODE_ENV === 'production' ? '/portogate-site' : undefined,
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  server: {
    host: true,
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: 4321
    }
  },
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});