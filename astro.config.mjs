import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import os from 'node:os';
import path from 'node:path';

// The project lives inside a OneDrive-synced folder, where OneDrive holds
// locks on node_modules/.vite and makes Vite's cache rebuild fail with EPERM.
// Keeping the cache on the local disk avoids that entirely.
const cacheDir = path.join(os.tmpdir(), 'kesoniti-vite-cache');

export default defineConfig({
  site: 'https://kesoniti.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', tr: 'tr', es: 'es' },
      },
      filter: (page) => !page.endsWith('kesoniti.com/'),
    }),
  ],
  vite: {
    cacheDir,
  },
});
