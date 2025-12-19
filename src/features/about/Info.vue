<script setup>
import { useI18n } from 'vue-i18n'
import SectionText from '@/components/ui/SectionTitle.vue'
import IconArrowUpRight from '@/icons/IconArrowUpRight.vue'

const { locale } = useI18n()

const sectionText = {
  en: 'About Me',
  zh: '關於我',
}
const info = [
  {
    id: 1,
    text: {
      en: "Hello, I'm Chun-Wei Huang, a passionate designer specializing in web design and UI/UX design, actively seeking professional opportunities in these fields.",
      zh: '您好，我是黃俊維，一名熱愛設計且專注於網頁設計與 UI/UX 設計的工作者，正在積極尋找相關的職業發展機會。',
    },
  },
  {
    id: 2,
    text: {
      en: 'My journey into development has equipped me with a robust full-stack skill set. I am proficient in building modern web applications with Vue 3 and Nuxt 3, managing state with Pinia, and creating fluid animations with GSAP. On the backend, I have hands-on experience with Supabase, where I\'ve managed databases, implemented user authentication, and secured data with RLS policies. This holistic understanding allows me to bridge the gap between design and development, creating user interfaces that are both aesthetically pleasing and technically sound.',
      zh: '我的開發歷程使我具備了全面的全端技術能力。我精通使用 Vue 3 與 Nuxt 3 建構現代網頁應用，並擅長以 Pinia 進行狀態管理及 GSAP 製作流暢動畫。在後端方面，我擁有 Supabase 的實務經驗，能夠管理資料庫、實作使用者驗證並透過 RLS 策略保護資料安全。這種跨足前後端的整體理解，讓我能有效填補設計與開發之間的鴻溝，打造兼具美學與技術穩定性的使用者介面。',
    },
  },
  {
    id: 3,
    text: {
      en: "I actively leverage AI-powered tools to enhance my workflow, from using the Gemini API for generative features to employing the Gemini CLI for development assistance. My design process, centered in Figma, is complemented by tools like Material Design Builder and AI-driven asset generators. I am also experienced in using modern development tools like Vite and Git, and I utilize analytics platforms like Microsoft Clarity to gather insights and continuously improve the user experience.",
      zh: '我積極運用 AI 工具來提升工作流程，從整合 Gemini API 開發生成式功能，到在開發過程中使用 Gemini CLI 輔助編碼。我以 Figma 為核心的設計流程，也透過 Material Design Builder 和 AI 視覺生成工具加以輔助。同時，我熟悉 Vite 與 Git 等現代開發工具，並利用 Microsoft Clarity 等分析平台，從數據洞察中持續優化使用者體驗。',
    },
  },
  {
    id: 4,
    text: {
      en: 'I am adept at managing the entire project lifecycle, from initial requirements analysis to final implementation. My goal is to collaborate effectively with teams, apply creative problem-solving, and deliver exceptional, user-centric digital experiences.',
      zh: '我熟悉從初期需求分析到最終產品實現的完整專案流程。我的目標是與團隊高效協作，運用創造性思維解決問題，最終交付以使用者為中心的卓越數位體驗。',
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
const contactSectionText = {
  en: 'Contact',
  zh: '聯絡方式',
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
      <SectionText>
        <template #heading>{{ sectionText[locale] }}</template>
      </SectionText>
      <p v-for="item in info" :key="item.id">
        {{ item.text[locale] }}
      </p>
    </div>
    <div class=" mb-6">
      <img class="mb-2 img-fluid" src="@/assets/img/asset-personal-photo.png" :alt="altText[locale]" />
      <span class="small text-capitalize d-block">{{ avatar[locale] }}</span>
    </div>
    <div id="contact">
      <SectionText>
        <template #heading>{{ contactSectionText[locale] }}</template>
      </SectionText>
      <p class="fw-bold mb-4 py-2">
        {{ contact[0].text[locale] }}
      </p>
      <ul class="list-unstyled">
        <li>
          <a class="nav-link d-inline-block" :href="`mailto:${contact[0].email}`">
            <IconArrowUpRight />
            <span class="fw-medium ms-3 text-capitalize">{{ contact[0].link[locale] }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
