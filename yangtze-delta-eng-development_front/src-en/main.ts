import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//初始化css样式，不然真的很难操作
import 'normalize.css'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router); // 使用路由
app.use(ElementPlus);


app.mount('#app');