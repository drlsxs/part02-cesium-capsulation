import { InitViewMode } from '@p/extends/cemap/earth-engine/config/earth/types.js'

var EarthConfig = (function () {
    function EarthConfig() {
        return {
            // 挂载元素
            el: "cesiumContainer",
            // 隐藏和禁用各种默认控件和组件
            animation: true, // 动画控制器
            baseLayerPicker: false, // 底图选择器
            fullscreenButton: false, // 全屏按钮
            geocoder: false, // 地址搜索框
            homeButton: false, // 家按钮（返回初始视图）
            infoBox: false, // 信息框（鼠标悬停提示信息）
            sceneModePicker: false, // 场景模式选择器（2D/3D/Columbus View）
            selectionIndicator: false, // 选中对象指示器
            timeline: true, // 时间线控制条
            navigationHelpButton: false, // 导航帮助按钮
            navigationInstructionsInitiallyVisible: false, // 不显示导航说明
            // 确保相机视角为纯地球视角，不包含其他元素
            automaticallyTrackDataSourceClocks: false,
            // 窗口类名
            widgetClassName: "custom-cesium-widget",
            // 样式文件id
            linkId: "cemap",
            // 在地图上的目标移入显示手形鼠标
            showPointerAtTarget: true,
            // =========================相机配置==================================
            defaultView: {
                lon: 106,
                lat: 30,
                alt: 9000000,
                heading:0,
                pitch: -90,
                roll: 0,
            },
            // 初始化视图模式
            initViewMode: InitViewMode.SetView,
            //==========================场景配置==================================
            // 深度地形检测
            depthTestAgainstTerrain: false,
            // 开启抗锯齿
            fxaa: true,
            //===========================实例配置==================================
            // 开启 所有封装的构造函数返回同一个实例 反之返回新实例
            singleInstance: true,
        }
    }
    return EarthConfig
})()

export default EarthConfig



