<script setup>
import { onMounted } from "vue";
import lax from "lax.js";

onMounted(() => {
  // Setup lax
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add your elements
  lax.addElements(
    ".display-title-scroll",
    {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [-200, 100],
        ],
        opacity: [
          [400, 968],
          [1, 0],
        ],
      },
    },
    []
  );
});
</script>

<template>
  <section id="cover" class="overflow-hidden" style="height: 100vh">
    <div class="d-flex flex-column h-100 justify-content-center">
      <img
        class="display-title-scroll mb-3 img-fluid"
        src="../../assets/img/VVAY HUANG.png"
        alt=""
      />
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="overflow-hidden">
              <p
                class="animate__animated animate__slideInUp animate__slow mb-0"
              >
                我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="position-absolute top-0 start-0 z-n1 animate__animated animate__fadeInLeft animate__slow"
      >
        <img
          class="img-fluid"
          style="filter: brightness(0.5)"
          src="../../assets/img/CLOUD-1.webp"
          alt=""
        />
      </div>
      <div
        class="position-absolute bottom-0 end-0 animate__animated animate__fadeInRight"
      >
        <img
          class="img-fluid"
          style="filter: brightness(0.5)"
          src="../../assets/img/CLOUD-2.webp"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#cover {
  height: calc(100vh - 56px);
  margin-bottom: 80px;
}
</style>
