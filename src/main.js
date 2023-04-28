import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/main.scss'

const app = createApp(App)
app.provide('store', store)

app.use(router)

app.mount('#app')
