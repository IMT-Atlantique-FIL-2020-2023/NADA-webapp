<<<<<<< HEAD
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

import { join, resolve } from 'path'
export default defineConfig({
  mode: 'development',
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
=======
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

import { join, resolve } from "path";
export default defineConfig({
  mode: "development",
  resolve: {
    alias: {
      "@": join(__dirname, "./src"),
>>>>>>> main
    },
  },
  plugins: [
    vue(),
    vueI18n({
<<<<<<< HEAD
      include: resolve(__dirname, './locales/**'),
    }),
  ],
  define: { 'process.env': {} },
=======
      include: resolve(__dirname, "./locales/**"),
    }),
  ],
  define: { "process.env": {} },
>>>>>>> main
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import "@/styles/variables.scss";` },
    },
  },
<<<<<<< HEAD
})
=======
});
>>>>>>> main
