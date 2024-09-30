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
          <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 gy-3">
              <div class="col">
                <img class=" img-fluid" src="../assets/img/gbv1-preview-1.png" alt="">
              </div>
              <div class="col">
                <img class=" w-100 h-100" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQwemFrcDZhMTk3YzdsNXFmYnM4djR1OXc2ZDZuajgxYnpxdXlpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BBNtPGWLuHM6wQuBsj/giphy.gif" alt="">
              </div>
              <div class="col">
                <img class=" w-100 h-100" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3FhbXoyMWF0dmZ0emtuNGsweGNiM2I1bTFtZGM0a3U3dThvZDZ5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WP49WTehm64Lc4mHDc/giphy.gif" alt="">
              </div>
              <div class="col">
                <img class=" w-100 h-100" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWM2dmZieWNnMG83eDR2eHY1NnBwZnA3YnlueWE1MjJ1YWN0eGp5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8RA4cP6wDLZybQNgdW/giphy.gif" alt="">
              </div>
             
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white position-absolute"
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
                <div class="mb-md-3">
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
                    href="https://vvayhuang.github.io/galaxyboyz/"
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
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum modi cupiditate temporibus doloremque pariatur
                  asperiores quisquam, illo ex! Ratione, accusamus! Rem, quae
                  cum? In, temporibus odit nulla iusto nesciunt possimus?
                </p>
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
.btn-close {
  top: 4%;
  left: 1%;
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
</style>
