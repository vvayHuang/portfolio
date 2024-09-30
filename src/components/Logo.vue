<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  gsap.fromTo(
    ".logo",
    { x: -129 },
    { x: 129, duration: 8, ease: "none", repeat: -1 }
  );
});
</script>
<template>
  <div class="bg-dark overflow-hidden">
    <a class="navbar-brand me-0" href="#">
      <img class="logo" src="../assets/img/logo.png" alt="Logo" />
    </a>
  </div>
</template>
