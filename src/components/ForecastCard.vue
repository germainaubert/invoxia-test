<script setup lang="ts">
import type ForecastDay from '@/interfaces/ForecastDay'
import WeatherIcon from './WeatherIcon.vue'
import { formatDate } from '@/utils/formatDate'

const { forecastDay, locale } = defineProps<{
  forecastDay: ForecastDay
  locale: string
}>()
</script>

<template>
  <div class="grow border-gray-400 border-2 rounded-lg p-1 m-1 bg-white">
    <div class="text-center">{{ formatDate(forecastDay.date, locale) }}</div>
    <WeatherIcon
      :conditionIcon="forecastDay.conditionIcon"
      :description="forecastDay.conditionText"
    />
    <div class="text-xs">
      <div>{{ $t('content.temperature') + ': ' + forecastDay.temperature }}°C</div>
      <div>{{ $t('content.humidity') + ': ' + forecastDay.humidity }}%</div>
      <div>{{ $t('content.precipitation') + ': ' + forecastDay.precipitation }}%</div>
    </div>
  </div>
</template>
&
