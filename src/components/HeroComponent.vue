<script setup lang="ts">
const { backgroundUrl } = defineProps({
  backgroundUrl: { type: String, required: true }
})
</script>

<template>
  <section
    class="relative bg-cover bg-center h-screen"
    :style="`background-image: url(${backgroundUrl})`"
  ></section>
  <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
    <slot></slot>
  </div>
</template>
