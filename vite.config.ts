import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

import { join, resolve } from 'path'
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/NADA-webapp/' : '/',
  mode: 'development',
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, './locales/**'),
    }),
  ],
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import "@/styles/variables.scss";` },
    },
  },
})
