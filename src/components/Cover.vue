<script setup>
import lax from "lax.js";
import { onMounted } from "vue";

onMounted(() => {
  // Setup lax
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add your elements
  lax.addElements(
    ".scroll-left",
    {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [400, 0],
        ],
      },
    },
    []
  );
});
</script>

<template>
  <section id="cover" class=" overflow-hidden">
    <h1 class="display-1 fw-bolder text-uppercase mb-0 lh-1 text-nowrap scroll-left">vvay huang</h1>
    <div class="container d-flex flex-column h-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-3">
          <p class="mt-auto">
            我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會
          </p>
        </div>
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
