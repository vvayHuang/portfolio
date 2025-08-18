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
                  <span class="p-2 rounded-circle ms-3 lh-1 circle-icon"><IconRight /></span>
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

<style scoped>
.projects-entry-cta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.projects-entry-aw-link {
  color: var(--wh-secondary);
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.projects-entry-aw-link:hover {
  color: var(--wh-dark);
}
.projects-entry-aw-link:focus {
  color: var(--wh-primary);
  outline: none;
}
.circle-icon {
  width: 40px; /* 確保寬度固定 */
  height: 40px; /* 高度要和寬度一致 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--wh-secondary);
  color: var(--wh-light);
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}
.projects-entry-aw-link .bi-arrow-up-right,
.projects-entry-aw-link .circle-icon {
  transition: 0.45s cubic-bezier(0.34, 1.56, 0.48, 1.19);
}

.projects-entry-aw-link:hover .bi-arrow-up-right {
  transform: rotate(45deg);
}
.projects-entry-aw-link:hover .circle-icon {
  background-color: var(--wh-dark);
}

.project-item {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.project-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;
}

.project-item:hover::before {
  opacity: 0.3;
}

.project-item-content {
  position: relative;
  z-index: 2;
  background-color: var(--wh-body);
  transition: background-color 0.3s ease-in-out;
}

.project-item:hover .project-item-content {
  background-color: transparent;
}
</style>
