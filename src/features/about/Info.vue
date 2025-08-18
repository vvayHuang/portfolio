<script setup>
import { useI18n } from 'vue-i18n'
import SectionText from '@/components/common/SectionTitle.vue'
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
      en: "Through multimedia design vocational training programs, online web layout practical courses, and hands-on workshops, I've gained in-depth knowledge of front-end technologies such as HTML, CSS, and JavaScript. These experiences have equipped me with a comprehensive understanding of the entire design and development process, from Figma prototyping to final implementation.",
      zh: '我透過多媒體設計職業培訓課程、線上網頁切版實作課程，以及實戰型工作坊，深入學習了 HTML、CSS 與 JavaScript 等前端技術。這些經驗讓我掌握了從 Figma 原型設計到最終實現的完整設計與開發流程。',
    },
  },
  {
    id: 3,
    text: {
      en: 'Furthermore, I have a deeper appreciation for the relationship between design and development. This allows me to effectively integrate technology with design to create user interfaces that are both aesthetically pleasing and highly interactive.',
      zh: '此外，我對設計與開發之間的關係有更深入的了解，能夠有效結合技術與設計，打造出既美觀又具互動性的用戶介面。',
    },
  },
  {
    id: 4,
    text: {
      en: 'With these practical experiences, I am now adept at flexibly applying various design tools and workflows to meet diverse project needs. I am familiar with the complete design workflow, from initial requirements analysis to final design implementation, and possess the ability to communicate effectively with development teams to provide optimal design solutions. My goal is to continuously enhance the user experience through creative problem-solving.',
      zh: '透過這些實務經驗，我已能靈活應用各種設計工具與流程，以滿足不同專案需求。我熟悉從初期需求分析到最終設計實現的完整工作流程，並具備與開發團隊有效溝通、提供最佳設計方案的能力。我的目標是透過創造性解決方案，持續提升使用者體驗。',
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
  en: 'My Contact',
  zh: '我的聯絡方式',
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
    <SectionText>
      <template #heading>{{ sectionText[locale] }}</template>
    </SectionText>
    <p v-for="item in info" :key="item.id">
      {{ item.text[locale] }}
    </p>
    <img class="mb-2 img-fluid" src="@/assets/img/asset-personal-photo.png" :alt="altText[locale]" />
    <span class="small text-capitalize d-block mb-5">{{ avatar[locale] }}</span>
    <div class="mt-5 pt-5">
      <SectionText>
        <template #heading>{{ contactSectionText[locale] }}</template>
      </SectionText>
      <p class="fs-4 fs-6 fw-bold mb-4 py-2">
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
<style scoped>
.about-info p {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4rem;
}
ul > li {
  .bi-arrow-up-right {
    transition: 0.45s cubic-bezier(0.34, 1.56, 0.48, 1.19);
  }
}

ul > li:hover {
  .bi-arrow-up-right {
    transform: rotate(45deg);
  }
}

.about-info img {
  filter: saturate(0.8);
  transition: filter 0.3s ease-in-out;
}

.about-info img:hover {
  filter: saturate(1);
}
</style>
