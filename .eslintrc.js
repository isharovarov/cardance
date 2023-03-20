module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
  ],
  plugins: ["vue", "@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/no-unused-vars": "error",
    "no-unused-vars": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "max-len": ["error", { code: 80 }],
    "template-curly-spacing": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
  },
};
