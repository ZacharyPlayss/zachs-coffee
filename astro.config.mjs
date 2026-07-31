import { webcore } from 'webcoreui/integration';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base:'/app',
  build: {
    assetsPrefix: process.env.ASSETS_PREFIX,
  },
  integrations: [webcore()]
});