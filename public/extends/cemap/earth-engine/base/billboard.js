/**
 * @module Billboard
 * @description 标牌操作
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
import Base from '@p/extends/cemap/earth-engine/base/base.js'
import { encodeId, getModule } from '@p/extends/cemap/utils/utilIndex.js'

var Billboard = /**class*/(function (_super) {
    function Billboard(earth,single) {
        single === void 0 ? single = true : void 0
        this.billboards = earth.scene.primitives.add(new Cesium.BillboardCollection({scene:earth.scene}))
        this.caches = {}
        if (single) earth.useBillboard = this
    }



    Billboard.prototype.addBillboard = function (_a) {
        let id = _a.id, color = _a.color, width = _a.width, height = _a.height, image = _a.image,
            position = _a.position, scale = _a.scale, rotation = _a.rotation, modules = _a.modules,
            advanceParams = _a.advanceParams || {}
        !id ? id = encodeId(modules, id) : void 0
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

    Billboard.prototype.getBillboard = function (id) {
        return this.caches[id]
    }

    Billboard.prototype.remove = function (id) {
        this.billboards.remove(this.caches[id])
        delete this.caches[id]
    }

    Billboard.prototype.getModule = function (modules) {
        let list = []
        let ids = getModule(this.caches, modules)
        ids.map(id => {
            list.push(this.caches[id])
        })
        return list
    }

    Billboard.prototype.removeModule = function (modules) {
        let ids = getModule(this.caches, modules)
        ids.map(id => {
            this.remove(id)
        })
    }

    Billboard.prototype.removeAll = function () {
        this.billboards.removeAll()
        this.caches = {}
    }

    Billboard.prototype.destroy = function () {
        this.removeAll()
        this.billboards.destroy()
    }

    /**
     * 调用
     * @param earth
     * @param single
     * @returns {*|Billboard}
     * @constructor
     */
    function CallBillboard(earth,single) {
        let billboard = earth.useBillboard
        if (!billboard) billboard = new Billboard(earth, single)
        single ? billboard = earth.useBillboard : billboard = new Billboard(earth, single)
        return billboard
    }

    return CallBillboard



})(Base)

export default Billboard
