/**
 * @module Base
 * @description 点线面基本操作类
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
const { PrimitiveCollection } = Cesium

var GeometryBase = (function () {

    function GeometryBase(earth) {
        this.earth = earth;
        this.primitiveCollection = this.earth.primitives.add(new PrimitiveCollection())
        this.caches = {}
        this.length = 0
    }

    GeometryBase.prototype.add = function (id,primitive) {
        if (this.caches[id]) {
            console.warn("目标已存在")
            return this.caches[id]
        }
        this.caches[id] = primitive
        this.primitiveCollection.add(primitive)
        this.length = this.primitiveCollection.length
        return primitive
    }

    GeometryBase.prototype.remove = function (id) {
        if (this.caches[id]) {
            this.primitiveCollection.remove(this.caches[id])
            delete this.caches[id]
        }
    }



    GeometryBase.prototype.removeAll = function () {
        this.primitiveCollection.removeAll()
        this.caches = {}
    }

    GeometryBase.prototype.flyTo = function () {

        this.earth.viewer.flyTo()
    }




    return GeometryBase;
})();

export default GeometryBase
