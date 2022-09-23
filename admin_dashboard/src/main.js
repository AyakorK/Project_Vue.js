import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite'
import 'tw-elements';
import '@ocrv/vue-tailwind-pagination'

import './assets/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()


createApp(App).use(router).use(pinia).mount('#app')
