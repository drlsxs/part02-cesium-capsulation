import { encodeId } from '@p/extends/cemap/utils/utilIndex.js'

var PolylineGeo = (function () {
    function PolylineGeo(earth) {
        this.earth = earth
        this.caches = {}
    }

    PolylineGeo.prototype.addLine = function (_a) {
        var moudles = _a.modules,
            id = encodeId(moudles, _a.id),
            colors = _a.colors,
            width = _a.width,
            positions = _a.positions,
            colorsPerVertex = _a.colorsPerVertex,
            arcType = _a.arcType,
            granularity = _a.granularity,
            vertexFormat = _a.vertexFormat
        // 设置geometry
        let geometry = new Cesium.SimplePolylineGeometry({
            positions: positions,
            colors: colors,
            colorsPerVertex: colorsPerVertex,
            arcType: arcType,
            granularity: granularity,
        })
        let instance = new Cesium.GeometryInstance({
            geometry: geometry,
        })
        this.earth.scene.primitives.add(new Cesium.Primitive({
            geometryInstances: instance,
            appearance: new Cesium.PerInstanceColorAppearance(
                {
                    flat: true,
                    renderState: {
                        lineWidth: Math.min(2.0, this.earth.viewer.scene.maximumAliasedLineWidth),
                    },
                }
            ),
        }))

    }


    return PolylineGeo


})()

export default PolylineGeo












