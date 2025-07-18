import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from './src/config';
import alpine from '@astrojs/alpinejs';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
    sitemap(), 
    alpine(), 
    icon()
  ]
});