import { encodeId } from '@p/extends/cemap/utils/utilIndex.js'

var PolylineLayer = (function () {
    function PolylineLayer(earth) {
        this.polylines = earth.scene.primitives.add(new Cesium.PolylineCollection())
        this.caches = {}
    }

    PolylineLayer.prototype.addPolyline = function (_a) {
        var moudles = _a.modules,
            id = encodeId(moudles, _a.id),
            type = _a.type || 'Color',
            color = _a.color,
            width = _a.width,
            positions = _a.positions,
            show = _a.show,
            loop = _a.loop,
            uniforms = _a.uniforms || {}
        if (this.caches[id]) {
            console.warn("该线条已存在")
            return this.caches[id]
        }

        let p = this.polylines.add({
            id,loop,positions,show, width,
            material: new Cesium.Material({
                fabric: {
                    type: type,
                    uniforms: {
                        color: color,
                        ...uniforms
                    }
                },
            })
        })
        this.caches[id] = p
        return p
    }

    PolylineLayer.prototype.remove = function (id) {
        this.polylines.remove(this.caches[id])
        delete this.caches[id]
    }

    PolylineLayer.prototype.removeAll = function (id) {
        this.polylines.removeAll()
        this.caches = {}
    }

    return PolylineLayer


})()

export default PolylineLayer












