/**
 * @module Label
 * @description 文本操作
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */

const { Cartesian2 } = window.Cesium

var Label = (function () {
    function Label(earth) {
        this.labels = earth.scene.primitives.add(new Cesium.LabelCollection())
        this.caches = {}
    }

    /**
     * 添加文本
     * @param _a
     */
    Label.prototype.addLabel = function (_a) {

        let id = _a.id,
            text = _a.text,
            fillColor = _a.textColor,
            font = _a.font,
            outlineColor = _a.outlineColor,
            outlineWidth = _a.outlineWidth,
            position = _a.position,
            scale = _a.scale,
            textPosition = _a.textPosition === void 0 ? "BOTTOM" : _a.textPosition,
            width = _a.width,
            height =  _a.height
        if (this.caches[id]) {
            console.warn("文本已存在")
            return this.caches[id]
        }
        let _advanceParams = _a.advanceParams || {}
        let label = {
            id,text,fillColor,font,outlineColor,outlineWidth,position, scale,
            horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
            verticalOrigin : Cesium.VerticalOrigin.CENTER
        }
        // 判断文本处于图片位置
        let pixelOffset = new Cesium.Cartesian2(0, 0)
        if (textPosition === "BOTTOM" && height) {
            pixelOffset = new Cesium.Cartesian2(0, height + 10)
        }

        label.pixelOffset = pixelOffset
        label = Object.assign(label, _advanceParams)
        label = this.labels.add(label)
        this.caches[id] = label
        return label
    }

    Label.prototype.remove = function (id) {
        this.labels.remove(this.caches[id])
        delete this.caches[id]
    }

    return Label
})()

export default Label
