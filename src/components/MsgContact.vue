<script setup>
import IconArrowUpRight from "./icons/IconArrowUpRight.vue";
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
  <slot name="textContent">
    <p class="fs-md-3 fs-6  fw-bold mb-4">
      如果您有興趣與我合作，請通過電子郵件地址聯繫我。
    </p>
  </slot>
  <slot name="link">
    <ul class="list-unstyled">
      <li>
        <a class="nav-link d-inline-block " href="mailto:momoopsoops@gmail.com">
          <IconArrowUpRight />
          <span class="fw-medium ms-3">(MAIL)</span>
        </a>
      </li>
    </ul>
  </slot>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
