<script setup>
defineProps({
  activities: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="progress-stacked mb-3 progress-height">
      <div
        v-for="activity in activities"
        :key="activity.label"
        class="progress"
        role="progressbar"
        :aria-label="activity.label"
        :aria-valuenow="activity.value"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: activity.value + '%' }"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          :class="activity.colorClass"
        ></div>
      </div>
    </div>
    <ul class="list-unstyled d-inline-flex flex-wrap gap-3 mb-0">
      <li v-for="(activity, idx) in activities" :key="activity.label + '-' + idx">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="currentColor"
          class="bi bi-circle-fill me-2"
          :class="activity.circleClass"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
        <span class="text-muted me-1 fs-7">{{ activity.label }}</span>
        <span class="text-muted ms-md-1 me-md-1 fs-7">{{ activity.value }}%</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.progress-one {
  background-color: var(--wh-gray-800);
}
.progress-two {
  background-color: var(--wh-gray-700);
}
.progress-three {
  background-color: var(--wh-gray-600);
}
.progress-four {
  background-color: var(--wh-gray-500);
}

.circle-one {
  fill: var(--wh-gray-800);
}
.circle-two {
  fill: var(--wh-gray-700);
}
.circle-three {
  fill: var(--wh-gray-600);
}
.circle-four {
  fill: var(--wh-gray-500);
}
.progress-height {
  height: 8px;
}
</style>
