<script setup>
import { useI18n } from 'vue-i18n'
import IconArrow90degDown from '@/icons/IconArrow90degDown.vue'
import IconArrowUpRight from '@/icons/IconArrowUpRight.vue'
import SectionText from '@/components/common/SectionTitle.vue'
const { t, locale } = useI18n()
</script>
<template>
  <section id="MSG">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <sectionText>
            <template #heading>{{ t('my contact') }}</template>
            <template #icon>
              <IconArrow90degDown />
            </template>
          </sectionText>
          <p class="fs-4 fs-6 fw-bold mb-4 py-2">
            {{ t('my contact details') }}
          </p>
          <ul class="list-unstyled">
            <li>
              <a class="nav-link d-inline-block" href="mailto:jyunwayhuang@gmail.com">
                <IconArrowUpRight />
                <span class="fw-medium ms-3 text-capitalize">{{ t('e mail') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
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
