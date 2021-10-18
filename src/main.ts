import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import apollo from './apollo'
import ol from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(store)
app.use(apollo)
app.use(ol)
app.mount('#app')
