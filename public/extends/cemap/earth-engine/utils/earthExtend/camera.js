import { This } from '@p/extends/cemap/use/useEarth.js'
import { Cartesian3, BoundingSphere } from "cesium"

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
function cameraFlyTo(lon,lat,alt = 9000000,heading = 0,pitch = -90,roll = 0,duration = 1.5) {

    This(this).camera.flyTo({
        // 位置
        destination: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
        orientation: {
            // 朝向
            heading: Cesium.Math.toRadians(heading),
            // 俯仰
            pitch: Cesium.Math.toRadians(pitch),
            // 旋转
            roll: Cesium.Math.toRadians(roll),
        },
        // 时间
        duration: duration,
    });

}

/**
 * 设置相机视角
 * @param lon {number} 经度
 * @param lat {number} 纬度
 * @param [alt] {number} 高度
 * @param [heading] {number} 朝向
 * @param [pitch] {number} 俯仰
 * @param [roll] {number} 旋转
 */
function cameraSetView(lon, lat, alt = 9000000, heading = 0, pitch = -90, roll = 0) {
    This(this).camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
        orientation: {
            // 朝向
            heading: Cesium.Math.toRadians(heading),
            // 俯仰
            pitch: Cesium.Math.toRadians(pitch),
            // 旋转
            roll: Cesium.Math.toRadians(roll),
        },
    })
}

/**
 * 将相机飞到当前视图包含所提供的包围球的位置。
 * @param boundingSphere {Cartesian3 | BoundingSphere}
 * @param duration
 * @param offset
 * @param complete
 * @param cancel
 * @param advanceParams
 */
function cameraFlyBoundingSphere(boundingSphere, duration = 1.5, offset, complete, cancel, advanceParams = {}) {
    This(this).camera.flyToBoundingSphere(boundingSphere, {
        duration,
        offset,
        complete,
        cancel,
        ...advanceParams
    })
}



function initCamera() {
    this.cameraFlyTo = cameraFlyTo
    this.cameraSetView = cameraSetView
    this.cameraFlyBoundingSphere = cameraFlyBoundingSphere
}




export default initCamera

