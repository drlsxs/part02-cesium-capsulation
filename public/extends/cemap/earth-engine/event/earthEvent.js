import { screenPositionTransform } from '@p/extends/cemap/earth-engine/utils/coordninate.js'
import EventType from '@p/extends/cemap/earth-engine/event/eventType.js'
import lodash from "lodash"

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
            let eventName = modules + EventType.leftClick
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
                        callback_event = this.eventCache[transform.modules + EventType.leftClick]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + EventType.leftClick]
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
            let eventName = modules + EventType.rightClick
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
                        callback_event = this.eventCache[transform.modules + EventType.rightClick]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + EventType.rightClick]
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
            let eventName = modules + EventType.mouseMove
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
                        callback_event = this.eventCache[transform.modules + EventType.mouseMove]
                    }
                    if (!callback_event) {
                        // 不然使用传入模块的事件
                        callback_event = this.eventCache[modules + EventType.mouseMove]
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

    EarthEvent.prototype.onPreRender = function (modules, listener) {
        if (modules) {
            let eventName = modules + EventType.preRender
            if (!this.eventCache[eventName]) {
                this.eventCache[eventName] = {
                    callback: null,
                    modules: modules,
                    listener: listener,
                }
                this.earth.scene.preRender.addEventListener(listener)
            } else {
                console.warn("重复添加场景更新渲染事件")
            }
        } else {
            console.warn("模块不能为空")
        }
    }


    EarthEvent.prototype.preRenderHtml = function (modules, objectList, callback) {
        let _this = this
        function listener() {
            if (Array.isArray(objectList) && objectList.length) {
                objectList.forEach(item => {
                    let position = lodash.cloneDeep(item.position)
                    if (position instanceof Cesium.Cartesian3) {
                        // 将笛卡尔坐标中的位置转换为canvas坐标。这通常用于将HTML元素放置在与场景中的对象相同的屏幕位置。
                        item.screenPosition = _this.earth.scene.cartesianToCanvasCoordinates(position)
                        let domEl = document.getElementById(item.id)
                        // 判断元素是否在地球背面
                        if (domEl) {
                            domEl.style.display = "block"
                            domEl.style.left = item.screenPosition.x + "px"
                            domEl.style.top = item.screenPosition.y + "px"
                        }
                    }
                })
            }


            if (callback) callback.call(this, objectList)
        }

        this.onPreRender(modules, listener)
    }


    EarthEvent.prototype.destroy = function () {
        if (this.handler) this.handler.destroy()
        this.eventCache = {}
    }


    EarthEvent.prototype.removeEvent = function (eventType, module) {
        if (module) {
            let delModule
            if (eventType) {
                delModule = module +  eventType
                if (eventType === EventType.preRender) {
                    let listener = this.eventCache[delModule].listener
                    this.earth.scene.preRender.removeEventListener(listener)
                }
                delete this.eventCache[delModule]
            } else {
                let types = Object.keys(EventType)
                types.map(type => {
                    delModule = module + type
                    if (EventType[type] === EventType.preRender) {
                        let listener = this.eventCache[delModule].listener
                        this.earth.scene.preRender.removeEventListener(listener)
                    }
                    delete this.eventCache[delModule]
                })
            }
        }
    }


    return EarthEvent

})()


export default EarthEvent














