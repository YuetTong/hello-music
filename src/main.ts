import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)
app.use(router)
app.use(Antd);
app.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
//   loading: '@/assets/loading.png',    
  try: 1 // default 1
})
app.mount('#app')


