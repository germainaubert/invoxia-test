<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import CurrentDayCard from './CurrentDayCard.vue'
import type CurrentDay from '@/interfaces/CurrentDay'
import { transformCurrentDay, transformForecastDay } from '@/utils/transformApiData'
import type ForecastDay from '@/interfaces/ForecastDay'
import ForecastCard from './ForecastCard.vue'

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL
const i18nLocale = useI18n().locale

// trigger inputSubmit when locale changes
watch(i18nLocale, () => inputSubmit())

const cityInput: Ref<string> = ref('')
const currentDay: Ref<CurrentDay | null> = ref(null)
const forecastDays: Ref<ForecastDay[] | null> = ref(null)
const loadingState: Ref<boolean> = ref(false)
const errorMessage: Ref<string | null> = ref(null)

const inputSubmit = (): void => {
  if (cityInput.value) {
    requestWeatherApi()
  }
}

const requestWeatherApi = () => {
  loadingState.value = true
  axios
    .get(weatherApiUrl, {
      params: {
        key: weatherApiKey,
        q: cityInput.value,
        days: 3, // free plan on weatherapi is 3 forecast days max
        lang: i18nLocale.value
      }
    })
    .then((response) => {
      currentDay.value = transformCurrentDay(
        response.data.current,
        response.data.forecast.forecastday[0],
        response.data.location
      )
      // remove first item as it describes the current day
      // then map on the days to return the transformed array
      forecastDays.value = response.data.forecast.forecastday
        .slice(1)
        .map((day: any) => transformForecastDay(day))
    })
    .catch((e) => {
      currentDay.value = null
      forecastDays.value = null
      if (e.response?.data.error.message) {
        errorMessage.value = e.response.data.error.message
      } else {
        console.error(e)
      }
    })
    .finally(() => {
      loadingState.value = false
    })
}
</script>

<template>
  <main class="flex flex-col size-full">
    <input
      :placeholder="$t('content.inputPlaceholder')"
      v-on:keyup.enter="inputSubmit"
      v-model="cityInput"
      class="focus:outline-none pl-1 rounded-md mx-20 my-10 xl:mx-96"
    />
    <div
      v-if="loadingState"
      class="border-transparent h-20 w-20 animate-spin rounded-full border-8 border-t-white mt-40 mx-auto"
    ></div>
    <div
      v-else-if="currentDay && forecastDays && forecastDays.length > 0"
      class="flex flex-col bg-white/75 rounded-lg m-6 p-2 xl:mx-96"
    >
      <CurrentDayCard :currentDay="currentDay" :locale="i18nLocale"></CurrentDayCard>
      <div class="flex flex-row justify-around my-4 mx-3">
        <ForecastCard
          v-for="day in forecastDays"
          :key="day.date"
          :forecastDay="day"
          :locale="i18nLocale"
        ></ForecastCard>
      </div>
    </div>
    <div class="text-center font-bold text-white" v-else-if="errorMessage">{{ errorMessage }}</div>
  </main>
</template>
