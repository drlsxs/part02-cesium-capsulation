import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'
import EarthEvent from '@p/extends/cemap/earth-engine/event/earthEvent.js'
import DrawType from '@p/extends/cemap/earth-engine/utils/drawUtils/drawType.js'
import EntityUtils from '@p/extends/cemap/earth-engine/utils/entityUtils/entityUtils.js'
import ToolTip from '@p/extends/cemap/earth-engine/earth/widgets/toolTip.js'
import toolTip from '@p/extends/cemap/earth-engine/earth/widgets/toolTip.js'
import PointLayer from '@p/extends/cemap/earth-engine/base/point.js'

var DrawUtils = (function () {

    /**
     * @param earth {Earth}
     * @param showTip{boolean} 显示提示
     * @return DrawUtils
     */
    function DrawUtils(earth,showTip) {
        this.earth = earth
        this.event = null
        this.drawed = {}
        this.entityUtil = new EntityUtils(this.earth)
        this.toolTip = showTip ? new ToolTip(this.earth) : void 0
        this.pointLayer = new PointLayer(this.earth)
    }

    /**
     * @param options{DrawCache}
     * @return DrawCache
     */
    function DrawCache(options) {
        this.id = options.id
        this.type = options.type
        this.positions = options.positions
        this.coordinates = options.coordinates
        this.entities = options.entities
    }

    DrawUtils.prototype.drawPolyLine = function (options) {
        if (this.toolTip) {
            this.toolTip.message = "左键选择点位"
            this.toolTip.showToolTip()
        }
        return new Promise((resolve, reject) => {
            let {
                id,
                modules,
                color = Cesium.Color.RED,
                width = 2,
                showPoint = false,
                pointSize = 4,
                pointColor = Cesium.Color.YELLOW,
                pointOutLineWith = 0,
                pointOutLineColor = Cesium.Color.WHITE,
            } = options
            id = encodeId(modules, id)
            let positions = [], points = [], polyline, coordinates = [], cache
            this.event = new EarthEvent(this.earth)
            // 创建一个空的数组来存储线的坐标
            this.event.onLeftClick("default", (data) => {
                if (data.cartesian3) {
                    if (positions.length === 0) {
                        positions.push(data.cartesian3)
                    }
                    positions.push(data.cartesian3)
                    coordinates.push(data.coordinate)
                    if (!polyline) {
                        polyline = this.entityUtil.addEntity({
                            polyline: {
                                positions: positions,
                                width: width,
                                clampToGround: true,
                                material: color,
                            },
                        })
                        polyline.polyline.positions = new Cesium.CallbackProperty(function () {
                            return positions
                        }, false)
                    }
                    // if (showPoint) {
                    //     let point = this.pointLayer.addPoint({
                    //         position: data.cartesian3,
                    //         pixelSize: pointSize,
                    //         color: pointColor,
                    //         outlineColor: pointOutLineColor,
                    //         outlineWidth: pointOutLineWith,
                    //     })
                    //     points.push(point)
                    // }
                }
            })
            this.event.onMouseMove("default", (data) => {
                if (data.cartesian3) {
                    // 第二个点形成线可以绘制线了
                    if (positions.length > 0) {
                        positions[positions.length - 1] = data.cartesian3
                        coordinates[coordinates.length - 1] = data.coordinate
                    }
                    if (this.toolTip) {
                        this.toolTip.updateTipPosition(data.screenPosition.x, data.screenPosition.y)
                    }
                }
            })
            // 右键结束绘制
            this.event.onRightClick("default", (data) => {
                positions.pop()
                cache = new DrawCache({
                    id: id,
                    type: DrawType.Polyline,
                    positions: positions,
                    entities: [[polyline], points],
                    coordinates: coordinates,
                })
                this.drawed[id] = cache
                this.event.destroy()
                if (this.toolTip) {
                    this.toolTip.remove()
                }
                resolve(cache)
            })
        })
    }

    DrawUtils.prototype.drawPolyGon = function (options) {
        if (this.toolTip) {
            this.toolTip.message = "左键选择点位"
            this.toolTip.showToolTip()
        }
        return new Promise((resolve, reject) => {
            let {
                id,
                modules,
                color = Cesium.Color.RED,
                opacity = 1,
            } = options
            id = encodeId(modules, id)
            color = Cesium.Color.fromAlpha(color, opacity)
            let positions = [], points = [], polygon,polyline, coordinates = [], cache,
                polygonHierarchy = new Cesium.PolygonHierarchy()
            this.event = new EarthEvent(this.earth)
            // 创建一个空的数组来存储线的坐标
            this.event.onLeftClick("default", (data) => {
                if (data.cartesian3) {
                    if (positions.length === 0) {
                        positions.push(data.cartesian3)
                        polygonHierarchy.positions.push(data.cartesian3)
                    }
                    positions.push(data.cartesian3)
                    coordinates.push(data.coordinate)
                    polygonHierarchy.positions.push(data.cartesian3)
                    if (!polygon) {
                        polygon = this.entityUtil.addEntity({
                            polygon: {
                                hierarchy: polygonHierarchy,
                                material: color,
                            },
                        })
                        polygon.polygon.hierarchy = new Cesium.CallbackProperty(function () {
                            return polygonHierarchy
                        }, false)
                    }
                }
            })
            this.event.onMouseMove("default", (data) => {
                if (data.cartesian3) {
                    // 第二个点形成线可以绘制线了
                    if (positions.length > 0) {
                        positions[positions.length - 1] = data.cartesian3
                        coordinates[coordinates.length - 1] = data.coordinate
                        polygonHierarchy.positions.pop()
                        polygonHierarchy.positions.push(data.cartesian3)
                    }
                    if (this.toolTip) {
                        this.toolTip.updateTipPosition(data.screenPosition.x, data.screenPosition.y)
                    }
                }
            })
            // 右键结束绘制
            this.event.onRightClick("default", (data) => {
                positions.pop()
                cache = new DrawCache({
                    id: id,
                    type: DrawType.Polygon,
                    positions: positions,
                    entities: [[polygon]],
                    coordinates: coordinates,
                })
                this.drawed[id] = cache
                this.event.destroy()
                if (this.toolTip) {
                    this.toolTip.remove()
                }
                resolve(cache)
            })
        })
    }




    /**
     *
     * @param id{string}
     */
    DrawUtils.prototype.deleteById = function (id) {
        let cache = this.drawed[id]
        if (cache) {
            let { entities } = cache
            entities.map(collection => {
                collection.map(entity => {
                    this.entityUtil.remove(entity)
                })
            })
            delete this.drawed[id]
        }
    }

    /**
     *
     * @param drawed{DrawCache}
     */
    DrawUtils.prototype.delete = function (drawed) {
        this.deleteById(drawed.id)
    }

    return DrawUtils
})()

export default DrawUtils
