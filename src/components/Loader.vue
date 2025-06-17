<template>
  <transition name="fade">
    <div class="loader-container" v-if="isLoading">
      <div class="loader"></div>
      <p class="loading-text">Loading...</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    // 當頁面載入完成後，延遲關閉 loader
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false
      }, 800)
    })
  },
}
</script>

<style scoped>
/* 添加淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
}

.loading-text {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}

/* 保留原有的 loader 樣式 */
.loader {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  animation: l1 1s infinite linear;
}

@keyframes l1 {
  to {
    background-position:
      50% 0,
      75% 100%;
  }
}
</style>
