import MaterialBase from '@p/extends/cemap/earth-engine/material/MaterialBase.js'
import MaterialType from '@p/extends/cemap/earth-engine/material/MaterialType.js'

var DynamicWallMaterial = (function () {

    /**
     * @param options
     * @return DynamicWallMaterial
     */
    function DynamicWallMaterial(options) {
        // 继承父构造函数实例
        MaterialBase.call(this, options, DynamicWallMaterial)
    }

    DynamicWallMaterial.type = MaterialType.DynamicWall

    return DynamicWallMaterial
})()

export default DynamicWallMaterial

