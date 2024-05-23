import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), preact(), icon()],
  i18n: {
    defaultLocale: 'en',
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  redirects: {
    '/en': '/'
  }
});