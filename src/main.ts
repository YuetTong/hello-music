import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
// app.use(store)
// app.use(ElementPlus)
app.mount('#app')
// createApp(App).mount('#app')

