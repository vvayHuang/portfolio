<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import SectionText from '@/components/ui/SectionTitle.vue'
import List from '@/components/ui/List.vue'

const sectionText = {
  en: 'My Advantage',
  zh: '我的優勢',
}

const advantages = [
  {
    id: 1,
    text: {
      en: 'Passionate about design and always eager to learn.',
      zh: '對設計充滿熱情，並保持強烈的學習意願',
    },
  },
  {
    id: 2,
    text: {
      en: 'Possess strong foundational knowledge and a quick learning ability.',
      zh: '具備扎實的基礎知識與快速的學習能力',
    },
  },
]
</script>

<template>
  <div class="about-advantage">
    <SectionText>
      <template #heading>{{ sectionText[locale] }}</template>
    </SectionText>
    <List :items="advantages">
      <template #list-item="{ item, index }">
        {{ item.text[locale] }}
      </template>
    </List>
  </div>
</template>
