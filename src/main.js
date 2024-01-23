import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from "./router/index.js";
// 自动索引index.js
import router from "./router";
// 引入之后 需要下方使用
createApp(App).use(router).mount('#app')

