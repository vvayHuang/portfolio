<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import IconGithub from '@/icons/IconGithub.vue'
import IconLink45deg from '@/icons/IconLink45deg.vue'
import IconFigma from '@/icons/IconFigma.vue'
import projectsModalData from '../data/Projects'
import IconCircleFill from '@/icons/IconCircleFill.vue'
const { t, locale } = useI18n()

// 預設選中第一個 tab
const activeTab = ref(projectsModalData[0].module)

// 切換tab
function changeTab(module) {
  activeTab.value = module
}
</script>
<template>
  <div
    v-for="project in projectsModalData"
    :key="project.id"
    class="modal fade"
    :id="`#${project.module}`"
    tabindex="-1"
    :aria-labelledby="project.module + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content overflow-hidden bg-transparent border-0">
        <button
          type="button"
          class="btn-close btn-close-white m-0 mb-4"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-link {
  border-radius: 24px;
}
.modal {
  backdrop-filter: blur(20px);
}

li:nth-of-type(1) .bi-circle-fill {
  fill: var(--bs-gray-800);
}

li:nth-of-type(2) .bi-circle-fill {
  fill: var(--bs-gray-700);
}

li:nth-of-type(3) .bi-circle-fill {
  fill: var(--bs-gray-600);
}

li:nth-of-type(4) .bi-circle-fill {
  fill: var(--bs-gray-500);
}
</style>
