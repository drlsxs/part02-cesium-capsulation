export interface EarthConfig {
    // 挂载元素
    el?: string;
    animation?: boolean, // 动画控制器
    baseLayerPicker?: boolean, // 底图选择器
    fullscreenButton?: boolean, // 全屏按钮
    geocoder?: boolean, // 地址搜索框
    homeButton?: boolean, // 家按钮（返回初始视图）
    infoBox?: boolean, // 信息框（鼠标悬停提示信息）
    sceneModePicker?: boolean, // 场景模式选择器（2D/3D/Columbus View）
    selectionIndicator?: boolean, // 选中对象指示器
    timeline?: boolean, // 时间线控制条
    navigationHelpButton?: boolean, // 导航帮助按钮
    navigationInstructionsInitiallyVisible?: boolean, // 不显示导航说明
    // 确保相机视角为纯地球视角，不包含其他元素
    automaticallyTrackDataSourceClocks?: boolean,
    // =========================相机配置==================================
    defaultView?: {
        lon?: number,
        lat?: number,
        alt?: number,
        heading?: number,
        pitch?: number,
        roll?: number,
    };
    // 初始化视图模式
    initViewMode?: string;
    //==========================场景配置==================================
    // 深度地形检测
    depthTestAgainstTerrain: boolean;
    // 开启抗锯齿
    fxaa: boolean;
    //===========================实例配置==================================
    // 开启 所有封装的构造函数返回同一个实例 反之返回新实例
    singleInstance: boolean;

}


