import Earth from "@p/extends/cemap/earth-engine/earth/earth.js";

let earth;

/**
 * 初始化地球实例
 * @returns {Earth}
 * @param id {String} 地球实例Id
 * @param option {Object} 初始化参数
 */
function useEarth(id, option) {
    earth = new Earth(id, option);
    return earth;
}


/**
 * 设置当前地球实例
 * @param earthInstance {Earth} 地球实例
 */
function setThisEarth(earthInstance) {
    earth = earthInstance;
}


/**
 * 相机飞行
 * @param option {Object} 飞行参数
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

    earth.viewer.camera.flyTo({
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
    setThisEarth
};
