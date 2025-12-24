<script setup>
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
  <ul class="list-unstyled d-flex flex-column gap-3">
    <li v-for="(item, index) in items" :key="item.id !== undefined ? item.id : index">
      <div class="list-item-icon">
        <IconArrowUpRight v-if="showIcon" :class="iconClass" />
      </div>
      <p class="mb-0 d-inline">
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
