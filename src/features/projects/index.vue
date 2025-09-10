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
  <section id="section-projects">
    <div class="container-fluid">
      <SectionText>
        <template #heading>{{ sectionTitle[locale] }}</template>
      </SectionText>
    </div>
    <ul class="list-unstyled d-flex flex-column">
      <li
        class="project-item"
        v-for="item in projectsModal"
        :key="item.id"
        :style="item.images && item.images.length > 0 && { '--bg-image': `url(${item.images[0].src})` }"
      >
        <div class="project-item-content row row-cols-md-3 row-cols-2 align-items-center">
          <div class="col-lg-6 col">
            <span class="projects-text me-3">{{ item.year }}</span>
            <h3 class="projects-text">{{ item.title[locale] }}</h3>
          </div>
          <div class="col-lg-3 d-none d-md-block">
            <ul class="list-unstyled d-flex position-relative">
              <li>
                <a
                  v-if="item.figma"
                  :href="item.figma"
                  target="_blank"
                  class="projects-entry-aw-link me-5"
                  >figma</a
                >
              </li>
              <li>
                <a
                  v-if="item.github"
                  :href="item.github"
                  target="_blank"
                  class="projects-entry-aw-link"
                  >github</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <div class="projects-entry-cta">
              <IconButton
                v-if="item.module"
                :data-bs-target="`#${item.module}`"
                data-bs-toggle="modal"
                class="projects-entry-aw-link"
              >
                {{ t('launch') }}
                <span class="p-2 rounded-circle ms-3 lh-1 projects-circle-icon"
                  ><IconRight
                /></span>
              </IconButton>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <Modal />
  </section>
</template>
