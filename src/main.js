import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Cesium from "cesium";

// 路由
import router from "@/router/index.js";
// 定义cesium为window上的属性
Object.defineProperties(window, {
    Cesium: {
        value: Cesium,
        writable: false,
        enumerable: false,
        configurable: false,
    },
});


const app = createApp(App);

app.use(router);
app.mount("#app");
