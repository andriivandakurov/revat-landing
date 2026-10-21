import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://revatgym.com',
  output: 'static',
  integrations: [],
  vite: {
    ssr: {
      external: ['fs', 'path'],
    },
  },
});
