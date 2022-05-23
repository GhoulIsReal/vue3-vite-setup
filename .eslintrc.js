module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-constant-binary-expression": ["error"],
    "no-duplicate-imports": ["error"],
  },
};
