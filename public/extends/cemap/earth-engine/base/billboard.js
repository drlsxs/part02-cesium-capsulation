/**
 * @module Billboard
 * @description 标牌操作
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
import { encodeId, getModule } from '@p/extends/cemap/utils/utilIndex.js'

var BillboardLayer = /**class*/(function () {
    function BillboardLayer(earth) {
        this.billboards = earth.scene.primitives.add(new Cesium.BillboardCollection({scene:earth.scene}))
        this.caches = {}
    }


    BillboardLayer.prototype.addBillboard = function (_a) {
        let modules = _a.modules,
            id = encodeId(modules, _a.id),
            color = _a.color,
            width = _a.width,
            height = _a.height,
            image = _a.image,
            position = _a.position,
            scale = _a.scale,
            rotation = _a.rotation,
            advanceParams = _a.advanceParams || {}
        if (this.caches[id]) {
            console.warn("该标牌已存在")
            return this.caches[id]
        }
        let b = {
            id, color, width, height, image, position, scale, rotation, modules,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        }
        b = Object.assign(b, advanceParams)
        b = this.billboards.add(b)
        this.caches[id] = b
        return b
    }

    BillboardLayer.prototype.getBillboard = function (id) {
        return this.caches[id]
    }

    BillboardLayer.prototype.remove = function (id) {
        this.billboards.remove(this.caches[id])
        delete this.caches[id]
    }

    BillboardLayer.prototype.getModule = function (modules) {
        let list = []
        let ids = getModule(this.caches, modules)
        ids.map(id => {
            list.push(this.caches[id])
        })
        return list
    }

    BillboardLayer.prototype.removeModule = function (modules) {
        let ids = getModule(this.caches, modules)
        ids.map(id => {
            this.remove(id)
        })
    }

    BillboardLayer.prototype.removeAll = function () {
        this.billboards.removeAll()
        this.caches = {}
    }

    BillboardLayer.prototype.destroy = function () {
        this.removeAll()
        this.billboards.destroy()
    }

    return BillboardLayer



})()

export default BillboardLayer
