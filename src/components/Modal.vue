<script setup>
import IconGithub from '@/icons/IconGithub.vue'
import IconLink45deg from '@/icons/IconLink45deg.vue'
import IconFigma from '@/icons/IconFigma.vue'
import IconCircleFill from '@/icons/IconCircleFill.vue'
import projects from '../data/Projects'
</script>
<template>
  <div
    v-for="project in projects"
    :key="project.id"
    class="modal fade modal-backdrop-filters"
    :id="project.module"
    aria-hidden="true"
    :aria-labelledby="`${project.module}Label`"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0 justify-content-center flex-column align-items-start">
          <div
            class="d-flex justify-content-between align-items-center w-100 flex-column-reverse flex-md-row gap-4"
          >
            <div class="d-flex gap-2 d-md-block">
              <button
                v-for="project in projects"
                :key="project.id"
                :data-bs-target="`#${project.module}`"
                data-bs-toggle="modal"
                type="button"
                class="btn btn-dark text-bg-dark bg-gradient me-md-3"
              >
                {{ project.title[$i18n.locale] }}
              </button>
            </div>

            <button
              type="button"
              class="btn-close p-md-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="row row-cols-md-2 row-cols-1 g-lg-3 g-md-2 gy-2 mb-5">
            <div v-for="(image, index) in project.images" :key="index" class="col">
              <img class="w-100 h-100" :src="image.src" :alt="image.alt" />
            </div>
          </div>
          <div class="flex-column flex-lg-row row">
            <div class="col col-lg-4">
              <h2 class="text-secondary fs-6 mb-0">{{ project.type[$i18n.locale] }}</h2>
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
                  v-if="project.websiteURL"
                  :href="project.websiteURL"
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
                  <small class="text-muted me-1 text-uppercase">{{ language.label }}</small>
                  <small class="text-muted me-1 text-uppercase">{{ language.value + '%' }}</small>
                </li>
              </ul>

              <!-- Tags -->
              <div class="mb-3">
                <span
                  v-for="(tag, index) in project.tag"
                  :key="index"
                  class="badge rounded-pill text-bg-secondary me-2 text-capitalize"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Text Content -->
            <div class="col">
              <div class="d-flex flex-column h-100">
                <h3 class="mb-4 text-secondary">
                  {{ project.projectOverview[$i18n.locale] }}
                </h3>
                <p>{{ project.description[$i18n.locale] }}</p>
                <h3 class="mt-4 mb-4 text-secondary">
                  {{ project.technologiesUsed[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.technologiesUsedItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3 class="mt-4 mb-4 text-secondary">
                  {{ project.responsibilities[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.responsibilitiesItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3 class="mt-4 mb-4 text-secondary">
                  {{ project.keyFeatures[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.keyFeaturesItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3 class="mt-4 mb-4 text-secondary">
                  {{ project.challengesOutcomes[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.challengesOutcomesItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3 class="mt-4 mb-4 text-secondary">
                  {{ project.lessonsLearned[$i18n.locale] }}
                </h3>
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
</template>
<style scoped>
.modal-backdrop-filters {
  backdrop-filter: blur(20px);
}
li:nth-of-type(1) .bi-circle-fill {
  fill: var(--wh-gray-800);
}

li:nth-of-type(2) .bi-circle-fill {
  fill: var(--wh-gray-700);
}

li:nth-of-type(3) .bi-circle-fill {
  fill: var(--wh-gray-600);
}

li:nth-of-type(4) .bi-circle-fill {
  fill: var(--wh-gray-500);
}
</style>
