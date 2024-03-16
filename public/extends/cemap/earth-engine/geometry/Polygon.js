import GeometryBase from '@p/extends/cemap/earth-engine/geometry/GeometryBase.js'
import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'

var PolygonLayer = (function () {

    /**
     *
     * @param earth {Earth}
     * @return PolygonLayer
     */
    function PolygonLayer(earth) {
        GeometryBase.call(this, earth)
        Object.assign(PolygonLayer.prototype, GeometryBase.prototype)
    }

    PolygonLayer.prototype.addPolygon = function (_data) {
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
        var polygon = new Cesium.GeometryInstance({
            id: id,
            geometry: new Cesium.PolygonGeometry({
                polygonHierarchy: new Cesium.PolygonHierarchy(positions),
            }),
        });

        // 定义外观
        var polygonAppearance = new Cesium.MaterialAppearance({
            flat: true,
            material: Cesium.Material.fromType(type, Object.assign(
                { color: color },
                uniforms
            )),

        })

        // 创建Primitive
        var polygonPrimitive = new Cesium.Primitive({
            geometryInstances: polygon,
            appearance: polygonAppearance,
        });
        polygonPrimitive.id = id

        GeometryBase.prototype.add.call(this, id, polygonPrimitive)

        return polygonPrimitive

    }



    return PolygonLayer
})()

export default PolygonLayer
