import MaterialType from '@p/extends/cemap/earth-engine/material/MaterialType.js'
import dynamicWallMaterial from "../shaders/polygon/dynamicWallMaterial.glsl?raw"
import image from "@p/extends/cemap/assets/images/polygon/fence.png"
// 扩展静态属性
Cesium.Material.DynamicWallMaterial = MaterialType.DynamicWall
// 添加材质
Cesium.Material._materialCache.addMaterial(MaterialType.DynamicWall, {
    fabric: {
        type: MaterialType.DynamicWall,
        uniforms: {
            color: Cesium.Color.RED,
            image: image,
            speed: 1,
        },
        source: dynamicWallMaterial,
    },
    translucent: function (material) {
        return true
    },
})






