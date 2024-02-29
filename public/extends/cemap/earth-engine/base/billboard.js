import Base from '@p/extends/cemap/earth-engine/base/base.js'

var Billboard = /**class*/(function (_super) {
    function Billboard(earth) {
        this.billboards = earth.scene.primitives.add(new Cesium.BillboardCollection())
    }

    Billboard.prototype.add = function (_a) {
        let _id = _a.id, _color = _a.color, _width = _a.width, _height = _a.height, _image = _a.image,
            _position = _a.position, _scale = _a.scale, _rotation = _a.rotation
        let _advanceParams = _a.advanceParams || {}
        let billboard = {
            id: _id,
            color: _color,
            width: _width,
            height: _height,
            image: _image,
            position: _position,
            scale: _scale,
            rotation: _rotation,
        }
        Object.assign(billboard, _advanceParams)
        this.billboards.add(billboard)
    }

    return Billboard

})(Base)

export default Billboard
