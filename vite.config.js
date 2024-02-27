import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from "vite-plugin-cesium";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cesium()
    ],
    optimizeDeps: {
        include: ['cesium'],
    },
    resolve: {
        alias: {
            // 将@指向src
            "@": resolve(__dirname, 'src'),
            // 设置public别名
            "@p": resolve(__dirname, "public"),
            // 设置组件别名
            "@c": resolve(__dirname, "src/components"),
            // 设置视图别名
            "@v": resolve(__dirname, "src/views"),
        },
        extensions: ['.js','.ts','jsx','.tsx','.vue'],
    },
    css: {
        devSourcemap: true, // 开启开发源代码模式
    },


})
