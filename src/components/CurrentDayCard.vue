<script setup lang="ts">
import type CurrentDay from '@/interfaces/CurrentDay'
import WeatherIcon from './WeatherIcon.vue'
import { formatDate } from '@/utils/formatDate'

const { currentDay, locale } = defineProps<{
  currentDay: CurrentDay
  locale: string
}>()
</script>

<template>
  <div class="text-center mt-2 font-bold">
    {{ currentDay.locationCity + ', ' + currentDay.locationCountry }}
  </div>
  <div class="border-gray-400 border-2 rounded-lg p-1 m-1 bg-white mt-4 mx-4">
    <div class="flex flex-row items-center justify-between">
      <WeatherIcon
        :conditionIcon="currentDay.conditionIcon"
        :description="currentDay.conditionText"
      />
      <div class="mr-2">{{ formatDate(currentDay.lastUpdated, locale, true) }}</div>
    </div>
    <div>{{ $t('content.temperature') + ': ' + currentDay.temperature }}°C</div>
    <div>{{ $t('content.humidity') + ': ' + currentDay.humidity }}%</div>
    <div>{{ $t('content.precipitation') + ': ' + currentDay.precipitation }}%</div>
  </div>
</template>
