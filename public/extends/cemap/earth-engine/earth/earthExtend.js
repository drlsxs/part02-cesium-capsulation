import initCamera from '@p/extends/cemap/earth-engine/utils/earthExtend/camera.js'
// 执行材质添加代码
import "@p/extends/cemap/earth-engine/material/materialIndex.js"

/**
 * 地球扩展，扩展地球实例身上的方法
 */
function earthExtend() {
    initCamera()
}

export default earthExtend
