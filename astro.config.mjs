import { webcore } from 'webcoreui/integration';
// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output:'server',
  adapter: cloudflare(),
  base:'/app',
  build: {
    assetsPrefix: '/app',
  },
  integrations: [webcore()]
});