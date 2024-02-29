import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import eslint from 'vite-plugin-eslint' // vite构建时eslint检查，此库有问题，暂时不用
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  css: {
    /* postcss: { // postcss插件暂不支持TS
      plugins: []
    }, */
    /* preprocessorOptions: {
      scss: { // 全局引入sass全局变量，mixin
        // additionalData: `
        //   @import "@/assets/scss/variable.scss";
        //   @import "@/assets/scss/mixin.scss";
        // `
      }
    } */
  },
});
