import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tsyvue from 'tsyvue'



createApp(App).use(router).use(tsyvue).mount('#app')
