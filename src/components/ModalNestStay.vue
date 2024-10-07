<script setup>
import IconGithub from "./icons/IconGithub.vue";
import IconFigma from "./icons/IconFigma.vue";
import IconLink45deg from "./icons/IconLink45deg.vue";
</script>
<template>
  <div
    class="modal fade"
    id="NestStayModal"
    tabindex="-1"
    aria-labelledby="NestStayModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content overflow-hidden bg-transparent border-0">
        <div class="modal-header border-0 justify-content-center">
          <div id="lifeRecordCarousel" class="carousel slide w-100">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container d-flex flex-column justify-content-center h-100">
                  <div class="row row-cols-lg-2 row-cols-1 g-lg-3 g-md-2 gy-2">
                    
                  </div>
                </div>
                <div class="carousel-caption d-none d-lg-block">
                  <h5>巢居 Nest Stay</h5>
                  <p>
                    自學figma，自行切版的第一個版本
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#lifeRecordCarousel"
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
              data-bs-target="#lifeRecordCarousel"
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
                <h2 class="text-secondary fs-5">旅遊訂房app</h2>
                <h1 class="modal-title mb-md-3" id="NestStayModalLabel">
                  巢居 Nest Stay
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
                 <div class=" mb-3">
                    <h3 class=" fs-6 text-secondary">動機</h3>
                    <p>這是參加線上實戰營的作品，想知道自己對於 figma 的掌握程度及自己不足的地方，同時認識相關領域的朋友</p>
                    <p>
                      主題是旅遊訂房app，希望可以幫助使用者快速找出演唱會、音樂祭等活動附近可以住宿的地方，並且透過併團的方式節省住宿費用，甚至可以認識有相同喜好的朋友
                    </p>
                 </div>
                  <div class=" mb-3">
                    <h3 class=" fs-6 text-secondary">過程中遇到的困難</h3>
                    <ul>
                      <li>在彼此都不認識的情況下，要怎麼溝通及團隊協作</li>
                      <li>彼此時間分配不一的情況下，如何讓事情繼續進行</li>
                      <li>意見不同時要如何達成共識</li>
                    </ul>
                  </div>
                  <div class=" mb-3">
                    <h3 class=" fs-6 text-secondary">如何解決</h3>
                    <ul>
                      <li>多花點時間了解對方個性、做事方式等，多花點時間溝通，了解各個成員的強項及弱項</li>
                      <li>盡可能擠出時間讓團隊工作進度持續進行，即使發生成員未回覆的狀況，事情還是要持續推</li>
                      <li>發生意見相佐或衝突時，盡可能溝通並且做出實際行動說服成員</li>
                    </ul>
                  </div>
                  <div class="mb-3">
                    <h3 class=" fs-6 text-secondary">心得及觀察</h3>
                    <ul>
                      <li>每個設計背後都有它的用意及背後的商業邏輯，並非只是好看而已</li>
                      <li>設計必續不停的反覆驗證，需要給其他人使用，避免自己陷入思考盲區</li>
                      <li>做出來未必是大家都滿意的成果，心態上調適讓自己能夠不要太執著於某個點上，整體團運行擺在第一</li>
                    </ul>
                    
                  </div>
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
