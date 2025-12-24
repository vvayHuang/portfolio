import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default createConfigForNuxt({
  features: {
    tooling: true,
    typescript: false // 您的專案目前主要是 JS
  }
})
  .append(
    {
      name: 'app/custom-rules',
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        "prettier/prettier": "error",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-trailing-spaces": "error",
        "vue/multi-word-component-names": "off" // Nuxt 頁面通常不需要多單詞命名
      }
    }
  )
  .append(prettierConfig);
