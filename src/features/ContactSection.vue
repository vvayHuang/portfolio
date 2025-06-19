<script setup>
import { useI18n } from 'vue-i18n'
import IconArrowUpRight from '@/icons/IconArrowUpRight.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
const { locale } = useI18n()
const sectionText = {
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
    link: '電子信箱',
    email: 'jyunwayhuang@gmail.com',
  },
]
</script>
<template>
  <section id="section-contact">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <SectionTitle>
            <template #heading>{{ sectionText[locale] }}</template>
          </SectionTitle>
          <p class="fs-4 fs-6 fw-bold mb-4 py-2">
            {{ contact[0].text[locale] }}
          </p>
          <ul class="list-unstyled">
            <li>
              <a class="nav-link d-inline-block" :href="`mailto:${contact[0].email}`">
                <IconArrowUpRight />
                <span class="fw-medium ms-3 text-capitalize">{{ contact[0].link }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#section-contact {
  margin-top: 24px;
  margin-bottom: 160px;
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
</style>
