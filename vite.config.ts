import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // use relative path for cPanel hosting
  plugins: [react()],
});
