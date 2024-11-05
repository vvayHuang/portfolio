<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>
<template>
  <div class="d-flex py-lg-2 align-items-end mb-3 mb-md-0">
    <h2 class="fs-6 text-secondary">
      <slot name="heading"></slot>
    </h2>
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <slot name="textContent">
    <div class="overflow-hidden mb-3">
      <p
        class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 1s mb-0"
      >
      {{t('about me content 1')}}
      </p>
    </div>
    <div class="overflow-hidden mb-3">
      <p
        class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 2s mb-0"
      >
      {{t('about me content 2')}}
      </p>
    </div>
    <div class="overflow-hidden mb-3">
      <p
        class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 2s mb-0"
      >
      {{t('about me content 3')}}
      </p>
    </div>
    <div class="overflow-hidden mb-3">
      <p
        class="fs-4 fs-6 fw-bold animate__animated animate__slideInUp animate__slow 3s mb-0"
      >
      {{t('about me content 4')}}
      </p>
    </div>
    <img
      class="mb-2 img-fluid"
      src="../../assets/img/personal-img.png"
      alt="personal img"
    />
    <p class="small text-capitalize">{{t('avatar')}}</p>
  </slot>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
