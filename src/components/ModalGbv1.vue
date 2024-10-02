<script setup>
import IconGithub from "./icons/IconGithub.vue";
import IconFigma from "./icons/IconFigma.vue";
import IconLink45deg from "./icons/IconLink45deg.vue";
</script>
<template>
  <div
    class="modal fade"
    id="GbModal"
    tabindex="-1"
    aria-labelledby="GbModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content overflow-hidden bg-transparent border-0">
        <div class="modal-header border-0 justify-content-center">
          <div id="carouselExampleCaptions" class="carousel slide w-100">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container d-flex flex-column justify-content-center h-100">
                  <div class="row row-cols-lg-2 row-cols-1 g-lg-3 g-md-2 gy-2">
                    <div class="col">
                      <img
                        class=" object-cover w-100 h-100"
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3FhbXoyMWF0dmZ0emtuNGsweGNiM2I1bTFtZGM0a3U3dThvZDZ5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WP49WTehm64Lc4mHDc/giphy.gif"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <img
                        class=" object-cover w-100 h-100"
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWM2dmZieWNnMG83eDR2eHY1NnBwZnA3YnlueWE1MjJ1YWN0eGp5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8RA4cP6wDLZybQNgdW/giphy.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-caption d-none d-lg-block">
                  <h5>GalaxyBoyz ver1.0</h5>
                  <p>
                    自學figma，自行切版的第一個版本
                  </p>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container d-flex flex-column justify-content-center h-100">
                  <div class="row row-cols-lg-2 row-cols-1 g-lg-3 g-md-2 gy-2">
                    <div class="col">
                      <img
                        class=" object-cover w-100 h-100"
                        src="../assets/img/gb-preview-1.gif"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <img
                        class=" object-cover w-100 h-100"
                        src="../assets/img/gb-preview-2.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-caption d-none d-lg-block">
                  <h5>GalaxyBoyz ver2.0</h5>
                  <p>
                    上完 aapd 設計實戰營的課程後，調整後的版本，更清楚UI/UX設計過程該如何思考及交付
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white position-absolute top-0 start-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-bg-light rounded-3">
          <div class="container">
            <div class="flex-column flex-md-row justify-content-between row">
              <div class="col">
                <h2 class="text-secondary fs-5">樂團形象官網</h2>
                <h1 class="modal-title mb-md-3" id="GbModalLabel">
                  GalaxyBoyz
                </h1>
                <div class="mb-3">
                  <a
                    href="https://github.com/vvayHuang/galaxyboyz"
                    class="link-dark me-3 d-inline"
                    target="_blank"
                    ><IconGithub
                  /></a>
                  <a
                    href="https://vvayhuang.github.io/galaxyboyz/"
                    class="link-dark me-3"
                    target="_blank"
                    ><IconLink45deg
                  /></a>
                  <a
                    href="https://www.figma.com/design/RX78vjYDu0Wtd3591akmX9/GalaxyBoyz?node-id=2800-14505&t=2spatClOjWG5A7Hq-4/"
                    class="link-dark"
                    target="_blank"
                    ><IconFigma
                  /></a>
                </div>
                <div class="mb-3">
                  <span class="badge rounded-pill text-bg-light text-capitalize"
                    >vite</span
                  >
                  <span class="badge rounded-pill text-bg-light text-capitalize"
                    >bootstrap</span
                  >
                  <span class="badge rounded-pill text-bg-light text-capitalize"
                    >ejs</span
                  >
                  <span class="badge rounded-pill text-bg-light text-capitalize"
                    >recraft</span
                  >
                </div>
                <div class="progress-stacked mb-3" style="height: 8px">
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment one"
                    aria-valuenow="43.7"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 43.7%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment two"
                    aria-valuenow="41.8"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 41.8%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment three"
                    aria-valuenow="12.7"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 12.7%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Segment four"
                    aria-valuenow="1.8"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 1.8%"
                  >
                    <div class="progress-bar"></div>
                  </div>
                </div>
                <ul class="list-unstyled d-inline-flex flex-wrap">
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted me-1 text-uppercase">scss</span>
                    <span class="text-muted ms-md-1 me-md-1">43.7%</span>
                  </li>
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted me-1 text-uppercase">html</span>
                    <span class="text-muted ms-md-1 me-md-1">41.8%</span>
                  </li>
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted me-1 text-uppercase">ejs</span>
                    <span class="text-muted ms-md-1 me-md-1">12.7%</span>
                  </li>
                  <li class="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span class="text-muted ms-1 me-1">JavaScript</span>
                    <span class="text-muted ms-md-1 me-md-1">1.8%</span>
                  </li>
                </ul>
              </div>
              <div class="col">
                <div class="d-flex flex-column h-100">
                  <p>
                    GalaxyBoyz
                    是虛擬樂團，為它建立一個官方網站。這裡是所有樂迷和新朋友了解我們的首選平台，透過這個網站，你可以探索樂團最新動態、音樂作品、即將到來的巡演、官方商店，並加入我們的粉絲社群。
                  </p>
                  <p class="small mt-auto text-secondary">
                    目前完成第二版設計，第二版預計使用 Tailwind 開發。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
span {
  font-size: 12px;
}
.progress[aria-label="Segment one"] .progress-bar {
  background-color: #c6538c;
}

.progress[aria-label="Segment two"] .progress-bar {
  background-color: #e34c26;
}

.progress[aria-label="Segment three"] .progress-bar {
  background-color: #a91d50;
}

.progress[aria-label="Segment four"] .progress-bar {
  background-color: #f1e05b;
}

li:nth-of-type(1) .bi-circle-fill {
  fill: #c6538c;
}

li:nth-of-type(2) .bi-circle-fill {
  fill: #e34c26;
}

li:nth-of-type(3) .bi-circle-fill {
  fill: #a91d50;
}

li:nth-of-type(4) .bi-circle-fill {
  fill: #f1e05b;
}
.modal {
  backdrop-filter: blur(20px);
}
.carousel-item {
  height: 500px;
}
</style>
