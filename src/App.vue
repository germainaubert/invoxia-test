<script setup lang="ts">
import AppContent from './components/AppContent.vue'
import AppHeader from './components/AppHeader.vue'
import HeroComponent from './components/HeroComponent.vue'
import backgroundUrl from '@/assets/weather_background.jpg'
</script>

<template>
  <HeroComponent :background-url="backgroundUrl">
    <AppHeader />
    <AppContent />
  </HeroComponent>
</template>
