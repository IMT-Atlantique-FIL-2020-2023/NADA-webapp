import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { join, resolve } from 'path'
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/NADA-webapp/' : '/',
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
  plugins: [vue()],
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import "@/styles/variables.scss";` },
    },
  },
})
