<script setup>
import PrjItem from './PrjItem.vue'
import IconArrow from './icons/IconArrow90degDown.vue';
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
      <ul class="list-unstyled mb-0">
        <!-- <li class="py-2 border-bottom">
          <div class="row row-cols-2 row-cols-md-3 align-items-center ">
            <div class="col-lg-6 col">
              <div class="row">
                <div class="col-auto"><p class="mb-0">2024</p></div>
                <div class="col-auto"><p class="mb-0">portfolio</p></div>
              </div>
            </div>
            <div class="col-lg-3 col">
              <div class="row justify-content-end justify-content-md-start ">
                <div class="col-auto">
                  <a
                    href="https://www.figma.com/design/33ouQ7VysM6A2Falg7FTbO/portfolio1?node-id=180-542&t=0kGKv6FK49qviqKa-1"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-uppercase"
                    >(figma)</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none  d-md-flex ">
                <div class="col-auto">
                  <a
                    href="#"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex  align-items-center py-2"
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 ">
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
        </li> -->
        <!-- <li class="py-2 border-bottom">
          <div class="row row-cols-2 row-cols-md-3 align-items-center ">
            <div class="col-lg-6 col">
              <div class="row">
                <div class="col-auto"><p class="mb-0">2024</p></div>
                <div class="col-auto"><p class="mb-0">buddy house</p></div>
              </div>
            </div>
            <div class="col-lg-3 col">
              <div class="row justify-content-end justify-content-md-start ">
                <div class="col-auto">
                  <a
                    href="https://www.figma.com/design/lgKC4901ViopAmKbNRokKc/buddy-house?node-id=185-634&t=3vUBzEIfKL4hiXEi-1"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-uppercase"
                    >(figma)</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none  d-md-flex ">
                <div class="col-auto">
                  <a
                    href="#"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex  align-items-center py-2"
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 ">
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
        </li> -->
        <li class="py-2 border-bottom">
          <div class="row row-cols-2 row-cols-md-3 align-items-center ">
            <div class="col-lg-6 col">
              <div class="row">
                <div class="col-auto"><p class="mb-0">2023</p></div>
                <div class="col-auto"><p class="mb-0">GalaxyBoyz</p></div>
              </div>
            </div>
            <div class="col-lg-3 col">
              <div class="row justify-content-end justify-content-md-start ">
                <div class="col-auto">
                  <a
                    href="https://github.com/vvayHuang/galaxyboyz"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-uppercase"
                    >(github)</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none  d-md-flex ">
                <div class="col-auto">
                  <a
                    href="https://vvayhuang.github.io/galaxyboyz/"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex  align-items-center py-2"
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 ">
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
        <li class="py-2 border-bottom">
          <div class="row row-cols-2 row-cols-md-3 align-items-center ">
            <div class="col-lg-6 col">
              <div class="row">
                <div class="col-auto"><p class="mb-0">2022</p></div>
                <div class="col-auto"><p class="mb-0">Life Record</p></div>
              </div>
            </div>
            <div class="col-lg-3 col">
              <div class="row justify-content-end justify-content-md-start ">
                <div class="col-auto">
                  <a
                    href="https://github.com/vvayHuang/lifeRecord"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-uppercase"
                    >(github)</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none  d-md-flex ">
                <div class="col-auto">
                  <a
                    href="https://vvayhuang.github.io/lifeRecord/"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex  align-items-center py-2"
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 ">
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
        <li class="py-2 border-bottom">
          <div class="row row-cols-2 row-cols-md-3 align-items-center ">
            <div class="col-lg-6 col">
              <div class="row">
                <div class="col-auto"><p class="mb-0">2022</p></div>
                <div class="col-auto"><p class="mb-0">blog</p></div>
              </div>
            </div>
            <div class="col-lg-3 col">
              <div class="row justify-content-end justify-content-md-start ">
                <div class="col-auto">
                  <a
                    href="https://vvayhuang.github.io/blog/"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-uppercase"
                    >(github)</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none  d-md-flex ">
                <div class="col-auto">
                  <a
                    href="https://vvayhuang.github.io/blog/"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex  align-items-center py-2"
                    ><span>Launch</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 ">
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
    </div>
  </section>
</template>

<style scoped>
#PRJ{
  margin-bottom: 160px;
}
</style>
