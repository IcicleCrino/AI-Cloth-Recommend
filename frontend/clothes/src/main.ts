import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const piania = createPinia()
piania.use(piniaPluginPersistedstate)

app.use(piania)
app.use(router)
app.use(Elementplus)

app.mount('#app')
