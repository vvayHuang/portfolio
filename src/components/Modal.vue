<script setup>
import IconGithub from "./icons/IconGithub.vue";
import IconLink45deg from "./icons/IconLink45deg.vue";
import IconFigma from "./icons/IconFigma.vue";
import projectsModalData from "../data/projectsModal";
import IconCircleFill from "./icons/IconCircleFill.vue";
</script>
<template>
  <div v-for="(projectsModal, index) in projectsModalData" :key="index">
    <div
      class="modal fade"
      :id="projectsModal.id"
      tabindex="-1"
      aria-labelledby="LifeRecordModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content overflow-hidden bg-transparent border-0">
          <div class="modal-header border-0 justify-content-center flex-column align-items-start">
            <button
              type="button"
              class="btn-close btn-close-white m-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="container">
              <div class="row row-cols-md-2 row-cols-1 g-lg-3 g-md-2 gy-2">
                <div v-for="(images, index) in projectsModal.images"
                :key="index" class="col">
                  <img
                    class="w-100 h-100"
                    :src="images.src"
                    :alt="images.alt"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body text-bg-light rounded-3">
            <div class="container">
              <div class="flex-column flex-md-row justify-content-between row">
                <div class="col">
                  <h2 class="text-secondary fs-6">{{ projectsModal.type }}</h2>
                  <h1 class="modal-title mb-md-3" id="LifeRecordModalLabel">
                    {{ projectsModal.title }}
                  </h1>
                  <!-- icon link -->
                  <div class="mb-3">
                    <a
                      v-if="projectsModal.figma"
                      :href="projectsModal.figma"
                      class="link-dark link-opacity-75 link-opacity-100-hover me-3 d-inline"
                      target="_blank"
                      ><IconFigma
                    /></a>
                    <a
                      v-if="projectsModal.github"
                      :href="projectsModal.github"
                      class="link-dark link-opacity-75 link-opacity-100-hover me-3 d-inline"
                      target="_blank"
                      ><IconGithub
                    /></a>
                    <a
                      v-if="projectsModal.webkitURL"
                      :href="projectsModal.webkitURL"
                      class="link-dark link-opacity-75 link-opacity-100-hover me-3"
                      target="_blank"
                      ><IconLink45deg
                    /></a>
                  </div>
                  <ul class="list-unstyled d-inline-flex flex-wrap">
                    <li
                      v-for="(language, index) in projectsModal.language"
                      :key="index"
                      class="d-flex align-items-center me-3"
                    >
                      <IconCircleFill class="me-3"/>
                      <small class="text-muted me-1 text-uppercase">{{
                        language.label
                      }}</small>
                      <small class="text-muted me-1 text-uppercase">{{
                        language.value + "%"
                      }}</small>
                    </li>
                  </ul>
                  <!-- tag -->
                  <div class="mb-3">
                    <span
                      v-for="(tag, index) in projectsModal.tag"
                      :key="index"
                      class="badge rounded-pill text-bg-dark me-2 text-capitalize"
                      >{{ tag }}</span
                    >
                  </div>
                </div>
                <div class="col">
                  <div class="d-flex flex-column h-100">
                    <p>
                      {{ projectsModal.textContent }}
                    </p>
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
.modal {
  backdrop-filter: blur(20px);
}

li:nth-of-type(1) .bi-circle-fill {
  fill: var(--bs-gray-800);
}

li:nth-of-type(2) .bi-circle-fill {
  fill: var(--bs-gray-700);
}

li:nth-of-type(3) .bi-circle-fill {
  fill: var(--bs-gray-600);
}

li:nth-of-type(4) .bi-circle-fill {
  fill: var(--bs-gray-500);
}
</style>
