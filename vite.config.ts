import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],

  server: {
    port: 3000,
  },
  css: {
    modules: {
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
