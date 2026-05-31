import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://madhadi.com',
  output: "hybrid",
  adapter: cloudflare()
});