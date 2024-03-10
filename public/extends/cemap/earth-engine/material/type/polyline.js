import LineTrailMaterial from "../shaders/polyline/polylineTrainMaterial.glsl?raw"
import MaterialType from '@p/extends/cemap/earth-engine/material/MaterialType.js'
import lineImage from "@p/extends/cemap/assets/images/polylinematerial/polylinemigrate.png"
// 扩展静态属性
Cesium.Material.PolylineTrailType = MaterialType.PolylineTrail
// 添加材质
Cesium.Material._materialCache.addMaterial(MaterialType.PolylineTrail, {
    fabric: {
        type: MaterialType.PolylineTrail,
        uniforms: {
            color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
            image: lineImage,
            speed: 1,
            repeat: new Cesium.Cartesian2(1, 1),
        },
        source: LineTrailMaterial,
    },
    translucent: function (material) {
        return true
    },
})



