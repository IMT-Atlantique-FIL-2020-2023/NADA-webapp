import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import vue from '@vitejs/plugin-vue'

import { join, resolve } from 'path'
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/NADA-webapp/' : '/', //process.env.VITE_BASE_URL,
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
  plugins: [vue(), Icons({ compiler: 'vue3' })],
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import "@/styles/variables.scss";` },
    },
  },
})
