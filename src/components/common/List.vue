<script setup>
import IconArrowUpRight from '@/icons/IconArrowUpRight.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: true, // 預設顯示 icon
  },
  iconClass: {
    type: [String, Array, Object],
    default: 'me-3', // 預設樣式，可由父組件覆寫
  },
})
</script>

<template>
  <ul class="list-unstyled">
    <li v-for="(item, index) in items" :key="item.id !== undefined ? item.id : index" class="py-2">
      <p class="mb-0 fs-5 fw-bold">
        <IconArrowUpRight v-if="showIcon" :class="iconClass" />
        <!--
          Slot Props:
            - item: The current item in the list (type: any)
            - index: The index of the current item (type: number)
        -->
        <slot name="list-item" :item="item" :index="index">
          {{ item }}
        </slot>
      </p>
    </li>
  </ul>
</template>

<style scoped>
ul > li {
  .bi-arrow-up-right {
    transition: 0.45s cubic-bezier(0.34, 1.56, 0.48, 1.19);
  }
}

ul > li:hover {
  .bi-arrow-up-right {
    transform: rotate(45deg);
  }
}
</style>
