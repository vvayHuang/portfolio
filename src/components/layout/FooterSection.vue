<script setup>
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="footer">
    <div class="container-fluid footer-content">
      <div class="row justify-content-lg-start justify-content-md-center">
        <div class="col-auto">
          <div class="d-flex gap-3 align-items-center">
            <div class="footer-logo-img">
              <img class="img-fluid" src="../../assets/img/asset-footer-logo.png" alt="" />
            </div>
            <span class="text-muted d-inline-flex fs-7">© {{ currentYear }} vvayHuang</span>
            <ul class=" d-flex gap-3 align-items-center list-unstyled mb-0 fs-7">
              <li><a href="#" class=" link-dark text-decoration-none text-muted">Github</a></li>
              <li><a href="https://music.apple.com/tw/playlist/mixtape1/pl.u-yZyVE33F9EX87X" target="_blank" class=" link-dark text-decoration-none text-muted">#Mixtape1</a></li>
              <li><a href="https://music.apple.com/tw/playlist/mixtape2/pl.u-EdAVz64u5r14P1" target="_blank" class=" link-dark text-decoration-none text-muted">#Mixtape2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  position: relative;
  height: 48vh; /* 增加高度以完整顯示圖片 */
  display: flex;
  align-items: center; /* 垂直置中內容 */
  justify-content: center; /* 水平置中內容 */
  @media (max-width: 1440px) {
    height: 40vh;
  }
  @media (max-width: 1024px) {
    height: 29vh;
  }
  @media (max-width: 768px) {
    height: 20vh;
  }
  @media (max-width: 425px) {
    height: 14vh;
  }
}
.footer::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/asset-footer-mountain-removebg-preview.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  z-index: -1;
  opacity: 0.7; /* 可根據需要調整透明度 */
  filter: grayscale(100%); /* 讓圖片變黑白 */
}
.footer-content {
  position: relative;
  z-index: 1;
}
.footer-logo-img {
  width: 60px;
}
</style>
