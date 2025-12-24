// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // GitHub Pages 部署設定
  app: {
    baseURL: '/', 
    buildAssetsDir: '/_nuxt/',
    head: {
      htmlAttrs: {
        lang: 'zh-TW'
      },
      title: '黃俊維 (Way Huang) | Creative Developer & UI Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會' },
        { name: 'keywords', content: '黃俊維, Way Huang, Creative Developer, UI Designer, Web Designer, Portfolio, 前端工程師, 網頁設計師, UI設計師, 作品集' },
        { name: 'author', content: '黃俊維 (Way Huang)' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vvayhuang.online/' },
        { property: 'og:title', content: '黃俊維 (Way Huang) | Creative Developer & UI Designer' },
        { property: 'og:description', content: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會' },
        { property: 'og:image', content: 'https://vvayhuang.online/apple-touch-icon.png' },
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'og:site_name', content: '黃俊維 | 作品集' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://vvayhuang.online/' },
        { name: 'twitter:title', content: '黃俊維 (Way Huang) | Creative Developer & UI Designer' },
        { name: 'twitter:description', content: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會' },
        { name: 'twitter:image', content: 'https://vvayhuang.online/apple-touch-icon.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://vvayhuang.online/' },
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "黃俊維 (Way Huang)",
            "jobTitle": "Creative Developer & UI Designer",
            "description": "我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會",
            "url": "https://vvayhuang.online/",
            "sameAs": ["https://github.com/vvayHuang"],
            "knowsAbout": ["Vue.js", "UI/UX Design", "Web Development", "GSAP", "Figma", "JavaScript"],
            "nationality": "Taiwan"
          })
        }
      ]
    }
  },

  experimental: {
    appManifest: false
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/scss/main.scss'
  ],

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
  ],

  i18n: {
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'zh', iso: 'zh-TW', file: 'zh.json' }
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  }
})
