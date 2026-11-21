import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://revatgym.com',
  output: 'static',
  integrations: [],
  vite: {
    ssr: {
      external: ['fs', 'path'],
    },
    server: {
      // Allow ngrok tunnels to reach the dev server
      allowedHosts: ['.ngrok-free.app', '.ngrok.io'],
    },
  },
});
