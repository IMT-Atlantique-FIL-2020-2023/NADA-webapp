import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(store)
app.mount('#app')
