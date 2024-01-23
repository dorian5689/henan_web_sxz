// 引入创建路由,引入路由模式
import {createRouter, createWebHashHistory} from 'vue-router'

// 具体路由配置,数组对象
const routes = [
    // 添加重定向在login后
    {
        path: '/',
        redirect:'/login',// 重定向
    },
    {
        path: '/login',
        name: 'login',
        // 箭头函数.这里使用单引号居多,前端
        component: () => import('../views/login/index.vue')
        // index.vue 填写模版

    },
    {
        path: '/home',
        name: 'home',
        // 复制修改,views文件夹新建文件
        component: () => import('../views/home/index.vue')
    },

]
// 实例化
const router = createRouter({
    history: createWebHashHistory(),
    //routes:routes, 简化版本下方
    routes
})

// 实例化对象导出,之后可以在main.js 导入
export default router