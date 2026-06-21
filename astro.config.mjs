import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://madhadi.com',
  output: 'static',
  markdown: {
    // Default Shiki theme is github-dark, which renders code blocks (incl. our
    // ASCII data-flow diagrams) as dark-on-dark against the light institutional
    // design — unreadable. Use a light theme that matches the site.
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
});
