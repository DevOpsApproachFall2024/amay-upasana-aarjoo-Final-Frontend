// vite.config.js
/* eslint-disable no-undef */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      views: '/src/views',
      components: '/src/components',
    },
  },
});
