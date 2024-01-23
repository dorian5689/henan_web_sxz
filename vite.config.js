// vite.config.js
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/

// defineConfig 默认配置
// Components 组件解析resolvers的 ElementPlusResolver()
// 记得带括号()

export default defineConfig(
    {
    plugins: [vue(),
        Components(
            {
                resolvers: [ElementPlusResolver()]
            })
    ],
    server: {
        // 自动打开浏览器
        open: false
    }
});