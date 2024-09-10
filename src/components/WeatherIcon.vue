<script setup lang="ts">
const { conditionIcon, description } = defineProps({
  conditionIcon: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<template>
  <div class="flex flex-row items-center">
    <img :src="conditionIcon" :alt="description + ' icon'" />
    <div class="text-xs">{{ description }}</div>
  </div>
</template>
