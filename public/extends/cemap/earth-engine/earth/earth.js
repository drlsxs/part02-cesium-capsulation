import EarthConfig from '@p/extends/cemap/earth-engine/config/earth/configIndex.js'

/**
 * @module Earth
 * @description 地球构造器
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
const { Viewer } = window.Cesium;
import earthExtend from '@p/extends/cemap/earth-engine/earth/earthExtend.js'
import { InitViewMode } from '@p/extends/cemap/earth-engine/config/earth/types.js'
import { Object_assign } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'
import Assets from '@p/extends/cemap/earth-engine/config/assets/assetsIndex.js'
import EarthEvent from '@p/extends/cemap/earth-engine/event/earthEvent.js'
import EventType from '@p/extends/cemap/earth-engine/event/eventType.js'
import ScaleRuler from '@p/extends/cemap/earth-engine/earth/widgets/ruler.js'
var Earth = (function () {
    /**
     * 地球构造器，初始化
     * @constructor
     * @param id{String} id
     * @param options{EarthConfig} 参数
     */
    function Earth(id, options) {
        this.viewer = void 0
        this.scene = void 0
        this.camera = void 0
        this.primitives = void 0
        this.id = id || "default";
        this.options = options;
        this.event = void 0
        this.widgetContainer = void 0
        // 获取合并配置
        this.mergeEarthOptions()
        // 初始化地图
        this.initEarth()
        // 配置地球扩展方法
        earthExtend.call(this)
        // 配置属性
        configureEarthProperties.call(this);
        // 配置地球设置的参数
        this.configEarthMergedOption()
        // 监听地球配置改变
        this.watchEarthOptions()
        // 将地球实例缓存
        Earth.instances[this.id] = this;
    }

    Earth.instances = {};

    function configureEarthProperties() {
        Object.defineProperties(this, {
            id: {
                configurable: false,
                writable: false,
            },
        });
    }


    Earth.prototype.initEarth = function () {
        this.viewer = new Viewer(this.options.el, this.options)
        this.scene = this.viewer.scene;
        this.camera = this.viewer.camera
        this.primitives = this.scene.primitives
        this.event = new EarthEvent(this)
    }

    // 合并默认配置和自定义配置
    Earth.prototype.mergeEarthOptions = function () {
        let defaultOptions = new EarthConfig()
        this.options = Object_assign(defaultOptions, this.options)
    }

    Earth.prototype.configEarthMergedOption = function () {
        this.configViewer()
        this.configCamara()
        this.configScene()
        this.toggleOption()
    }

    Earth.prototype.configViewer = function () {
        // 隐藏时钟元素
        if (this.options.animation) {
            /**
             * @type {HTMLElement}
             */
            let animationEl = this.viewer.animation.container
            animationEl.style.visibility = "hidden"
        }
        // 隐藏时间线元素
        if (this.options.timeline) {
            /**
             * @type {HTMLElement}
             */
            let timelineEl = this.viewer.timeline.container
            timelineEl.style.visibility = "hidden"
        }
        // 隐藏版权信息
        let creditContainer = this.viewer.creditDisplay.container
        creditContainer.style.visibility = "hidden"
        // 插入窗体容器
        let widgetContainer = `<div class='${ this.options.widgetClassName }'></div>`
        this.viewer.container.insertAdjacentHTML("beforeend", widgetContainer)
        this.widgetContainer = this.viewer.container.querySelector(`.${ this.options.widgetClassName }`)
        // 引入css样式
        if (!document.getElementById(this.options.linkId)) {
            let cssLink = document.createElement("link")
            cssLink.id = this.options.linkId
            cssLink.rel = "stylesheet"
            cssLink.type = "text/css"
            cssLink.href = Assets.Css
            document.head.append(cssLink)
        }

    }

    Earth.prototype.configCamara = function () {
        // 相机配置
        let { defaultView, initViewMode } = this.options
        if (defaultView && defaultView.lon && defaultView.lat) {
            let { lon, lat, alt, heading, pitch, roll } = defaultView
            // 如果是飞行
            if (initViewMode === InitViewMode.Fly) {
                this.cameraFlyTo( lon, lat, alt, heading, pitch, roll)
            }else if (initViewMode === InitViewMode.SetView) {
                this.cameraSetView(lon, lat, alt, heading, pitch, roll)
            }
        }
    }

    Earth.prototype.configScene = function () {

    }

    // 支持切换的配置
    Earth.prototype.toggleOption = function () {
        // 在地图上的目标移入显示手形鼠标
        if (this.options.showPointerAtTarget) {
            this.event.onMouseMove("default", (data) => {
                if (data.target) {
                    document.body.style.cursor = "pointer"
                } else {
                    document.body.style.cursor = "initial"
                }
            })
        } else {
            this.event.removeEvent(EventType.mouseMove, "default")
            document.body.style.cursor = "initial"
        }
        // 比例尺
        if (this.options.showRuler) {
            if (this.widgetContainer) {
                this.ruler = new ScaleRuler(this)
            }
        } else {
            this.ruler && this.ruler.remove()
        }

        // 地形检测
        this.scene.globe.depthTestAgainstTerrain = this.options.depthTestAgainstTerrain
        // 抗锯齿
        this.scene.postProcessStages.fxaa.enabled = this.options.fxaa;
    }

    // proxy 检测配置属性改变
    Earth.prototype.watchEarthOptions = function () {
        let _this = this
        this.options = new Proxy(this.options, {
            set(target, p, newValue, receiver) {
                // 先修改配置
                target[p] = newValue
                // 更新配置
                _this.toggleOption()
                // set返回假值（Falsy）, 使用Reflect来代替返回Falsy值，解决报错
                return Reflect.set(target, p, newValue)
            }
        })
    }


    /**
     * 获取地球实例
     * @param Id {String} 地球实例Id
     * @returns {Earth} 返回地球实例
     */
    Earth.getInstance = function (Id) {
        return Earth.instances[Id || "default"];
    }


    window.Earth = Earth;
    return Earth


})();

export default Earth;
