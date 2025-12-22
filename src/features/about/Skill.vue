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
          en: 'Experienced in Vue 3 (Composition API) and Nuxt 3, with experience in building server-side rendered (SSR) and full-stack applications.',
          zh: '熟悉 Vue 3 (Composition API) 與 Nuxt 3，具備建構 SSR 及全端應用的開發經驗。',
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
          en: 'Skilled in modern CSS frameworks including Tailwind CSS and Bootstrap 5, along with SCSS for creating scalable and maintainable styles.',
          zh: '熟悉運用 Tailwind CSS 與 Bootstrap 5 等現代 CSS 框架，並結合 SCSS 編寫可擴展且易於維護的樣式。',
        },
      },
      {
        id: 'fe-4',
        text: {
          en: 'Capable of integrating third-party APIs (such as Google Gemini API) and handling asynchronous data flows.',
          zh: '具備串接第三方 API（如 Google Gemini API）及處理非同步資料流的實作經驗。',
        },
      },
      {
        id: 'fe-5',
        text: {
          en: 'Familiar with creating fluid animations and interactive user interfaces using GSAP.',
          zh: '熟悉使用 GSAP 製作流暢動畫與基礎的互動式使用者介面。',
        },
      },
    ],
  },
  {
    id: 2,
    category: { en: 'Design & AI Tools', zh: '設計與 AI 工具' },
    skills: [
      {
        id: 'ai-1',
        text: {
          en: 'Experienced in using Figma for UI/UX design and prototyping, with a focus on building scalable design systems and maintaining high fidelity between design and frontend implementation.',
          zh: '熟悉使用 Figma 進行 UI/UX 設計與原型製作，專注於建立可擴展的設計系統（Design System），並確保設計稿與前端開發之間的高度還原與整合。',
        },
      },
      {
        id: 'ai-2',
        text: {
          en: 'Experienced in integrating Generative AI using the Google Gemini API and utilizing AI-powered tools such as Gemini CLI for development assistance.',
          zh: '熟悉整合 Google Gemini API 等生成式 AI 技術，並運用 Gemini CLI 等工具輔助程式開發。',
        },
      },
      {
        id: 'ai-3',
        text: {
          en: 'Skilled in leveraging AI-driven asset generators like Recraft AI to create visual components and illustrations.',
          zh: '擅長運用 Recraft AI 等 AI 視覺生成工具，產出高品質的元件素材與插畫。',
        },
      },
    ],
  },
  {
    id: 3,
    category: { en: 'Development & Analytics', zh: '開發與分析工具' },
    skills: [
      {
        id: 'dev-1',
        text: {
          en: 'Skilled with modern frontend build tools like Vite and version control systems like Git/GitHub.',
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