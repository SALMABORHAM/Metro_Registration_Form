// plugins/vuetify.js
// Vuetify setup with RTL support

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Vuetify settings with RTL support
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  locale: {
    current: 'ar',  // Set Arabic as default language
    messages: {
      ar: { /* Arabic translations */ },
      en: { /* English translations */ },
    },
  },
  rtl: true,  // Enable RTL globally
})
