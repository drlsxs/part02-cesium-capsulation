import { screenPositionTransform } from '@p/extends/cemap/earth-engine/utils/coordninate.js'
import EventType, { SpaceEventType } from '@p/extends/cemap/earth-engine/event/eventType.js'
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
                        callback_event = this.eventCache[eventName]
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
            } else {
                let cacheCallback = this.eventCache[eventName].callback
                if (cacheCallback.toString() === callback.toString()) return
                console.warn("重复添加左键点击事件" + modules)
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
                        callback_event = this.eventCache[eventName]
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
            } else {
                let cacheCallback = this.eventCache[eventName].callback
                if (cacheCallback.toString() === callback.toString()) return
                console.warn("重复添加右键点击事件" + modules)
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
                        callback_event = this.eventCache[eventName]
                    }
                    callback_event.callback.call(this, transform)
                }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
            } else {
                let cacheCallback = this.eventCache[eventName].callback
                if (cacheCallback.toString() === callback.toString()) return
                console.warn("重复添加鼠标移动事件" + modules)
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
                console.warn("重复添加场景更新渲染事件" + modules)
            }
        } else {
            console.warn("模块不能为空")
        }
    }

    EarthEvent.prototype.preRenderHtml = function (modules, objectList, lon = "lon", lat = "lat", callback) {
        let _this = this
        function upDateHtmlPos() {
            if (Array.isArray(objectList) && objectList.length) {
                objectList.forEach(item => {
                    let position = lodash.cloneDeep(item.position)
                    if (!position) {
                        if (!item[lon] || !item[lat]) return
                        position = Cesium.Cartesian3.fromDegrees(item[lon], item[lat])
                    }
                    if (position instanceof Cesium.Cartesian3) {
                        // 将笛卡尔坐标中的位置转换为canvas坐标。这通常用于将HTML元素放置在与场景中的对象相同的屏幕位置。
                        item.screenPosition = _this.earth.scene.cartesianToCanvasCoordinates(position)
                        let domEl = document.getElementById(item.id)
                        if (domEl) {
                            domEl.style.left = item.screenPosition.x + "px"
                            domEl.style.top = item.screenPosition.y + "px"
                        }
                    }
                })
            }

            if (callback) callback.call(this, objectList)
        }

        this.onPreRender(modules, upDateHtmlPos)
    }

    EarthEvent.prototype.preRenderRuler = function (modules, callback) {
        let barWidth, distanceLabel
        let _this = this
        function cesiumScale() {
            var geodesic = new Cesium.EllipsoidGeodesic();
            var distances = [
                1,
                2,
                3,
                5,
                10,
                20,
                30,
                50,
                100,
                200,
                300,
                500,
                1000,
                2000,
                3000,
                5000,
                10000,
                20000,
                30000,
                50000,
                100000,
                200000,
                300000,
                500000,
                1000000,
                2000000,
                3000000,
                5000000,
                10000000,
                20000000,
                30000000,
                50000000
            ];
            // Find the distance between two pixels at the bottom center of the screen.
            let scene = _this.earth.viewer.scene;
            let width = scene.canvas.clientWidth;
            let height = scene.canvas.clientHeight;

            let left = scene.camera.getPickRay(
                new Cesium.Cartesian2((width / 2) | 0, height - 1)
            );
            let right = scene.camera.getPickRay(
                new Cesium.Cartesian2((1 + width / 2) | 0, height - 1)
            );

            let globe = scene.globe;
            let leftPosition = globe.pick(left, scene);
            let rightPosition = globe.pick(right, scene);
            if (!Cesium.defined(leftPosition) || !Cesium.defined(rightPosition)) {
                barWidth = undefined;
                distanceLabel = undefined;
                return;
            }

            let leftCartographic = globe.ellipsoid.cartesianToCartographic(
                leftPosition
            );
            let rightCartographic = globe.ellipsoid.cartesianToCartographic(
                rightPosition
            );

            geodesic.setEndPoints(leftCartographic, rightCartographic);
            let pixelDistance = geodesic.surfaceDistance;

            // Find the first distance that makes the scale bar less than 100 pixels

            let maxBarWidth = 100;
            let distance;
            for (let i = distances.length - 1; !Cesium.defined(distance) && i >= 0; --i) {
                if (distances[i] / pixelDistance < maxBarWidth) {
                    distance = distances[i];
                }
            }

            if (Cesium.defined(distance)) {
                var label =
                    distance >= 1000
                        ? (distance / 1000).toString() + " km"
                        : distance.toString() + " m"
                barWidth = (distance / pixelDistance) | 0;
                distanceLabel = label;
            } else {
                barWidth = undefined;
                distanceLabel = undefined;
            }

            callback.call(this, barWidth, distanceLabel)
        }
        this.onPreRender(modules, cesiumScale)
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
                    let listener = this.eventCache[delModule]?.listener
                    listener && this.earth.scene.preRender.removeEventListener(listener)
                } else {
                    this.handler.removeInputAction(SpaceEventType[eventType])
                }
                delete this.eventCache[delModule]
            } else {
                let types = Object.keys(EventType)
                types.map(type => {
                    delModule = module + type
                    if (EventType[type] === EventType.preRender) {
                        let listener = this.eventCache[delModule]?.listener
                        listener && this.earth.scene.preRender.removeEventListener(listener)
                    } else {
                        this.handler.removeInputAction(SpaceEventType[eventType])
                    }
                    delete this.eventCache[delModule]
                })
            }
        }
    }


    return EarthEvent

})()


export default EarthEvent














