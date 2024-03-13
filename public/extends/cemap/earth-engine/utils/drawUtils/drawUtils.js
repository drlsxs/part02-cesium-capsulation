import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'
import EarthEvent from '@p/extends/cemap/earth-engine/event/earthEvent.js'
import PointLayer from '@p/extends/cemap/earth-engine/base/point.js'
import DrawType from '@p/extends/cemap/earth-engine/utils/drawUtils/drawType.js'

var DrawUtils = (function () {

    /**
     * @param earth {Earth}
     * @return DrawUtils
     * @constructor
     */
    function DrawUtils(earth) {
        this.earth = earth
        this.event = null
        this.caches = {}
    }


    DrawUtils.prototype.drawPolyLine = function (options) {
        let { id, modules, color, width, showPoint, pointSize, pointColor, pointOutLineWith, pointOutLineColor, } = options
        id = encodeId(modules, id)
        color = color || Cesium.Color.RED
        width = width || 2
        pointSize = pointSize || width + 2
        let positions = []
        let pointLayer = new PointLayer(this.earth)
        this.event = new EarthEvent(this.earth)
        this.event.onLeftClick("default", (data) => {
            if (data.cartesian3) {
                positions.push(data.cartesian3)
                if (showPoint) {
                    let point = pointLayer.addPoint({
                        position: data.cartesian3,
                        color: pointColor || Cesium.Color.YELLOW,
                        pixelSize: pointSize,
                        outlineColor: pointOutLineColor,
                        outlineWidth: pointOutLineWith,
                    })
                }
            }
        })

        // 右键结束绘制
        this.event.onRightClick("default", (data) => {
            this.caches[id] = {
                type: DrawType.Polyline,
                positions: positions,
                layer: pointLayer,
            }
            this.event.destroy()
        })

    }

    /**
     *
     * @param id{string}
     */
    DrawUtils.prototype.deletePolyLine = function (id) {
        let cache = this.caches[id]
        if (cache) {
            cache.layer.removeAll()
            delete this.caches[id]
        }
    }

    return DrawUtils
})()

export default DrawUtils
