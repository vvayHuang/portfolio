// 樣式導入
import './assets/scss/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 第三方函式庫導入
import * as bootstrap from 'bootstrap'

// Vue 核心模組
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 分析工具
import VueGtag from 'vue-gtag-next'
import Hotjar from '@hotjar/browser'
import Clarity from '@microsoft/clarity'

// 初始化分析工具
const siteId = 6552662
const hotjarVersion = 6
Hotjar.init(siteId, hotjarVersion)

const projectId = 'ttk3ubjgdk'
Clarity.init(projectId)

// 建立 Vue 應用程式實例
const app = createApp(App)
const pinia = createPinia()

// 註冊插件
app.use(pinia)
app.use(router)
app.use(i18n)

// 僅在生產環境啟用 Google Analytics
if (import.meta.env.PROD) {
  app.use(VueGtag, {
    property: {
      id: import.meta.env.VITE_GTAG_ID
    }
  }, router)
}

// 掛載應用程式
app.mount('#app')
