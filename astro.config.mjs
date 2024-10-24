import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [tailwind(), mdx(), icon(), sitemap()]
});