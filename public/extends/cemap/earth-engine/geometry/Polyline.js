import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'
import GeometryBase from '@p/extends/cemap/earth-engine/geometry/GeometryBase.js'

var PolylineLayer = (function () {
    function PolylineLayer(earth) {
        GeometryBase.call(this, earth)
        Object.assign(PolylineLayer.prototype, GeometryBase.prototype)
    }

    PolylineLayer.prototype.addPolyline = function (_a) {

        var moudles = _a.modules,
            id = encodeId(moudles, _a.id),
            width = _a.width,
            positions = _a.positions,
            type = _a.type || 'Color',
            color = _a.color,
            uniforms = _a.uniforms

        // 定义几何形状
        var polyline = new Cesium.GeometryInstance({
            id: id,
            geometry: new Cesium.PolylineGeometry({
                positions: positions,
                width: width,
            }),
        });

        // 定义外观
        var polylineAppearance = new Cesium.PolylineMaterialAppearance({
            material: Cesium.Material.fromType(type, Object.assign(
                { color: color },
                uniforms
            )),

        })

        // 创建Primitive
        var polylinePrimitive = new Cesium.Primitive({
            geometryInstances: polyline,
            appearance: polylineAppearance,
        });

        GeometryBase.prototype.add.call(this, id, polylinePrimitive)
    }

    return PolylineLayer


})()

export default PolylineLayer












