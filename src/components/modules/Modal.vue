<script setup>
import IconGithub from '@/icons/IconGithub.vue'
import IconLink45deg from '@/icons/IconLink45deg.vue'
import IconFigma from '@/icons/IconFigma.vue'
import IconEmail from '@/icons/IconEmail.vue'
import IconCircleFill from '@/icons/IconCircleFill.vue'
import projects from '@/data/Projects'
import { onMounted } from 'vue'
import * as bootstrap from 'bootstrap'
import IconButton from '@/components/ui/IconButton.vue'

onMounted(() => {
  // Initialize tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  )
})
</script>
<template>
  <div v-for="project in projects" :key="project.id" class="modal fade modal-backdrop-filters" :id="project.module"
    aria-hidden="true" :aria-labelledby="`${project.module}Label`" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0">
        <div class="modal-header border-0 justify-content-center flex-column align-items-start">
          <div class="d-flex justify-content-between align-items-center w-100 flex-column-reverse flex-md-row gap-4">
            <div class="d-flex gap-2">
              <button v-for="project in projects" :key="project.id" :data-bs-target="`#${project.module}`"
                data-bs-toggle="modal" type="button" class="btn btn-dark">
                {{ project.title[$i18n.locale] }}
              </button>
            </div>
            <!-- Close Button using IconButton -->
            <IconButton class="modal-close-btn action-btn" data-bs-dismiss="modal" aria-label="Close">
              <i class="bi bi-x-lg fs-5"></i>
            </IconButton>
          </div>
        </div>
        <div class="modal-body">
          <!-- Contact Me Button using IconButton -->
          <IconButton class="btn-cta action-btn" data-bs-toggle="tooltip" data-bs-placement="top"
            :title="$t('contact_me')" @click="() => { window.location.href = 'mailto:jyunwayhuang@gmail.com' }">
            <IconEmail />
          </IconButton>

          <div class="row row-cols-md-2 row-cols-1 g-lg-3 g-md-2 gy-2 mb-5 mt-3">
            <div v-for="(image, index) in project.images" :key="index" class="col">
              <img class="w-100 h-100" :src="image.src" :alt="image.alt" />
            </div>
          </div>
          <div class="flex-column flex-lg-row row">
            <div class="col col-lg-4">
              <h2 class="fs-6 mb-0">{{ project.type[$i18n.locale] }}</h2>
              <h1 class="modal-title mb-md-3" id="LifeRecordModalLabel">
                {{ project.title[$i18n.locale] }}
              </h1>

              <!-- Icon Links -->
              <div class="mb-3">
                <a v-if="project.figma" :href="project.figma" class="link-dark me-3" target="_blank">
                  <IconFigma />
                </a>
                <a v-if="project.github" :href="project.github" class="link-dark me-3" target="_blank">
                  <IconGithub />
                </a>
                <a v-if="project.websiteURL" :href="project.websiteURL" class="link-dark" target="_blank">
                  <IconLink45deg />
                </a>
              </div>

              <!-- Language List -->
              <ul class="list-unstyled d-inline-flex flex-wrap">
                <li v-for="(language, index) in project.language" :key="index" class="d-flex align-items-center me-3">
                  <IconCircleFill class="me-3" />
                  <small class="text-muted me-1 text-uppercase">{{ language.label }}</small>
                  <small class="text-muted me-1 text-uppercase">{{ language.value + '%' }}</small>
                </li>
              </ul>

              <!-- Tags -->
              <div class="mb-3">
                <span v-for="(tag, index) in project.tag" :key="index"
                  class="badge rounded-pill bg-dark text-white  me-2 text-capitalize">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Text Content -->
            <div class="col">
              <div class="d-flex flex-column h-100 gap-4">
                <h3>
                  {{ project.projectOverview[$i18n.locale] }}
                </h3>
                <p>{{ project.description[$i18n.locale] }}</p>
                <h3>
                  {{ project.technologiesUsed[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.technologiesUsedItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3>
                  {{ project.responsibilities[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.responsibilitiesItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3>
                  {{ project.keyFeatures[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.keyFeaturesItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3>
                  {{ project.challengesOutcomes[$i18n.locale] }}
                </h3>
                <ul>
                  <li v-for="(item, index) in project.challengesOutcomesItem" :key="index">
                    <p>{{ item[$i18n.locale] }}</p>
                  </li>
                </ul>
                <h3>
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

<style scoped lang="scss">
.modal {
  padding-right: 0 !important;

  // Slide up animation
  &.fade .modal-dialog {
    transform: translate(0, 100%);
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1); // Smooth transition
  }

  &.show .modal-dialog {
    transform: none;
  }
}

.modal-dialog {
  max-width: 100%;
  margin: 0;
  margin-top: 60px;
  height: calc(100% - 60px);
  display: flex;
  align-items: flex-end;
}

.modal-content {
  height: 100%;
  border-radius: 20px 20px 0 0;
  border: none;
  background-color: var(--wh-body-bg);
  color: var(--wh-body-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  flex-shrink: 0;
}

.modal-body {
  overflow-y: auto;
}

// Unified Action Buttons (Close & Contact)
.action-btn {
  width: 48px;
  height: 48px;
  border-radius: 12px; // Slightly soft squares
  background-color: var(--wh-secondary-bg); // Use theme secondary bg
  color: var(--wh-body-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background-color: var(--wh-tertiary-bg);
    transform: scale(1.05);
  }

  // Specific tweaks if needed
  &.modal-close-btn {
    position: fixed;
    bottom: 24px;
    left: 24px;
    z-index: 1060;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
