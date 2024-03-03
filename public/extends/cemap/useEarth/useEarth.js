import Earth from "@p/extends/cemap/earth-engine/earth/earth.js";

/**
 * 初始化地球实例
 * @returns {Earth}
 * @param id {String} 地球实例Id
 * @param option {Object} 初始化参数
 */
function useEarth(id, option) {
    let earth = Earth.getInstance(id);
    if (earth) return earth;
    earth = new Earth(id, option);
    return earth;
}

/**
 *
 * @param _this1
 * @param _this2
 * @returns 返回当前this
 * @constructor
 */
let This = function (_this1, _this2) {
    if (_this1 === void 0) {
        _this1 = useEarth()
    } else if (!(_this1 instanceof Earth)) {
        if (_this2) {
            if (_this2 instanceof Earth) {
                _this1 = useEarth(_this2.id)[_this1.title]
            } else {
                _this1 = _this2
            }
        } else {
            _this1 = useEarth()[_this1.title]
        }
    }
    return _this1
}


/**
 * 相机飞行
 * @param option {Object} 飞行参数
 *
 */
function cameraFlyTo(option) {

    let baseOP = {
        longitude: 116.39,
        latitude: 39.9,
        height: 1000,
        heading: 0,
        pitch: -90,
        roll: 0,
        duration: 1.5,
    };

    option = Object.assign(baseOP, option);

    This(this).viewer.camera.flyTo({
        destination: window.Cesium.Cartesian3.fromDegrees(option.longitude, option.latitude, option.height),
        orientation: {
            heading: window.Cesium.Math.toRadians(option.heading),
            pitch: window.Cesium.Math.toRadians(option.pitch),
            roll: window.Cesium.Math.toRadians(option.roll),
        },
        duration: option.duration,
    });

}

export {
    useEarth,
    cameraFlyTo,
    This
}
