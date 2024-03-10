import EarthConfig from '@p/extends/cemap/earth-engine/config/earth/configIndex.js'

/**
 * @module Earth
 * @description 地球构造器
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
const { Viewer } = window.Cesium;
import initAll from '@p/extends/cemap/utils/initUtilsIndex.js'
import { cameraFlyTo, setView } from '@p/extends/cemap/useEarth/useEarth.js'
import { InitViewMode } from '@p/extends/cemap/earth-engine/config/earth/types.js'
import { Object_assign } from '@p/extends/cemap/utils/utilIndex.js'


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
        this.primitives = void 0
        this.id = id || "default";
        this.options = options;
        // 初始化地图
        initEarth.call(this);
        // 初始化工具
        initAll.call(this)
        // 配置属性
        configureProperties.call(this);
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

    function initEarth() {
        // 获取合并配置
        let options = this.mergeOptions()
        this.viewer = new Viewer(this.options.el || "cesiumContainer", options)
        // 初始化地球参数
        this.setEarthMergedOption(options)
        this.scene = this.viewer.scene;
        this.primitives = this.scene.primitives
        // 将地球实例缓存
        Earth.instances[this.id] = this;
    }

    /**
     * 合并默认选项和自定义选项
     * @returns{EarthConfig}
     */
    Earth.prototype.mergeOptions = function () {
        let defaultOptions = new EarthConfig()
        let sources = JSON.parse(JSON.stringify(this.options))
        return Object_assign(defaultOptions, sources)
    }




    /**
     * 设置合并后的选项
     * @param options {EarthConfig}
     */
    Earth.prototype.setEarthMergedOption = function (options) {
        this.setViewer(options)
        this.setCamara(options)
        this.setScene(options)
    }

    /**
     * 设置viewer
     * @param options {EarthConfig}
     */
    Earth.prototype.setViewer = function (options) {
        // 隐藏时钟元素
        if (options.animation) {
            /**
             * @type {HTMLElement}
             */
            let animationEl = this.viewer.animation.container
            animationEl.style.visibility = "hidden"
        }
        // 隐藏时间线元素
        if (options.timeline) {
            /**
             * @type {HTMLElement}
             */
            let timelineEl = this.viewer.timeline.container
            timelineEl.style.visibility = "hidden"
        }
        // 隐藏版权信息
        let creditContainer = this.viewer.creditDisplay.container
        creditContainer.style.visibility = "hidden"
    }

    /**
     * 设置相机
     * @param options {EarthConfig}
     */
    Earth.prototype.setCamara = function (options) {
        // 相机配置
        let { defaultView, initViewMode } = options
        if (defaultView && defaultView.lon && defaultView.lat) {
            let { lon, lat, alt, heading, pitch, roll } = defaultView
            // 如果是飞行
            if (initViewMode === InitViewMode.Fly) {
                cameraFlyTo.call(this, lon, lat, alt, heading, pitch, roll)
            }else if (initViewMode === InitViewMode.SetView) {
                setView.call(this, lon, lat, alt, heading, pitch, roll)
            }
        }
    }

    /**
     * 设置场景
     * @param options {EarthConfig}
     */
    Earth.prototype.setScene = function (options) {



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
