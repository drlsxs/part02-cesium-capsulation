import GeometryBase from '@p/extends/cemap/earth-engine/geometry/GeometryBase.js'
import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'

var WallLayer = (function () {

    /**
     *
     * @param earth {Earth}
     * @return WallLayer
     */
    function WallLayer(earth) {
        GeometryBase.call(this, earth)
        Object.assign(WallLayer.prototype, GeometryBase.prototype)
    }

    WallLayer.prototype.addWall = function (_data) {
        let {
            id,
            modules,
            positions,
            type = "Color",
            color = Cesium.Color.RED,
            opacity = 1,
            uniforms = {}
        } = _data
        id = encodeId(id, modules)
        color = Cesium.Color.fromAlpha(color, opacity)
        // 定义几何形状
        var wall = new Cesium.GeometryInstance({
            id: id,
            geometry: new Cesium.WallGeometry({
                positions: positions,
            }),
        });

        // 定义外观
        var wallAppearance = new Cesium.MaterialAppearance({
            flat: true,
            material: Cesium.Material.fromType(type, Object.assign(
                { color: color },
                uniforms
            )),

        })

        // 创建Primitive
        var wallPrimitive = new Cesium.Primitive({
            geometryInstances: wall,
            appearance: wallAppearance,
        });
        wallPrimitive.id = id

        GeometryBase.prototype.add.call(this, id, wallPrimitive)

        return wallPrimitive

    }



    return WallLayer
})()

export default WallLayer
