<script setup>
import projectsModal from '~/data/Projects.js'

const { t, locale } = useI18n()

onMounted(async () => {
  // 動態引入 gsap 確保 SSR 安全
  const { default: gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  
  gsap.registerPlugin(ScrollTrigger)

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
  <section id="section-projects" class="overflow-hidden">
    <div class="container">
      <SectionTitle text-color-class="text-center" class="py-5 project-anim-target">
        <template #heading>{{ $t('PRJ') }}</template>
      </SectionTitle>

      <!-- List container -->
      <div class="d-flex flex-column gap-6 pb-5">
        <!-- Main Projects (Responsive Row: Mobile Stack / Desktop Left-Right) -->
        <div v-for="(item, index) in projectsModal" :key="item.id"
          class="project-card project-anim-target row align-items-center flex-column justify-content-center flex-lg-row pt-5 mb-5 g-5">
          <!-- Text Content (Col-5) -->
          <div class="col-lg-4 z-2 order-1 order-lg-1">
            <div class="project-content text-center text-lg-start position-relative">
              <h2 class="project-title mb-3 display-5 display-md-4">{{ item.title[locale] }}</h2>
              <p class="project-subtitle fs-5 fs-md-4 mb-4">{{ item.summary[locale] }}</p>

              <div class="d-flex justify-content-center justify-content-lg-start gap-3">
                <a v-if="item.module" href="#" class="btn btn-primary btn-magnetic rounded-pill px-4 py-2"
                  @click.prevent data-bs-toggle="modal" :data-bs-target="`#${item.module}`">
                  {{ locale === 'zh' ? '進一步了解' : 'Learn More' }}
                </a>
                <a v-if="item.websiteURL" :href="item.websiteURL" target="_blank"
                  class="btn btn-outline-primary btn-magnetic rounded-pill px-4 py-2">
                  Website
                </a>
              </div>
            </div>
          </div>
          <!-- Hero Image Container (Col-7) -->
          <div class="col-lg-7 order-2 order-lg-2">
            <div class="position-relative w-100">
              <div class="project-image-wrapper w-100 project-image-hover ms-lg-auto" style="max-width: 1200px;">
                <NuxtImg v-if="item.images && item.images.length > 0" :src="item.images[0].src" :alt="item.images[0].alt"
                  class="img-fluid rounded-4 shadow-lg w-100 project-image-parallax" style="height: auto;"
                  loading="lazy" format="webp" quality="80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal />
  </section>
</template>