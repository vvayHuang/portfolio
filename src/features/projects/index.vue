<script setup>
import IconRight from '@/icons/IconRight.vue'
import SectionText from '@/components/ui/SectionTitle.vue'
import Modal from '@/components/modules/Modal.vue'
import projectsModal from '../../data/Projects'
import { useI18n } from 'vue-i18n'
import IconButton from '@/components/ui/IconButton.vue'

const { t, locale } = useI18n()
const sectionTitle = {
  en: 'My Projects',
  zh: '我的作品集',
}
</script>

<template>
  <section id="section-projects" class="bg-dark overflow-hidden">
    <div class="container-fluid p-0">
      <SectionText text-color-class="text-light text-center" class="py-5">
        <template #heading>{{ sectionTitle[locale] }}</template>
      </SectionText>

      <!-- List container -->
      <!-- List container -->
      <div class="d-flex flex-column gap-5 pb-5">
        <!-- Main Projects (Vertical Stack) -->
        <div v-for="(item, index) in projectsModal.slice(0, projectsModal.length - 2)" :key="item.id"
          class="project-card w-100 d-flex flex-column justify-content-between pt-5 mb-5"
          style="height: 100vh; max-height: 1000px;">
          <!-- Text Content -->
          <div class="container project-content flex-shrink-0 mb-5 z-2">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <h2 class="project-title text-white fw-bold mb-3 display-4 text-center">{{ item.title[locale] }}</h2>
                <p class="project-subtitle text-secondary fs-4 mb-4 text-center">{{ item.summary[locale] }}</p>

                <div class="d-flex justify-content-center gap-3">
                  <a v-if="item.module" href="#" class="btn btn-primary rounded-pill px-4 py-2" @click.prevent
                    data-bs-toggle="modal" :data-bs-target="`#${item.module}`">
                    {{ locale === 'zh' ? '進一步了解' : 'Learn More' }}
                  </a>
                  <a v-if="item.websiteURL" :href="item.websiteURL" target="_blank"
                    class="btn btn-outline-light rounded-pill px-4 py-2">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Image Container (Top Center Aligned) -->
          <div class="w-100 flex-grow-1 position-relative overflow-hidden">
            <div class="container h-100 position-relative">
              <div class="position-absolute bottom-0 start-50 translate-middle-x project-image-wrapper"
                style="width: 100%; max-width: 1200px; height: 90%;">
                <img v-if="item.images && item.images.length > 0" :src="item.images[0].src" :alt="item.images[0].alt"
                  class="img-fluid rounded-top-4 shadow-lg w-100 h-100 object-fit-cover"
                  style="object-position: top center;" />
              </div>
            </div>
          </div>
        </div>

        <!-- Last 2 Projects (Side-by-Side Grid) -->
        <div class="container pb-5">
          <div class="row g-4">
            <div v-for="(item, index) in projectsModal.slice(projectsModal.length - 2)" :key="item.id" class="col-md-6">
              <div
                class="project-card h-100 d-flex flex-column justify-content-between pt-4 bg-dark bg-opacity-50 overflow-hidden">
                <!-- Text Content -->
                <div class="px-4 pt-3 pb-4 text-center flex-shrink-0">
                  <h3 class="text-white fw-bold mb-2">{{ item.title[locale] }}</h3>
                  <p class="text-secondary mb-3">{{ item.summary[locale] }}</p>
                  <div class="d-flex justify-content-center gap-2">
                    <a v-if="item.module" href="#" class="btn btn-sm btn-primary rounded-pill px-3" @click.prevent
                      data-bs-toggle="modal" :data-bs-target="`#${item.module}`">
                      {{ locale === 'zh' ? '進一步了解' : 'Learn More' }}
                    </a>
                    <a v-if="item.websiteURL" :href="item.websiteURL" target="_blank"
                      class="btn btn-sm btn-outline-light rounded-pill px-3">
                      Website
                    </a>
                  </div>
                </div>

                <!-- Grid Image -->
                <div class="flex-grow-1 position-relative overflow-hidden" style="min-height: 300px;">
                  <img v-if="item.images && item.images.length > 0" :src="item.images[0].src" :alt="item.images[0].alt"
                    class="w-100 h-100 object-fit-cover" style="object-position: top center;" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal />
  </section>
</template>
