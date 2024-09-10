import type CurrentDay from '@/interfaces/CurrentDay'
import type ForecastDay from '@/interfaces/ForecastDay'

export const transformCurrentDay = (
  currentDay: any,
  forecastDay: any,
  location: any
): CurrentDay => {
  return {
    locationCity: location.name,
    locationCountry: location.country,
    lastUpdated: currentDay.last_updated,
    date: forecastDay.date,
    precipitation: forecastDay.day.daily_chance_of_rain,
    temperature: currentDay.heatindex_c,
    humidity: currentDay.humidity,
    conditionText: currentDay.condition.text,
    conditionIcon: currentDay.condition.icon
  }
}

export const transformForecastDay = (forecastDay: any): ForecastDay => {
  return {
    date: forecastDay.date,
    temperature: forecastDay.day.avgtemp_c,
    humidity: forecastDay.day.avghumidity,
    precipitation: forecastDay.day.daily_chance_of_rain,
    conditionText: forecastDay.day.condition.text,
    conditionIcon: forecastDay.day.condition.icon
  }
}
