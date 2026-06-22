import { defineConfig } from 'astro/config';
import { SITE } from './src/config.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.base,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  devToolbar: { enabled: false },
});
