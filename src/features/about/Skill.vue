<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import SectionText from '@/components/ui/SectionTitle.vue'
import List from '@/components/ui/List.vue'

const sectionText = {
  en: 'Skill',
  zh: '技能',
}

const skills = [
  {
    id: 1,
    text: {
      en: 'Proficient in using Figma as a UI/UX design tool.',
      zh: '熟悉 Figma UI／UX 設計工具',
    },
  },
  {
    id: 2,
    text: {
      en: 'Skilled in HTML, CSS, and basic knowledge of JavaScript front-end development.',
      zh: '熟悉 HTML、CSS，略懂 JavaScript 前端開發技術',
    },
  },
  {
    id: 3,
    text: {
      en: 'Familiar with Bootstrap and basic concepts of the Tailwind CSS framework.',
      zh: '熟悉 Bootstrap，略懂 Tailwind 前端開發框架',
    },
  },
  {
    id: 4,
    text: {
      en: 'Have a foundational understanding of the Vue 3 front-end framework.',
      zh: '略懂 Vue3 前端開發框架',
    },
  },
  {
    id: 5,
    text: {
      en: 'Knowledgeable about Git and GitHub for version control.',
      zh: '略懂 git、Github 版本控制',
    },
  },
]
</script>
<template>
  <div class="about-skill">
    <SectionText>
      <template #heading>{{ sectionText[locale] }}</template>
    </SectionText>
    <List :items="skills" :show-icon="false">
      <template #list-item="{ item, index }">
        {{ item.text[locale] }}
      </template>
    </List>
  </div>
</template>
