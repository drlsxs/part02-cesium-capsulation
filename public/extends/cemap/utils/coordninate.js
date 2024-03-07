import {Cartesian2,Cartographic,} from 'cesium'
import Earth from '@p/extends/cemap/earth-engine/earth/earth.js'
import { decodeId } from '@p/extends/cemap/utils/utilIndex.js'

/**
 *
 * @param screenPosition {Cartesian2}
 * @param earth {Earth}
 * @returns {{cartographic: Cartographic, coordinate: {alt: number, lon: number, lat: number}, screenPosition, feature: *, cartesian3: Cartesian3, id: *, modules: *}|{cartographic: *, coordinate: *, screenPosition, cartesian3: Cartesian3}}
 */
function screenPositionTransform(screenPosition,earth) {
    let coordinate = void 0
    let cartographic = void 0
    let feature = void 0
    let id = void 0
    let modules = void 0
    // 地球椭球体
    let ellipsoid = earth.viewer.scene.globe.ellipsoid
    // 在世界坐标中，通过像素位置windowPosition，从相机位置创建一条射线。
    let ray = earth.viewer.camera.getPickRay(screenPosition)
    // 拾取射线与地球表面的交点。射线必须以世界坐标表示。
    let cartesian3 = earth.viewer.scene.globe.pick(ray, earth.scene)
    if (!cartesian3) {
        return {
            screenPosition,
            cartesian3,
            cartographic,
            coordinate,
        }
    }
    // 返回一个带有“primitive”属性的对象，该属性包含场景中位于特定窗口坐标处的第一个图元（顶部），如果该位置没有任何内容，则返回undefined。 其他属性可能根据图元的类型进行设置，并可能用于进一步标识选中的对象。
    feature = earth.viewer.scene.pick(screenPosition)
    // 判断给定的对象是否未定义。
    if (Cesium.defined(feature)) {
        let encodeId = decodeId(feature.id)
        id = encodeId.id
        modules = encodeId.modules
    }

    // 从笛卡尔坐标位置创建一个新的Cartographic实例。结果对象中的值将以弧度表示。
    cartographic = Cesium.Cartographic.fromCartesian(cartesian3, ellipsoid)
    // 将弧度转为坐标
    let lon = Cesium.Math.toDegrees(cartographic.longitude)
    let lat = Cesium.Math.toDegrees(cartographic.latitude)
    let alt = Cesium.Math.toDegrees(cartographic.height)
    coordinate = {lon,lat, alt}
    return {
        screenPosition,
        cartesian3,
        cartographic,
        coordinate,
        id,
        modules,
        feature
    }
}

export {
    screenPositionTransform
}
