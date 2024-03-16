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
import lodash from "lodash"
import Assets from '@p/extends/cemap/earth-engine/config/assets/assetsIndex.js'
var Earth = (function () {
    /**
     * 地球构造器，初始化
     * @constructor
     * @param id{String} id
     * @param options{EarthConfig} 参数
     */
    function Earth(id, options) {
        // 视图
        this.viewer = void 0
        this.scene = void 0
        this.camera = void 0
        this.primitives = void 0
        this.id = id || "default";
        this.options = options;
        this.widgetContainer = void 0
        // 初始化地图
        this.initEarth()
        // 配置属性
        configureProperties.call(this);
        // 将地球实例缓存
        Earth.instances[this.id] = this;
    }

    Earth.instances = {};

    function configureProperties() {
        Object.defineProperties(this, {
            id: {
                configurable: false,
                writable: false,
            },
        });
    }

    Earth.prototype.initEarth = function () {
        // 获取合并配置
        this.mergeOptions()
        this.viewer = new Viewer(this.options.el, this.options)
        this.scene = this.viewer.scene;
        this.camera = this.viewer.camera
        this.primitives = this.scene.primitives
        // 初始化工具
        earthExtend.call(this)
        // 初始化地球参数
        this.setEarthMergedOption()
    }

    Earth.prototype.mergeOptions = function () {
        let defaultOptions = new EarthConfig()
        this.options = Object_assign(defaultOptions, this.options)
    }

    Earth.prototype.setEarthMergedOption = function () {
        this.setViewer()
        this.setCamara()
        this.setScene()
    }

    Earth.prototype.setViewer = function () {
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
        let widgetContainer = `<div class='${this.options.widgetClassName}'></div>`
        this.viewer.container.insertAdjacentHTML("beforeend", widgetContainer)
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

    Earth.prototype.setCamara = function () {
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

    Earth.prototype.setScene = function () {
        // 地形检测
        this.scene.globe.depthTestAgainstTerrain = this.options.depthTestAgainstTerrain
        // 抗锯齿
        this.scene.postProcessStages.fxaa.enabled = this.options.fxaa;
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
