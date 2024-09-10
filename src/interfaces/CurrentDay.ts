import type ForecastDay from './ForecastDay'

export default interface CurrentDay extends ForecastDay {
  locationCity: string
  locationCountry: string
  lastUpdated: string
}
