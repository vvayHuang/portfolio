// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  experimental: {
    appManifest: false
  },

  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', '@vueuse/nuxt', '@nuxt/fonts'],

  fonts: {
    families: [
      { name: 'Noto Sans TC', provider: 'google', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] }
    ]
  },

  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/scss/main.scss'
  ],

  i18n: {
    baseUrl: 'https://vvayhuang.online',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'zh', language: 'zh-TW', file: 'zh.json' }
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: '黃俊維 (Way Huang) | Creative Developer & UI Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會' },
        { name: 'author', content: '黃俊維 (Way Huang)' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ]
})
