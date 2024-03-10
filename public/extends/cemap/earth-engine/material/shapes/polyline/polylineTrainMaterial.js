import MaterialBase from '@p/extends/cemap/earth-engine/material/MaterialBase.js'
import MaterialType from '@p/extends/cemap/earth-engine/material/MaterialType.js'
var PolylineTrainMaterial = (function () {

    function PolylineTrainMaterial(options = {}) {
        // 继承父构造函数实例
        MaterialBase.call(this, options, PolylineTrainMaterial)
    }

    PolylineTrainMaterial.type = MaterialType.PolylineTrail


    return PolylineTrainMaterial


})()

export default PolylineTrainMaterial
