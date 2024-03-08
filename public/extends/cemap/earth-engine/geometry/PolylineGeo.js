import { encodeId } from '@p/extends/cemap/utils/utilIndex.js'
import PolylineTrailMaterialProperty from '@p/extends/cemap/earth-engine/material/polylineTrain.js'
import polylineMaterialImg from '@p/extends/cemap/assets/images/polylinematerial/polylinemigrate.png'

var PolylineGeo = (function () {
    function PolylineGeo(earth) {
        this.earth = earth
        this.caches = {}
    }

    PolylineGeo.prototype.addLine = function (_a) {

        var moudles = _a.modules,
            id = encodeId(moudles, _a.id),
            width = _a.width,
            positions = _a.positions,
            type = _a.type || 'Color',
            color = _a.color,
            uniforms = _a.uniforms
        // 设置geometry
        //定义几何形状
        var polyline = new Cesium.GeometryInstance({
            geometry: new Cesium.PolylineGeometry({
                positions: positions,
                width: width,
            }),
        });
        //定义外观
        var polylineAppearance = new Cesium.PolylineMaterialAppearance({
            material: Cesium.Material.fromType(type, Object.assign(
                { color: color },
                uniforms
            )),
        })
        //创建Primitive
        var polylineGeometry = new Cesium.Primitive({
            geometryInstances: polyline,
            appearance: polylineAppearance,
        });
        polylineGeometry.id = id

        // 添加到场景几何体集合中
        this.earth.viewer.scene.primitives.add(polylineGeometry)


    }


    return PolylineGeo


})()

export default PolylineGeo












