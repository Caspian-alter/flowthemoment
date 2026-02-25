import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const site = process.env.SITE_URL || 'https://flowthemoment.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'min-light'
    }
  }
});
