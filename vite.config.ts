import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    BASE_URL: process.env.BASE_URL,
    LOGGING: process.env.LOGGING,
    RAWG_API_KEY: process.env.RAWG_API_KEY,
  },
});
