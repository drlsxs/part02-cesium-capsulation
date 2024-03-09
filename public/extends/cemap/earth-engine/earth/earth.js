/**
 * @module Earth
 * @description 地球构造器
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
const { Viewer } = window.Cesium;
import initAll from '@p/extends/cemap/utils/initUtilsIndex.js'


var Earth = (function () {
    /**
     * 地球构造器，初始化
     * @constructor
     * @param id{String} id
     * @param options{Object} 参数
     */
    function Earth(id, options) {
        // 视图
        this.viewer = void 0
        this.scene = void 0
        this.primitives = void 0
        this.id = id ? id : "default";
        this.options = options;
        // 初始化地图
        initEarth.call(this);
        // 将地球实例缓存
        Earth.instances[this.id] = this;
        // 配置属性
        configureProperties.call(this);
        // 初始化工具
        initAll.call(this)
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
        var creditContainer = document.createElement('div');
        this.viewer = new Viewer(this.options?.el || "cesiumContainer", {
            // 隐藏和禁用各种默认控件和组件
            animation: false, // 动画控制器
            baseLayerPicker: false, // 底图选择器
            fullscreenButton: false, // 全屏按钮
            geocoder: false, // 地址搜索框
            homeButton: false, // 家按钮（返回初始视图）
            infoBox: false, // 信息框（鼠标悬停提示信息）
            sceneModePicker: false, // 场景模式选择器（2D/3D/Columbus View）
            selectionIndicator: false, // 选中对象指示器
            timeline: false, // 时间线控制条
            navigationHelpButton: false, // 导航帮助按钮
            navigationInstructionsInitiallyVisible: false, // 不显示导航说明
            // 确保相机视角为纯地球视角，不包含其他元素
            automaticallyTrackDataSourceClocks: false,
            // 移除Cesium Ion logo
            creditContainer: creditContainer,
            shouldAnimate: true,
            // terrain: Cesium.Terrain.fromWorldTerrain(),
        })
        this.scene = this.viewer.scene;
        this.primitives = this.scene.primitives

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
