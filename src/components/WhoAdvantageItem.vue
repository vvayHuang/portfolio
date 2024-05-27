<script setup>
import IconArrowUpRight from './icons/IconArrowUpRight.vue';
</script>

<template>
  <div class="d-flex py-lg-2 align-items-end mb-3 mb-md-0">
    <h4 class="fs-md-4 fs-6 text-secondary">
      <slot name="heading"></slot>
    </h4>
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <slot name="list">
    <ul class="list-unstyled">
      <li class=" py-2">
        <IconArrowUpRight />
        <span class="fw-medium ms-3">熱愛設計，並擁有強烈的學習意願</span>
      </li>
      <li class=" py-2">
        <IconArrowUpRight />
        <span class="fw-medium ms-3">擁有扎實的基礎知識和良好的學習能力</span>
      </li>
      <li class=" py-2">
        <IconArrowUpRight />
        <span class="fw-medium ms-3">善於溝通和協作，能夠與團隊成員高效合作</span>
      </li>
    </ul>
  </slot>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
