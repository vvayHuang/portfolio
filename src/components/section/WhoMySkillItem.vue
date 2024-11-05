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
  <slot name="list">
    <ul class="list-unstyled">
      <li class="py-2">
        <span class="fw-medium">{{ t("my skill 1") }}</span>
      </li>
      <li class="py-2">
        <span class="fw-medium">{{ t("my skill 2") }}</span>
      </li>
      <li class="py-2">
        <span class="fw-medium">{{ t("my skill 3") }}</span>
      </li>
      <li class="py-2">
        <span class="fw-medium">{{ t("my skill 4") }}</span>
      </li>
      <li class="py-2">
        <span class="fw-medium">{{ t("my skill 5") }}</span>
      </li>
    </ul>
  </slot>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
