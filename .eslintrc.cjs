module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential"], // 规则组
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    semi: 0, // 不检查分号
    indent: ["error", 2], // tab缩进为2
    // "@typescript-eslint/method-signature-style": ["error", "property"], // 不允许使用方法定义函数类型（双向协变）
  },
};
