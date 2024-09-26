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
        <span class="fw-medium ">熟悉 HTML、CSS，略懂 JavaScript 前端開發技術</span>
      </li>
      <li class=" py-2">
        <span class="fw-medium "
          >熟悉 Figma UI／UX 設計工具</span
        >
      </li>
      <li class=" py-2">
        <span class="fw-medium "
          >熟悉 Bootstrap，略懂 Tailwind 前端開發框架</span
        >
      </li>
      <li class=" py-2">
        <span class="fw-medium "
          >略懂 Vue3 前端開發框架</span
        >
      </li>
      <li class=" py-2">
        <span class="fw-medium "
          >略懂 git、Github 版本控制</span
        >
      </li>
    </ul> 
  </slot>
</template>

<style scoped>

i {
  transform: rotateY(180deg);
}

</style>
