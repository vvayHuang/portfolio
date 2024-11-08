<script setup>
import IconCircleFill from "./icons/IconCircleFill.vue"
import projectsModalData from "../data/projectsModal";
</script>
<template>
  <div v-for="(project, projectIndex) in projectsModalData" :key="projectIndex">
    <div class="progress-stacked mb-3" style="height: 8px">
      <div
        v-for="(segment, index) in project.segments"
        :key="index"
        class="progress"
        role="progressbar"
        :aria-label="segment.label"
        :aria-valuenow="segment.value"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: segment.value + '%' }"
      >
        <div class="progress-bar"></div>
      </div>
    </div>
  </div>
  <ul class="list-unstyled d-inline-flex flex-wrap">
    <li class="me-3">
     <IconCircleFill/>
      <span class="text-muted me-1 text-uppercase">html</span>
      <span class="text-muted ms-md-1 me-md-1">54.7%</span>
    </li>
    <li class="me-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        fill="currentColor"
        class="bi bi-circle-fill me-2"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <span class="text-muted me-1 text-uppercase">css</span>
      <span class="text-muted ms-md-1 me-md-1">34.2%</span>
    </li>
    <li class="me-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        fill="currentColor"
        class="bi bi-circle-fill me-2"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <span class="text-muted me-1 text-uppercase">SCSS</span>
      <span class="text-muted ms-md-1 me-md-1">11.0%</span>
    </li>
    <li class="me-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        fill="currentColor"
        class="bi bi-circle-fill me-2"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <small class="text-muted ms-1 me-1">JavaScript</small>
      <span class="text-muted ms-md-1 me-md-1">0.1%</span>
    </li>
  </ul>
</template>

<style scoped>
span {
  font-size: 12px;
}
.btn-close {
  top: 4%;
  left: 1%;
}
.modal {
  backdrop-filter: blur(20px);
}
/* 進度條顏色 */
.progress[aria-label="Segment one"] .progress-bar,
li:nth-of-type(1) .bi-circle-fill {
  background-color: #c6538c;
  fill: #c6538c;
}

.progress[aria-label="Segment two"] .progress-bar,
li:nth-of-type(2) .bi-circle-fill {
  background-color: #e34c26;
  fill: #e34c26;
}

.progress[aria-label="Segment three"] .progress-bar,
li:nth-of-type(3) .bi-circle-fill {
  background-color: #a91d50;
  fill: #a91d50;
}

.progress[aria-label="Segment four"] .progress-bar,
li:nth-of-type(4) .bi-circle-fill {
  background-color: #f1e05b;
  fill: #f1e05b;
}
</style>
