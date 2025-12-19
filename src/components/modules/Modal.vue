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
  <div v-for="project in projects" :key="project.id" class="modal fade" :id="project.module" aria-hidden="true"
    :aria-labelledby="`${project.module}Label`" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0">
        <!-- Header: Transparent Overlay, Hidden on mobile (d-none d-sm-flex), Wider gap (gap-5) -->
        <div class="modal-header border-0 justify-content-end align-items-center d-none d-sm-flex p-4">
          <!-- Social Icons moved to Header Right -->
          <div class="d-flex gap-5">
            <a v-if="project.figma" :href="project.figma" class="link-light" target="_blank">
              <IconFigma />
            </a>
            <a v-if="project.github" :href="project.github" class="link-light" target="_blank">
              <IconGithub />
            </a>
            <a v-if="project.websiteURL" :href="project.websiteURL" class="link-light" target="_blank">
              <IconLink45deg />
            </a>
          </div>
        </div>
        <div class="modal-body position-relative">

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
              <div class="d-flex flex-column h-100 gap-4 mb-5 pb-5">
                <!-- Added mb-5 pb-5 to ensure content isn't covered by fixed bottom elements -->
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

    <!-- Fixed Elements Layer (Outside modal-dialog content flow but visually on top) -->
    <!-- Note: Bootstrap modal backdrop handling might require these to be inside or carefully handled. 
         Putting them inside modal-dialog but fixed works relative to viewport if transform is removed. -->

    <!-- Close Button (Bottom Left) -->
    <IconButton class="modal-close-btn action-btn" data-bs-dismiss="modal" aria-label="Close">
      <i class="bi bi-x-lg fs-5"></i>
    </IconButton>

    <!-- Project Navigation (Bottom Center) - Hidden on mobile -->
    <div class="project-nav-container d-none d-sm-block">
      <div class="d-flex gap-2 justify-content-center">
        <button v-for="project in projects" :key="project.id" :data-bs-target="`#${project.module}`"
          data-bs-toggle="modal" type="button" class="btn btn-secondary">
          {{ project.title[$i18n.locale] }}
        </button>
      </div>
    </div>

    <!-- Contact Button (Bottom Right) -->
    <IconButton tag="a" href="mailto:jyunwayhuang@gmail.com" class="action-btn modal-contact-btn"
      data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('contact_me')">
      <IconEmail />
    </IconButton>

  </div>
</template>
