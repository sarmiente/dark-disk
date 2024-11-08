import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import astroI18next from "astro-i18next";


// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [tailwind(), mdx(), icon(), sitemap({
    i18n: {
      defaultLocale: "es", 
      locales: {
        en: "en", 
        es: "es",
      },
    },
  }), react(), astroI18next()]
});