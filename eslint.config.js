import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { extends: [
    "plugin:vue/vue3-recommended", 
    "eslint:recommended", 
    "airbnb-base",
    "prettier" // 確保 ESLint 不會與 Prettier 衝突
  ] },
  {plugins:["prettier"], rules: { "prettier/prettier": "error" }},
];