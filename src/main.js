// main.js

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import './assets/styles/global.css'

// Composables
import { createApp } from 'vue'

// Create i18n instance
const i18n = createI18n({
  locale: 'ar',  // Set Arabic as default locale
  fallbackLocale: 'en',  // Fallback to English if a translation is missing
  messages: {
    en: { /* English translations */ },
    ar: { /* Arabic translations */ },
  },
})

// Create Vue app instance
const app = createApp(App)

// Use i18n and Vuetify
app.use(i18n)
registerPlugins(app)

// Mount the app
app.mount('#app')
