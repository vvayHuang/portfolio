<script setup>
import { useI18n } from 'vue-i18n'
import SectionText from '@/components/ui/SectionTitle.vue'
import List from '@/components/ui/List.vue'

const { locale } = useI18n()

const sectionText = {
  en: 'Skills',
  zh: '專業技能',
}

const skillCategories = [
  {
    id: 1,
    category: { en: 'Frontend Development', zh: '前端開發' },
    skills: [
      {
        id: 'fe-1',
        text: {
          en: 'Proficient in Vue 3 (Composition API) and Nuxt 3, with experience in building server-side rendered (SSR) and full-stack applications.',
          zh: '精通 Vue 3 (Composition API) 與 Nuxt 3，具備建構 SSR 及全端應用的開發經驗。',
        },
      },
      {
        id: 'fe-2',
        text: {
          en: 'Skilled in state management with Pinia and routing with Vue Router.',
          zh: '熟悉使用 Pinia 進行狀態管理及 Vue Router 進行路由規劃。',
        },
      },
      {
        id: 'fe-3',
        text: {
          en: 'Expertise in modern CSS frameworks including Tailwind CSS and Bootstrap 5, along with SCSS for creating scalable and maintainable styles.',
          zh: '熟練運用 Tailwind CSS 與 Bootstrap 5 等現代 CSS 框架，並結合 SCSS 編寫可擴展且易於維護的樣式。',
        },
      },
      {
        id: 'fe-4',
        text: {
          en: 'Experienced in creating fluid animations and interactive user interfaces using GSAP.',
          zh: '具備使用 GSAP 製作流暢動畫與互動式使用者介面的經驗。',
        },
      },
      {
        id: 'fe-5',
        text: {
          en: 'Familiar with implementing internationalization (i18n) using vue-i18n.',
          zh: '熟悉使用 vue-i18n 實作多國語系功能。',
        },
      },
    ],
  },
  {
    id: 2,
    category: { en: 'Backend & Database', zh: '後端與資料庫' },
    skills: [
      {
        id: 'be-1',
        text: {
          en: 'Experience with Supabase for backend services, including user authentication, PostgreSQL database management, and implementing Row-Level Security (RLS).',
          zh: '具備 Supabase 後端服務使用經驗，包含使用者驗證、PostgreSQL 資料庫管理及 RLS 權限策略實作。',
        },
      },
      {
        id: 'be-2',
        text: {
          en: 'Capable of designing and building secure API endpoints and handling server-side logic within the Nuxt 3 (Nitro) environment.',
          zh: '能夠在 Nuxt 3 (Nitro) 環境中設計並建構安全的 API 端點，處理伺服器端邏輯。',
        },
      },
    ],
  },
  {
    id: 3,
    category: { en: 'AI & Design Tools', zh: 'AI 與設計工具' },
    skills: [
      {
        id: 'ai-1',
        text: {
          en: 'Proficient in integrating Generative AI using the Google Gemini API, including handling server-side streaming for real-time UI updates.',
          zh: '熟悉整合 Google Gemini API 等生成式 AI 技術，包含處理伺服器端串流以實現即時 UI 更新。',
        },
      },
      {
        id: 'ai-2',
        text: {
          en: 'Skilled in using Figma for UI/UX design, prototyping, and leveraging tools like Material Design Builder to create consistent design systems.',
          zh: '熟練使用 Figma 進行 UI/UX 設計與原型製作，並善用 Material Design Builder 等工具建立一致的設計系統。',
        },
      },
      {
        id: 'ai-3',
        text: {
          en: 'Experience with AI-powered tools such as Gemini CLI for code assistance and Recraft AI for generating visual assets.',
          zh: '具備使用 Gemini CLI 輔助開發，以及 Recraft AI 生成視覺素材等 AI 工具的經驗。',
        },
      },
    ],
  },
  {
    id: 4,
    category: { en: 'Development & Analytics', zh: '開發與分析工具' },
    skills: [
      {
        id: 'dev-1',
        text: {
          en: 'Proficient with modern frontend build tools like Vite and version control systems like Git/GitHub.',
          zh: '熟悉 Vite 等現代前端建置工具，以及 Git/GitHub 等版本控制系統。',
        },
      },
      {
        id: 'dev-2',
        text: {
          en: 'Familiar with setting up and using user behavior analytics tools such as Microsoft Clarity and Google Analytics.',
          zh: '熟悉設定與使用 Microsoft Clarity、Google Analytics 等使用者行為分析工具。',
        },
      },
    ],
  },
]
</script>
<template>
  <div class="about-skill">
    <SectionText>
      <template #heading>{{ sectionText[locale] }}</template>
    </SectionText>
    <div v-for="category in skillCategories" :key="category.id" class="mb-4">
      <h4 class="fw-bold mb-3 mt-5 fs-5">{{ category.category[locale] }}</h4>
      <List :items="category.skills" :show-icon="false">
        <template #list-item="{ item }">
          {{ item.text[locale] }}
        </template>
      </List>
    </div>
  </div>
</template>