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
        <span class="fw-medium ">熟悉 HTML、CSS 和 JavaScript 等前端開發技術</span>
      </li>
      <li class=" py-2">
        <span class="fw-medium "
          >熟悉各種 UI 設計工具，如 Figma</span
        >
      </li>
      <li class=" py-2">
        <span class="fw-medium ">擁有良好的溝通和協作能力</span>
      </li>
      <li class=" py-2">
        <span class="fw-medium ">能夠獨立工作並按時完成項目</span>
      </li>
    </ul> 
  </slot>
</template>

<style scoped>

i {
  transform: rotateY(180deg);
}

</style>
