module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 规则组
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended", // 把prettier当成eslint规则来使用
    "@vue/eslint-config-prettier", // 必须放在最后面
  ],
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
  plugins: ["@typescript-eslint", "vue", "@stylistic"],
  rules: {
    "@stylistic/indent": ["error", 2], // 强制使用两个空格缩进
    "@stylistic/semi": "off", // 关闭分号检查, "error"、"warn" 或 "off"
    "@stylistic/quotes": ["off", "single"], // 允许使用单引号
    // "@typescript-eslint/method-signature-style": ["error", "property"], // 不允许使用方法定义函数类型（双向协变）
    // 'vue/multi-word-component-names': 'off', // 关闭多个单词组成的组件名检查
    "prettier/prettier": [
      "error",
      // eslint(prettier/prettier)的规则, 注意要与prettier配置文件保持一致
      {
        endOfLine: "auto", // 换行符
        semi: true, // 使用分号
        singleQuote: false, // 是否使用单引号
        printWidth: 80, // 每行代码长度默认80
        tabWidth: 2, // 每个缩进的空格数
      },
    ],
  },
};
