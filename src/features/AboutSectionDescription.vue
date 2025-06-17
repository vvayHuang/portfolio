<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import SectionText from '@/components/common/SectionTitle.vue'
</script>
<template>
  <SectionText>
    <template #heading>{{ t('about me') }}</template>
  </SectionText>
  <div class="overflow-hidden mb-3">
    <p class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 1s mb-0">
      {{ t('about me content 1') }}
    </p>
  </div>
  <div class="overflow-hidden mb-3">
    <p class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 2s mb-0">
      {{ t('about me content 2') }}
    </p>
  </div>
  <div class="overflow-hidden mb-3">
    <p class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 2s mb-0">
      {{ t('about me content 3') }}
    </p>
  </div>
  <div class="overflow-hidden mb-3">
    <ul class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 3s mb-0">
      {{
        t('about me content list')
      }}
      <li class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 3s mb-0">
        {{ t('about me content list item 1') }}
      </li>
      <li class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 3s mb-0">
        {{ t('about me content list item 2') }}
      </li>
      <li class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 3s mb-0">
        {{ t('about me content list item 3') }}
      </li>
      <li class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 3s mb-0">
        {{ t('about me content list item 4') }}
      </li>
    </ul>
  </div>
  <img class="mb-2 img-fluid" src="@/assets/img/personal-img.png" alt="personal img" />
  <p class="small text-capitalize">{{ t('avatar') }}</p>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
