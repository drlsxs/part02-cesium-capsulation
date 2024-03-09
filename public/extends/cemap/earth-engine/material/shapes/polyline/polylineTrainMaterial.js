import MaterialBase from '@p/extends/cemap/earth-engine/material/MaterialBase.js'
import MaterialType from '@p/extends/cemap/earth-engine/material/MaterialType.js'
var PolylineTrainMaterial = (function () {

    function PolylineTrainMaterial(options = {}) {

        // 继承父构造函数实例
        MaterialBase.call(this, options, PolylineTrainMaterial)
        Object.defineProperties(PolylineTrainMaterial.prototype, {
            definitionChanged: {
                get: () => {
                    return this._definitionChange
                },
            },
            color: Cesium.createPropertyDescriptor("color"),
            speed: Cesium.createPropertyDescriptor("speed")
        })
    }

    PolylineTrainMaterial.type = MaterialType.PolylineTrail



    return PolylineTrainMaterial


})()

export default PolylineTrainMaterial
