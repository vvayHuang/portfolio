<script setup>
const { locale } = useI18n()

const info = [
  {
    id: 1,
    text: {
      en: "Hello, I'm Chun-Wei Huang, a passionate designer specializing in web design and UI/UX design, actively seeking professional opportunities in these fields.",
      zh: '您好，我是黃俊維，一名熱愛設計且專注於網頁設計與 UI/UX 設計的工作者，正在積極尋求相關的職業發展機會。',
    },
  },
  {
    id: 2,
    text: {
      en: "Specializing in modern web development, I focus on building responsive applications using Vue 3 and Nuxt 3. My workflow integrates efficient state management with Pinia and immersive animations via GSAP. While primarily focused on frontend and design, exposure to backend services like Supabase—including database basics and authentication—provides a valuable perspective for bridging the gap between visual design and technical implementation.",
      zh: '專注於現代網頁開發領域，使用 Vue 3 與 Nuxt 3 建構響應式應用是我的核心專長。在開發流程中，我習慣運用 Pinia 進行狀態管理，並透過 GSAP 打造沉浸式的動畫體驗。雖然主要致力於前端與設計，但對 Supabase 等後端服務（包含資料庫基礎與驗證）的涉獵，讓我能以更全面的視角連結視覺設計與程式實作。',
    },
  },
  {
    id: 3,
    text: {
      en: "Leveraging AI-powered tools significantly enhances my workflow, from integrating the Gemini API for generative features to utilizing the Gemini CLI for development assistance. My design process centers on Figma, complemented by Material Design Builder and AI-driven asset generators. Furthermore, familiarity with Vite, Git, and analytics platforms like Microsoft Clarity ensures a data-driven approach to continuous user experience improvement.",
      zh: 'AI 工具的運用大幅提升了我的工作效率，包括整合 Gemini API 開發生成式功能，以及使用 Gemini CLI 輔助編碼。設計流程以 Figma 為核心，並輔以 Material Design Builder 和 AI 視覺生成工具。此外，結合 Vite、Git 等現代開發工具，以及 Microsoft Clarity 等分析平台，確保能從數據洞察中持續優化使用者體驗。',
    },
  },
  {
    id: 4,
    text: {
      en: 'Managing the project lifecycle from requirements analysis to implementation is a key strength. The goal is always to collaborate effectively with teams, applying creative problem-solving to deliver exceptional, user-centric digital experiences.',
      zh: '掌握從需求分析到產品實現的完整流程是我的優勢之一。始終致力於與團隊高效協作，運用創造性思維解決問題，最終交付以使用者為中心的卓越數位體驗。',
    },
  },
]
const avatar = {
  en: 'Way Huang (taken in 2022)',
  zh: '黃俊維 (攝於 2022)',
}
const altText = {
  en: 'Personal photo',
  zh: '個人照片',
}
const contact = [
  {
    id: 1,
    text: {
      en: 'If you are interested in collaborating, please contact me via email address.',
      zh: '如果您有興趣合作，請透過電子郵件地址聯繫我。',
    },
    link: {
      en: 'e-mail',
      zh: '電子信箱',
    },

    email: 'jyunwayhuang@gmail.com',
  },
]
</script>
<template>
  <div class="about-info">
    <div>
      <SectionTitle>
        <template #heading>{{ $t('WHO') }}</template>
      </SectionTitle>
      <p v-for="item in info" :key="item.id">
        {{ item.text[locale] }}
      </p>
    </div>
    <div class=" mb-6">
      <NuxtImg class="mb-2 img-fluid" src="/img/asset-personal-photo.png" :alt="altText[locale]" />
      <span class="small text-capitalize d-block">{{ avatar[locale] }}</span>
    </div>
    <div id="contact">
      <SectionTitle>
        <template #heading>{{ $t('MSG') }}</template>
      </SectionTitle>
      <p class="fw-bold mb-4 py-2">
        {{ contact[0].text[locale] }}
      </p>
      <ul class="list-unstyled">
        <li>
          <a class="nav-link d-inline-block" :href="`mailto:${contact[0].email}`">
            <Icon name="bi:arrow-up-right" class="icon" />
            <span class="fw-medium ms-3 text-capitalize">{{ contact[0].link[locale] }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
