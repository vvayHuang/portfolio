<script setup>
import { useI18n } from 'vue-i18n'
import projectsModal from '@/data/Projects.js'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import Modal from '@/components/modules/Modal.vue'
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t, locale } = useI18n()

const sectionTitle = {
  en: 'Projects',
  zh: '精選專案'
}

onMounted(() => {
  nextTick(() => {
    // Fade in animation for project cards
    const cards = document.querySelectorAll('.project-anim-target')

    cards.forEach(card => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%', // start animation when top of card hits 80% viewport height
            toggleActions: 'play none none reverse' // play on enter, reverse on leave back up
          }
        }
      )
    })
  })
})
</script>

<template>
  <section id="section-projects" class="bg-dark overflow-hidden">
    <div class="container-fluid p-0">
      <SectionTitle text-color-class="text-light text-center" class="py-5">
        <template #heading>{{ sectionTitle[locale] }}</template>
      </SectionTitle>

      <!-- List container -->
      <div class="d-flex flex-column gap-5 pb-5">
        <!-- Main Projects (Vertical Stack) -->
        <div v-for="(item, index) in projectsModal" :key="item.id"
          class="project-card project-anim-target w-100 d-flex flex-column justify-content-between pt-5 mb-5">
          <!-- Text Content -->
          <div class="container project-content flex-shrink-0 mb-5 z-2">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <h2 class="project-title text-white fw-bold mb-3 display-5 display-md-4 text-center">{{
                  item.title[locale] }}
                </h2>
                <p class="project-subtitle text-light fs-5 fs-md-4 mb-4 text-center">{{ item.summary[locale] }}</p>

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

          <!-- Hero Image Container (Natural Height) -->
          <div class="w-100 position-relative mt-auto">
            <div class="container d-flex justify-content-center">
              <div class="project-image-wrapper w-100" style="max-width: 1200px;">
                <img v-if="item.images && item.images.length > 0" :src="item.images[0].src" :alt="item.images[0].alt"
                  class="img-fluid rounded-top-4 shadow-lg w-100" style="height: auto;" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal />
  </section>
</template>
