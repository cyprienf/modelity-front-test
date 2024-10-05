import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: 'light'
      }
    }
  })
  .component('Button', Button)
  .component('FloatLabel', FloatLabel)
  .component('InputText', InputText)
  .mount('#app')
