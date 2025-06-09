// src/i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  locale: 'zh', // 預設語言
  messages: {
    en,
    zh,
  },
})

export default i18n
