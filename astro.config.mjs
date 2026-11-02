import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://ai-frontier-4zb.pages.dev',
  integrations: [sitemap()],
});
