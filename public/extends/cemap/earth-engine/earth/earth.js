/**
 * @module Earth
 * @description 地球构造器
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
import {setThisEarth} from "@p/extends/cemap/useEarth/useEarth.js";

const {Viewer} = window.Cesium;


var Earth = (function () {

    // 添加一个静态的地球实例缓存
    var earthInstance = {};

    /**
     * 地球构造器，初始化
     * @constructor
     * @param option {Object} 初始化参数
     */
    function Earth(id, options) {
        // 视图
        this.viewer = null;
        this.id = id;
        this.options = options;
        // 初始化地图
        this.initEarth(options);
        // 将地球实例缓存
        earthInstance[this.id] = this;


    }


    /**
     * 初始化地球
     * @param option {Object} 初始化参数
     */
    Earth.prototype.initEarth = function (option) {
        var creditContainer = document.createElement('div');
        this.viewer = new Viewer(option?.el || "cesiumContainer", {
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
            creditContainer: creditContainer
        })
    };

    /**
     * 获取地球实例
     * @param Id {String} 地球实例Id
     * @returns {*} 返回地球实例
     */
    Earth.getInstance = function (Id) {
        return earthInstance[Id];
    }

    Earth.setInstance = function (Id) {
        let earth = Earth.getInstance(Id);
        if (earth) {
            setThisEarth(earth);
        }
    }

    return Earth;


})();

export default Earth;
