import './assets/scss/main.scss'
import * as bootstrap from 'bootstrap'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { VueGtag } from 'vue-gtag-next'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(router)
app.use(i18n)
if (import.meta.env.PROD) {
  app.use(VueGtag, {
    property: {
      id: 'G-0G9XXZN7QN'
    }
  }, router)
}
app.mount('#app')
