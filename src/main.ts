import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import locales from './locales.json'

let locale = navigator.language
const match = RegExp(/(\w*)/).exec(navigator.language)
if (match?.[0]) {
  locale = match[0]
}

const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: 'en-US',
  messages: locales
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
