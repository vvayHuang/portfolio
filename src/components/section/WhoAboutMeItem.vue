<template>
  <div class="d-flex py-lg-2 align-items-end mb-3 mb-md-0 ">
    <h2 class=" fs-6  text-secondary ">
      <slot name="heading"></slot>
    </h2>
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <slot name="textContent">
    <p class=" fs-4 fs-6  fw-bold">
      你好，我是黃俊維。一位熱愛設計的網頁設計師／UI設計師求職者，正在積極尋求相關工作機會。
    </p>
    <p class=" fs-4 fs-6  fw-bold mb-4">
      在參加了多媒體設計職訓班、網頁切版直播班以及 Figma 實戰營等課程中，加深了對 HTML、CSS、JavaScript 等前端技術的理解。同時透過 Figma 實戰營，掌握了從原型設計到交付開發的全流程操作，更了解設計與開發之間的關係，學會了如何將這些技術與設計完美結合，打造出更具互動性和美感的使用者界面。
    </p>
    <p class=" fs-4 fs-6  fw-bold mb-4">
      這些實戰經驗讓我能靈活應用工具，並熟悉從需求分析到設計實施的完整流程。不僅在設計方面，我也具備與開發團隊溝通的能力，能在協作開發與迭代過程中有效理解技術需求並提供合適的設計解決方案，對 UI/UX 設計有了更深入的認識。
    </p>
    <p class=" fs-4 fs-6  fw-bold mb-4">
      期待將這些學習與實踐經驗運用在實際工作中，為公司提供創新和實用的設計解決方案，並在持續學習中為團隊增值。
    </p>
    <img class=" mb-2 img-fluid " src="../../assets/img/personal-img.png" alt="personal img">
    <p class=" small">WAY HUANG (TAKE IN 2022)</p>
  </slot>
</template>

<style scoped>

i {
  transform: rotateY(180deg);
}

</style>
