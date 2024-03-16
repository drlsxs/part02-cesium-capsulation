import { screenPositionTransform } from '@p/extends/cemap/earth-engine/utils/coordninate.js'

var EarthEvent = (function () {
    /**
     *
     * @param earth {Earth}
     * @return EarthEvent
     */
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
                    // 回调事件
                    let callback_event
                    // 如果点击到了实体，并且实体有设置模块
                    if (transform.target && transform.modules) {
                        // 使用实体模块的缓存事件
                        callback_event = this.eventCache[transform.modules + "-left"]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + "-left"]
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

    EarthEvent.prototype.onRightClick = function (modules,callback) {
        if (modules) {
            let eventName = modules + "-right"
            if (!this.eventCache[eventName]) {
                if (!callback) return console.warn("回调函数不存在！！")
                if ('function' !== typeof callback) return console.warn("回调函数参数不是函数！！")
                this.eventCache[eventName] = {
                    callback: callback,
                    modules: modules,
                }
                this.handler.setInputAction((event) => {
                    let transform = screenPositionTransform(event.position, this.earth)
                    // 回调事件
                    let callback_event
                    // 如果点击到了实体，并且实体有设置模块
                    if (transform.target && transform.modules) {
                        // 使用实体模块的缓存事件
                        callback_event = this.eventCache[transform.modules + "-right"]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + "-right"]
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
            } else {
                console.warn("重复添加右键点击事件")
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
                    // 回调事件
                    let callback_event
                    // 如果点击到了实体，并且实体有设置模块
                    if (transform.target && transform.modules) {
                        // 使用实体模块的缓存事件
                        callback_event = this.eventCache[transform.modules + "-move"]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + "-move"]
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
            } else {
                console.warn("重复添加鼠标移动事件")
            }
        } else {
            console.warn("模块不能为空")
        }
    }

    EarthEvent.prototype.destroy = function () {
        if (this.handler) this.handler.destroy()
        this.eventCache = {}
    }

    EarthEvent.prototype.removeModule = function (eventType, module) {
        if (eventType) {
            module = module + "-" + eventType
            delete this.eventCache[module]
        } else {
            let types = ["left", "right"]
            types.map(type => {
                let delModule = module + "-" + type
                delete this.eventCache[delModule]
            })
        }
    }


    return EarthEvent

})()


export default EarthEvent














