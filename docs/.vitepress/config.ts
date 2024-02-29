import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "E Element 组件库",
  description: "for Vue3",
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "button",
        items: [{ text: "Button 按钮", link: "/components/button" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
