import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslint from 'vite-plugin-eslint' // vite构建时eslint检查，此库有问题，暂时不用

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: { // 全局引入sass全局变量，mixin
        // additionalData: `
        //   @import "@/assets/scss/variable.scss";
        //   @import "@/assets/scss/mixin.scss";
        // `
      }
    }
  }
})
