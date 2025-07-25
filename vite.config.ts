import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Syed-portfolio/', // <-- MUST match your GitHub repo name
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
