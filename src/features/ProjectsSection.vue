<script setup>
import IconFigma from '@/icons/IconFigma.vue'
import IconGithub from '@/icons/IconGithub.vue'
import IconRight from '@/icons/IconRight.vue'
import SectionText from '@//components/common/SectionTitle.vue'
import Modal from '@/components/Modal.vue'
import ProjectsList from '@/data/ProjectsList.js'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const sectionText = {
  en: 'My Projects',
  zh: '我的作品集',
}
</script>

<template>
  <section id="section-projects">
    <div class="container">
      <SectionText>
        <template #heading>{{ sectionText[locale] }}</template>
      </SectionText>
      <ul class="list-unstyled">
        <li
          class="py-md-4 py-4 border-bottom position-relative"
          v-for="project in ProjectsList"
          :key="project.id"
        >
          <div class="row row-cols-md-3 align-items-center">
            <div class="col-lg-6 col">
              <a
                class="btn p-0 text-start w-100 border-0 stretched-link"
                data-bs-toggle="modal"
                :data-bs-target="project.projectModule"
              >
                <span class="me-3 fs-4">{{ project.year }}</span>
                <h3 class="d-inline fs-4">{{ project.name[$i18n.locale] }}</h3>
              </a>
            </div>
            <div class="col-lg-3 col-auto">
              <ul class="list-unstyled d-flex position-relative">
                <li class="z-2">
                  <a
                    v-if="project.figma"
                    :href="project.figma"
                    target="_blank"
                    class="projects-entry-aw-link me-5"
                    >figma</a
                  >
                </li>
                <li class="z-2">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    class="projects-entry-aw-link"
                    >github</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none d-md-flex position-relative">
                <div class="col-auto z-2">
                  <div class="projects-entry-cta">
                    <a
                      :href="project.demoURL"
                      target="_blank"
                      class="projects-entry-aw-link d-flex align-items-center py-2"
                      ><span>{{ t('launch') }}</span>
                      <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 circle-icon"
                        ><IconRight
                      /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Modal />
    </div>
  </section>
</template>

<style scoped>
#section-projects {
  margin-bottom: 160px;
}
.projects-entry-aw-link {
  color: var(--bs-dark);
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-transform: capitalize;
}
.projects-entry-aw-link:hover {
  color: var(--bs-primary);
}
.projects-entry-aw-link:focus {
  color: var(--bs-primary);
  outline: none;
}

.projects-entry-cta .bi-arrow-up-right,
.projects-entry-cta .circle-icon {
  transition: 0.45s cubic-bezier(0.34, 1.56, 0.48, 1.19);
}

.projects-entry-cta:hover .bi-arrow-up-right {
  transform: rotate(45deg);
}
.projects-entry-cta:hover .circle-icon {
  background-color: var(--bs-primary) !important;
}

.circle-icon {
  width: 40px;  /* 確保寬度固定 */
  height: 40px; /* 高度要和寬度一致 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
