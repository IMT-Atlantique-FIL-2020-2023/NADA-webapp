import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import apollo from './apollo'

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(store)
app.use(apollo)
app.mount('#app')
