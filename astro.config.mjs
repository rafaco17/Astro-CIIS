// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import dotenv from 'dotenv';
import react from '@astrojs/react';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid'
  // https://docs.astro.build/en/guides/integrations-guide/react/ Es necesario un adaptador
});