<template>
  <div class="d-flex py-lg-2 align-items-end mb-3 mb-md-0 ">
    <h4 class="fs-md-4 fs-6  text-secondary ">
      <slot name="heading"></slot>
    </h4>
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <slot name="textContent">
    <p class="fs-md-2 fs-6  fw-bold">
      你好，我是黃俊維。一位熱愛設計、積極學習的網頁設計師/UI設計師求職者，目前正在積極尋求相關工作機會。
    </p>
    <p class="fs-md-2 fs-6  fw-bold mb-4">
      雖然尚未有相關工作經驗，但我對設計充滿熱情，並擁有扎實的基礎知識和良好的學習能力。在校期間，我主修資訊模擬與設計，學習了多媒體設計職訓班、網頁切版直播班及網路上關於Figma教學等課程。這些課程讓我掌握了
      HTML、CSS、JavaScript 等前端開發技術，並熟悉了Figma、Adobe XD 等 UI
      設計工具。
    </p>
    <p class="fs-md-2 fs-6  fw-bold mb-4">
      除了課堂學習之外，我還積極參與了多個與設計相關的項目，包括與課程同學們一起製作網站及互相討論分享學到的知識。這些項目讓我積累了一定的設計經驗和實踐能力，也讓我更加堅定了自己從事設計工作的決心。
    </p>
    <p class="fs-md-2 fs-6  fw-bold mb-4">
      我相信，我的熱情、學習能力和實踐經驗能夠讓我很快勝任網頁設計師/UI設計師的工作。我非常渴望能夠在這個領域發揮自己的才能，為公司創造價值。
    </p>
    <img class=" mb-2 img-fluid " src="../assets/personal-img.png" alt="personal img">
    <p>WAY HUANG (TAKE IN 2022)</p>
  </slot>
</template>

<style scoped>

i {
  transform: rotateY(180deg);
}

</style>
