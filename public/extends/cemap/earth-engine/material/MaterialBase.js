import lineImage from "@p/extends/cemap/assets/images/polylinematerial/polylinemigrate.png"
var MaterialBase = (function () {
    function MaterialBase(options, instance) {
        this._definitionChange = new Cesium.Event()
        this._color = options.color || Cesium.Color.WHITE
        this._image = options.image || lineImage
        this._colorSubscription = void 0
        this._time = (new Date()).getTime()
        this.isConstant = false
        this._speed = options.speed || 1
        this.instance = instance
        this.type = this.instance.type
    }

    MaterialBase.prototype.getType = function () {
        return this.type
    }

    MaterialBase.prototype.getValue = function (time,result) {
        result = Cesium.defaultValue(result, {})
        result.color = Cesium.Property.getValueOrUndefined(this._color, time)
        result.speed = this._speed
        return result
    }

    MaterialBase.prototype.equals = function (other) {
        return (
            this === other ||
            (other instanceof this.instance  &&
                Cesium.Property.equals(this._speed, other._speed) &&
                Cesium.Property.equals(this._color, other._color))
        )
    }



    return MaterialBase

})()
export default MaterialBase
