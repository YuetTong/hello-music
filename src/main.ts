import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)
app.use(router)
app.use(Antd);
// app.use(store)
// app.use(ElementPlus)
app.mount('#app')
// createApp(App).mount('#app')

