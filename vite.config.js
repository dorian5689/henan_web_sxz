import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
            AutoImport({
                    resolvers: [ElementPlusResolver()],
                              }),
            Components({
            resolvers: [ElementPlusResolver()],
                            }),
            [ElementPlus()],
            ],

})