<script setup>
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="footer">
    <div class="container-fluid footer-content">
      <div class="row justify-content-lg-start justify-content-md-center">
        <div class="col-auto">
          <div class="align-items-md-center d-flex flex-column-reverse flex-md-row gap-5 gap-lg-6">
            <div class=" d-flex flex-column flex-md-row gap-3">
              <div class="footer-logo-img">
                <NuxtImg class="img-fluid" src="/img/asset-footer-logo.png" alt="" />
              </div>
              <span class="text-muted d-inline-flex">© {{ currentYear }} wayHuang</span>
            </div>
            <ul
              class=" d-flex gap-3 align-items-start align-items-md-center list-unstyled mb-0 flex-column flex-md-row">
              <li><a href="https://github.com/vvayHuang" target="_blank"
                  class="text-decoration-none text-muted">Github</a></li>
              <li><a href="https://www.linkedin.com/in/vvayhuang/" target="_blank"
                  class="text-decoration-none text-muted">LinkedIn</a></li>
              <li><a href="https://music.apple.com/tw/playlist/mixtape1/pl.u-yZyVE33F9EX87X" target="_blank"
                  class="text-decoration-none text-muted">Mixtape1</a></li>
              <li><a href="https://music.apple.com/tw/playlist/mixtape2/pl.u-EdAVz64u5r14P1" target="_blank"
                  class="text-decoration-none text-muted">Mixtape2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
