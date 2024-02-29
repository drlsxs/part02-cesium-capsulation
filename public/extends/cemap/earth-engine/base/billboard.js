import Base from '@p/extends/cemap/earth-engine/base/base.js'

var Billboard = /**class*/(function (_super) {
    function Billboard(earth) {
        this.billboards = earth.scene.primitives.add(new Cesium.BillboardCollection())
        this.cache = {}
    }

    Billboard.prototype.addBillboard = function (_a) {
        let _id = _a.id, _color = _a.color, _width = _a.width, _height = _a.height, _image = _a.image,
            _position = _a.position, _scale = _a.scale, _rotation = _a.rotation
        let _advanceParams = _a.advanceParams || {}
        if (this.cache[_id]) return console.warn("该标牌已存在")
        let b = {
            id: _id,
            color: _color,
            width: _width,
            height: _height,
            image: _image,
            position: _position,
            scale: _scale,
            rotation: _rotation,
            horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
            verticalOrigin : Cesium.VerticalOrigin.CENTER
        }
        b = Object.assign(b, _advanceParams)
        b = this.billboards.add(b)
        this.cache[_id] = b
    }

    Billboard.prototype.getBillboard = function (id) {
        return this.cache[id]
    }

    Billboard.prototype.remove = function (id) {
        this.billboards.remove(this.cache[id])
        delete this.cache[id]
    }

    Billboard.prototype.removeAll = function () {
        this.billboards.removeAll()
        this.cache = {}
    }

    Billboard.prototype.destroy = function () {
        this.removeAll()
        this.billboards.destroy()
    }





    return Billboard

})(Base)

export default Billboard
