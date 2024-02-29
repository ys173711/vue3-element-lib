/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // 重载配置, 此时test类型是从<reference types="vitest" />读的
  test: {
    globals: true, // 打开全局vitest变量, 无需import, 还需给TS配置编译选项, 注入全局变量类型, 防止TS报错
    environment: "jsdom",
  },
});
