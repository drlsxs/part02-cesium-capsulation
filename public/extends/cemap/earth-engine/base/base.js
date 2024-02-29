/**
 * @module Base
 * @description 点线面基本操作类
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
const { PrimitiveCollection } = Cesium

var Base = (function () {

    function Base(earth) {
        this.earth = earth;
        this.collection = earth.scene.primitives.add(new PrimitiveCollection())
    }

    Base.prototype.resolve = function (primitive) {
        this.collection.add(primitive)
    }

    return Base;
})();

export default Base
