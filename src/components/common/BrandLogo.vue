<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
onMounted(() => {
  //initially colorize each box and position in a row
  gsap.set('.box', {
    x: (i) => i * 131,
  })

  gsap.to('.box', {
    duration: 10,
    ease: 'none',
    x: '+=262', //move each box 262px to right
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % 262), //force x value to be between 0 and 262 using modulus
    },
    repeat: -1,
  })
})
</script>
<template>
  <div class="wrapper">
    <div class="boxes">
      <div class="box">
        <img class="logo" src="@/assets/img/logo.png" alt="Logo" />
      </div>
      <div class="box">
        <img class="logo" src="@/assets/img/logo.png" alt="Logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 131px;
  height: 33px;
  position: relative;
  overflow: hidden;
}
.box {
  width: 131px;
  height: 33px;
  position: absolute;
}

.boxes {
  position: relative;
  left: -131px;
}
</style>
