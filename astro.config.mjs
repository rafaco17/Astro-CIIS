// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid'
  // https://docs.astro.build/en/guides/integrations-guide/react/ Es necesario un adaptador
});