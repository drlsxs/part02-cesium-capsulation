import Earth from "@p/extends/cemap/earth-engine/earth/earth.js";

/**
 * 初始化地球实例
 * @returns {Earth}
 * @param [id] {String} 地球实例Id
 * @param [option] {Object} 初始化参数
 */
function useEarth(id, option) {
    let earth = Earth.getInstance(id);
    if (earth) return earth;
    earth = new Earth(id, option);
    return earth;
}

/**
 * 返回当前this
 * @param [_this1]
 * @param [_this2]
 * @returns {Earth|Object}
 * @constructor
 */
let This = function (_this1, _this2) {
    if (_this1 === void 0) {
        _this1 = useEarth()
    } else if (!(_this1 instanceof Earth)) {
        if (_this2) {
            if (_this2 instanceof Earth) {
                _this1 = useEarth(_this2.id)[_this1]
            } else {
                _this1 = _this2
            }
        } else {
            _this1 = useEarth()[_this1]
        }
    }
    return _this1
}


/**
 * 相机飞行
 * @param lon {number} 经度
 * @param lat {number} 纬度
 * @param [alt] {number} 高度
 * @param [heading] {number} 朝向
 * @param [pitch] {number} 俯仰
 * @param [roll] {number} 旋转
 * @param [duration] {number} 飞行时间
 */
function cameraFlyTo(lon,lat,alt = 1000000,heading = 0,pitch = -90,roll = 0,duration = 1.5) {

    This(this).viewer.camera.flyTo({
        // 位置
        destination: window.Cesium.Cartesian3.fromDegrees(lon, lat, alt),
        orientation: {
            // 朝向
            heading: window.Cesium.Math.toRadians(heading),
            // 俯仰
            pitch: window.Cesium.Math.toRadians(pitch),
            // 旋转
            roll: window.Cesium.Math.toRadians(roll),
        },
        // 时间
        duration: duration,
    });

}

export {
    useEarth,
    cameraFlyTo,
    This
}
