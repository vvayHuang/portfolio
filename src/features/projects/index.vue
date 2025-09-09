<script setup>
import IconRight from '@/icons/IconRight.vue'
import SectionText from '@/components/common/SectionTitle.vue'
import Modal from '@/components/Modal.vue'
import projectsModal from '../../data/Projects'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const sectionTitle = {
  en: 'My Projects',
  zh: '我的作品集',
}
</script>

<template>
  <section id="section-projects">
    <div class="container-fluid">
      <SectionText>
        <template #heading>{{ sectionTitle[locale] }}</template>
      </SectionText>
      <ul class="list-unstyled d-flex flex-column">
        <li
          class="project-item border-bottom py-4"
          v-for="item in projectsModal"
          :key="item.id"
          :style="item.images && item.images.length > 0 && { '--bg-image': `url(${item.images[0].src})` }"
        >
          <div class="project-item-content row row-cols-md-3 row-cols-2 align-items-center">
            <div class="col-lg-6 col">
              <span class="me-3 fs-md-4 fs-6">{{ item.year }}</span>
              <h3 class="d-inline fs-md-4 fs-6">{{ item.title[locale] }}</h3>
            </div>
            <div class="col-lg-3 d-none d-md-block">
              <ul class="list-unstyled d-flex position-relative">
                <li>
                  <a
                    v-if="item.figma"
                    :href="item.figma"
                    target="_blank"
                    class="projects-entry-aw-link fs-md-4 fs-6 me-5"
                    >figma</a
                  >
                </li>
                <li>
                  <a
                    v-if="item.github"
                    :href="item.github"
                    target="_blank"
                    class="projects-entry-aw-link fs-md-4 fs-6"
                    >github</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <div class="projects-entry-cta">
                <a
                  v-if="item.module"
                  target="_blank"
                  :data-bs-target="`#${item.module}`"
                  data-bs-toggle="modal"
                  class="projects-entry-aw-link fs-6 fs-md-4"
                  >{{ t('launch') }}
                  <span class="p-2 rounded-circle ms-3 lh-1 projects-circle-icon"><IconRight /></span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Modal />
  </section>
</template>
