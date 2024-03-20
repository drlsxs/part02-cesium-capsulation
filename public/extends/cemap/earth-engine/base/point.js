import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'

var PointLayer = (function () {

    /**
     *
     * @param earth {Earth}
     * @return PointLayer
     */
    function PointLayer(earth) {
        this.points = earth.scene.primitives.add(new Cesium.PointPrimitiveCollection())
        this.caches = {}
    }

    PointLayer.prototype.addPoint = function (_a) {
        var moudles = _a.modules,
            id = encodeId(moudles, _a.id),
            color = _a.color,
            outlineColor = _a.outlineColor,
            outlineWidth = _a.outlineWidth,
            pixelSize = _a.pixelSize,
            position = _a.position,
            show = _a.show
        if (this.caches[id]) {
            console.warn("基本点已存在")
            return this.caches[id]
        }
        let p = this.points.add({
            id,
            color,
            outlineWidth,
            outlineColor,
            pixelSize,
            position,
            show
        })
        this.caches[id] = p
        return p
    }

    PointLayer.prototype.remove = function (id) {
        this.points.remove(this.caches[id])
        delete this.caches[id]
    }

    PointLayer.prototype.removeAll = function () {
        this.points.removeAll()
        this.caches = {}
    }

    return PointLayer


})()

export default PointLayer












