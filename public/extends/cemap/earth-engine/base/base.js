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
    }

    Base.prototype.resolve = function (primitive) {

    }

    return Base;
})();

export default Base
