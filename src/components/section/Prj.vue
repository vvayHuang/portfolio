<script setup>
import Modal from "../Modal.vue";
import PrjItem from "./PrjItem.vue";
import IconArrow from "../icons/IconArrow90degDown.vue";
import IconFigma from "../icons/IconFigma.vue";
import IconGithub from "../icons/IconGithub.vue";
</script>

<template>
  <section id="PRJ">
    <div class="container">
      <PrjItem>
        <template #heading>我的作品集</template>
        <template #icon>
          <IconArrow />
        </template>
      </PrjItem>
      <ul class="list-unstyled">
        <li class="py-md-2 py-4 border-bottom position-relative">
          <div class="row row-cols-md-3 align-items-center">
            <div class="col-lg-6 col">
              <a
                class="btn p-0 text-start w-100 border-0 stretched-link"
                data-bs-toggle="modal"
                data-bs-target="#GbModal"
              >
                <span class="me-3">2023</span>
                <h3 class="fs-6 d-inline">GalaxyBoyz v1.0</h3>
              </a>
            </div>
            <div class="col-lg-3 col-auto">
              <ul class="list-unstyled d-flex position-relative">
                <li class="z-2">
                  <a
                    href="https://www.figma.com/design/RX78vjYDu0Wtd3591akmX9/GalaxyBoyz?m=auto&t=1tlrYtTjsZWEFB0q-6"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-capitalize me-5"
                    ><IconFigma style="width: 24px;height: 24px;"/></a
                  >
                </li>
                <li class="z-2">
                  <a
                    href="https://github.com/vvayHuang/galaxyboyz"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-capitalize"
                    ><IconGithub style="width: 24px;height: 24px;"/></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none d-md-flex position-relative">
                <div class="col-auto z-2">
                  <a
                    href="https://vvayhuang.github.io/galaxyboyz/"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center py-2 "
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="py-md-2 py-4 border-bottom position-relative">
          <div class="row row-cols-md-3 align-items-center">
            <div class="col-lg-6 col">
              <a
                class="btn p-0 text-start w-100 border-0 stretched-link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span class="me-3">2022</span>
                <h3 class="fs-6 d-inline">生活唱片 Life Record</h3>
              </a>
            </div>
            <div class="col-lg-3 col-auto">
              <ul class="list-unstyled d-flex position-relative">
                <li class="z-2">
                  <a
                    href="https://github.com/vvayHuang/lifeRecord"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-capitalize"
                    ><IconGithub style="width: 24px;height: 24px;"/></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none d-md-flex position-relative">
                <div class="col-auto z-2">
                  <a
                    href="https://vvayhuang.github.io/lifeRecord/"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center py-2"
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Modal />
    </div>
  </section>
</template>

<style scoped>
#PRJ {
  margin-bottom: 160px;
}

ul>li:hover {
  span{
    /* transform: scale(1.4); */
    transition: .45s cubic-bezier(.34,1.56,.48,1.19);
    .bi-arrow-up-right{
      transition:  .45s cubic-bezier(.34,1.56,.48,1.19);
      transform: rotate(45deg);
  }
  }
}
</style>
