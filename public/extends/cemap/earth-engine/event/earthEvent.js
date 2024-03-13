import { screenPositionTransform } from '@p/extends/cemap/earth-engine/utils/coordninate.js'

var EarthEvent = (function () {
    function EarthEvent(earth) {
        this.earth = earth
        this.handler = new Cesium.ScreenSpaceEventHandler(this.earth.viewer.scene.canvas)
        this.eventCache = {}
    }

    EarthEvent.prototype.onLeftClick = function (modules,callback) {
        if (modules) {
            let eventName = modules + "-left"
            if (!this.eventCache[eventName]) {
                if (!callback) return console.warn("回调函数不存在！！")
                if ('function' !== typeof callback) return console.warn("回调函数参数不是函数！！")
                this.eventCache[eventName] = {
                    callback: callback,
                    modules: modules,
                }
                this.handler.setInputAction((event) => {
                    let transform = screenPositionTransform(event.position, this.earth)
                    // 如果点击到了实体，并且实体有设置模块
                    let callback_event
                    // 目标模块
                    let _modules
                    if (transform.target && transform.modules) {
                        // 使用实体模块的缓存事件
                        _modules = transform.modules
                        callback_event = this.eventCache[transform.modules + "-left"]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + "-left"]
                    }
                    if (transform.target && callback_event.modules !== _modules) {
                        console.warn("点击了目标，但是事件模块【" + modules + "】和目标模块【" + _modules + "】不一致")
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
            } else {
                console.warn("重复添加左键点击事件")
            }
        } else {
            console.warn("模块不能为空")
        }
    }


    EarthEvent.prototype.onMouseMove = function (modules,callback) {
        if (modules) {
            let eventName = modules + "-move"
            if (!this.eventCache[eventName]) {
                if (!callback) return console.warn("回调函数不存在！！")
                if ('function' !== typeof callback) return console.warn("回调函数参数不是函数！！")
                this.eventCache[eventName] = {
                    callback: callback,
                    modules: modules,
                }
                this.handler.setInputAction((event) => {
                    let transform = screenPositionTransform(event.endPosition, this.earth)
                    // 如果点击到了实体，并且实体有设置模块
                    let callback_event
                    // 目标模块
                    let _modules
                    if (transform.target && transform.modules) {
                        // 使用实体模块的缓存事件
                        _modules = transform.modules
                        callback_event = this.eventCache[transform.modules + "-move"]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + "-move"]
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
            } else {
                console.warn("重复添加左键点击事件")
            }
        } else {
            console.warn("模块不能为空")
        }
    }


    return EarthEvent

})()


export default EarthEvent














