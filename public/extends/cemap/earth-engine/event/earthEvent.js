import { screenPositionTransform } from '@p/extends/cemap/utils/coordninate.js'

var EarthEvent = (function () {
    function EarthEvent(earth) {
        this.earth = earth
        this.handler = new Cesium.ScreenSpaceEventHandler(this.earth.viewer.scene.canvas)
        this.eventCache = {}
    }

    EarthEvent.prototype.onClick = function (modules,callback) {
        if (modules) {
            let eventName = modules + "-left"
            if (!this.eventCache[eventName]) {
                if (!callback) return console.warn("回调函数不存在！！")
                if (typeof callback !== 'function') return console.warn("回调函数参数不是函数！！")
                this.eventCache[eventName] = {
                    callback: callback,
                }
                this.handler.setInputAction((event) => {
                    let transform = screenPositionTransform(event.position, this.earth)
                    // 如果点击到了实体，并且实体有设置模块
                    let callback_event
                    if (transform.feature && transform.modules) {
                        // 使用实体模块的缓存事件
                        callback_event = this.eventCache[transform.modules + "-left"]
                    }  else {
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

    return EarthEvent

})()


export default EarthEvent














