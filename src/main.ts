import '@/assets/styles/main.scss'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

createApp(App)
  .use(router)
  .use(PrimeVue)
  .component('Button', Button)
  .component('InputText', InputText)
  .mount('#app')
