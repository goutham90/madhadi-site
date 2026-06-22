import { defineConfig } from 'astro/config';
import { remarkRegLinks } from './src/lib/remark-reg-links.mjs';
import { remarkHeadingIds } from './src/lib/remark-heading-ids.mjs';

export default defineConfig({
  site: 'https://madhadi.com',
  output: 'static',
  markdown: {
    // Auto-link regulation citations (21 CFR, ICH, EU Annexes, USP, ISO, PIC/S) to the
    // correct authoritative source, first occurrence per page. See src/lib/remark-reg-links.mjs.
    // remarkHeadingIds adds ids to headings for the article "On this page" navigation.
    remarkPlugins: [remarkRegLinks, remarkHeadingIds],
    // Default Shiki theme is github-dark, which renders code blocks (incl. our
    // ASCII data-flow diagrams) as dark-on-dark against the light institutional
    // design — unreadable. Use a light theme that matches the site.
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
});
