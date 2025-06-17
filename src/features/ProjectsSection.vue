<script setup>
import IconArrow from '@/icons/IconArrow90degDown.vue'
import IconFigma from '@/icons/IconFigma.vue'
import IconGithub from '@/icons/IconGithub.vue'
import IconRight from '@/icons/IconRight.vue'
import SectionText from '@//components/common/SectionTitle.vue'
import Modal from '@/components/Modal.vue'
import projects from '@/data/projectsList.js'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
  <section id="PRJ">
    <div class="container">
      <SectionText>
        <template #heading>{{ t('my project') }}</template>
        <template #icon>
          <IconArrow />
        </template>
      </SectionText>
      <ul class="list-unstyled">
        <li
          class="py-md-2 py-4 border-bottom position-relative"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="row row-cols-md-3 align-items-center">
            <div class="col-lg-6 col">
              <a
                class="btn p-0 text-start w-100 border-0 stretched-link"
                data-bs-toggle="modal"
                :data-bs-target="project.module"
              >
                <span class="me-3">{{ project.year }}</span>
                <h3 class="fs-6 d-inline">{{ project.name[$i18n.locale] }}</h3>
              </a>
            </div>
            <div class="col-lg-3 col-auto">
              <ul class="list-unstyled d-flex position-relative">
                <li class="z-2">
                  <a
                    v-if="project.figma"
                    :href="project.figma"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-capitalize me-5"
                    ><IconFigma
                  /></a>
                </li>
                <li class="z-2">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-capitalize"
                    ><IconGithub
                  /></a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <div class="row justify-content-end d-none d-md-flex position-relative">
                <div class="col-auto z-2">
                  <a
                    :href="project.webkitURL"
                    target="_blank"
                    class="link-dark link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex align-items-center py-2"
                    ><span>{{ t('launch') }}</span>
                    <span class="text-bg-dark p-2 rounded-circle ms-3 lh-1 circle-icon">
                      <IconRight />
                    </span>
                  </a>
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
#PRJ {
  margin-bottom: 160px;
}

ul > li {
  .bi-arrow-up-right,
  .circle-icon {
    transition: 0.45s cubic-bezier(0.34, 1.56, 0.48, 1.19);
  }
}

ul > li:hover {
  .bi-arrow-up-right {
    transform: rotate(45deg);
  }
  .circle-icon {
    background-color: var(--bs-primary) !important;
  }
}
</style>
