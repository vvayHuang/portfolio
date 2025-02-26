<script setup>
import { ref } from "vue";
import IconGithub from "./icons/IconGithub.vue";
import IconLink45deg from "./icons/IconLink45deg.vue";
import IconFigma from "./icons/IconFigma.vue";
import projectsModalData from "../data/projectsModal";
import IconCircleFill from "./icons/IconCircleFill.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// 預設選中第一個 tab
const activeTab = ref(projectsModalData[0].module);

// 切換tab
function changeTab(module) {
  activeTab.value = module;
}
</script>
<template>
  <div
    class="modal fade"
    id="Modal"
    tabindex="-1"
    aria-labelledby="LifeRecordModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content overflow-hidden bg-transparent border-0">
        <button
          type="button"
          class="btn-close btn-close-white m-0 mb-4"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <!-- Nav Pills -->
        <ul class="bg-light mb-3 nav nav-pills p-2 rounded-5" id="pills-tab" role="tablist">
          <li
            v-for="(project, index) in projectsModalData"
            :key="index"
            class="nav-item"
            role="presentation"
          >
            <button
              class="nav-link text-bg-light bg-gradient"
              :class="{ active: activeTab === project.module, 'text-bg-dark': activeTab === project.module }"
              @click="changeTab(project.module)"
              :id="project.module"
              data-bs-toggle="pill"
              :data-bs-target="'#' + project.module"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
            {{ project.title[$i18n.locale] }}
            </button>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content" id="pills-tabContent">
          <div
            v-for="(project, index) in projectsModalData"
            :key="index"
            class="tab-pane fade"
            :class="{ 'show active': activeTab === project.module }"
            :id="project.module"
            role="tabpanel"
            :aria-labelledby="project.module"
            tabindex="0"
          >
            <div
              class="modal-header border-0 justify-content-center flex-column align-items-start"
            >
              <div class="container">
                <div class="row row-cols-md-2 row-cols-1 g-lg-3 g-md-2 gy-2">
                  <div
                    v-for="(image, index) in project.images"
                    :key="index"
                    class="col"
                  >
                    <img
                      class="w-100 h-100"
                      :src="image.src"
                      :alt="image.alt"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-body text-bg-light rounded-3">
              <div class="container">
                <div
                  class="flex-column flex-lg-row row"
                >
                  <div class="col col-lg-4">
                    <h2 class="text-secondary fs-6">{{ project.type[$i18n.locale] }}</h2>
                    <h1 class="modal-title mb-md-3" id="LifeRecordModalLabel">
                      {{ project.title[$i18n.locale] }}
                    </h1>

                    <!-- Icon Links -->
                    <div class="mb-3">
                      <a
                        v-if="project.figma"
                        :href="project.figma"
                        class="link-dark me-3"
                        target="_blank"
                      >
                        <IconFigma />
                      </a>
                      <a
                        v-if="project.github"
                        :href="project.github"
                        class="link-dark me-3"
                        target="_blank"
                      >
                        <IconGithub />
                      </a>
                      <a
                        v-if="project.webkitURL"
                        :href="project.webkitURL"
                        class="link-dark"
                        target="_blank"
                      >
                        <IconLink45deg />
                      </a>
                    </div>

                    <!-- Language List -->
                    <ul class="list-unstyled d-inline-flex flex-wrap">
                      <li
                        v-for="(language, index) in project.language"
                        :key="index"
                        class="d-flex align-items-center me-3"
                      >
                        <IconCircleFill class="me-3" />
                        <small class="text-muted me-1 text-uppercase">{{
                          language.label
                        }}</small>
                        <small class="text-muted me-1 text-uppercase">{{
                          language.value + "%"
                        }}</small>
                      </li>
                    </ul>

                    <!-- Tags -->
                    <div class="mb-3">
                      <span
                        v-for="(tag, index) in project.tag"
                        :key="index"
                        class="badge rounded-pill text-bg-dark me-2 text-capitalize"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>

                  <!-- Text Content -->
                  <div class="col">
                    <div class="d-flex flex-column h-100">
                      <h3 class=" mb-4">{{ project.projectOverview[$i18n.locale] }}</h3>
                      <p>{{ project.description[$i18n.locale] }}</p>
                      <h3 class=" mt-4 mb-4">{{  project.technologiesUsed[$i18n.locale] }}</h3>
                      <ul>
                        <li v-for="(item, index) in project.technologiesUsedItem" :key="index">
                          <p>{{ item[$i18n.locale] }}</p>
                        </li>
                      </ul>
                      <h3 class=" mt-4 mb-4">{{  project.responsibilities[$i18n.locale] }}</h3>
                      <ul>
                        <li v-for="(item, index) in project.responsibilitiesItem" :key="index">
                          <p>{{ item[$i18n.locale] }}</p>
                        </li>
                      </ul>
                      <h3 class=" mt-4 mb-4">{{  project.keyFeatures[$i18n.locale] }}</h3>
                      <ul>
                        <li v-for="(item, index) in project.keyFeaturesItem" :key="index">
                          <p>{{ item[$i18n.locale] }}</p>
                        </li>
                      </ul>
                      <h3 class=" mt-4 mb-4">{{  project.challengesOutcomes[$i18n.locale] }}</h3>
                      <ul>
                        <li v-for="(item, index) in project.challengesOutcomesItem" :key="index">
                          <p>{{ item[$i18n.locale] }}</p>
                        </li>
                      </ul>
                      <h3 class=" mt-4 mb-4">{{  project.lessonsLearned[$i18n.locale] }}</h3>
                      <ul>
                        <li v-for="(item, index) in project.lessonsLearnedItem" :key="index">
                          <p>{{ item[$i18n.locale] }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Tab Content -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-link{
  border-radius: 24px;
}
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
