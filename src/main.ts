<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
=======
import { createApp } from "vue";
import App from "./App.vue";
import { vuetify } from "./plugins/vuetify";
import router from "./router";
import i18n from "./plugins/i18n";
import { store, key } from "./store/index";

createApp(App).use(store, key).use(router).use(vuetify).use(i18n).mount("#app");
>>>>>>> main
