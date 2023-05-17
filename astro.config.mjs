import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: process.env.BASEURL,
  outDir: './_site',
  integrations: [mdx()]
});
