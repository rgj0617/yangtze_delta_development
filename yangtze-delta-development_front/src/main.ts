import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.js'
//初始化css样式，不然真的很难操作
import 'normalize.css'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css'

const app = createApp(App);


app.use(router); // 使用路由
app.use(ElementPlus);


app.mount('#app');