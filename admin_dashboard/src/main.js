import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite'
import 'tw-elements';

import './assets/index.css'

createApp(App).use(router).mount('#app')
