const { Cartesian3 } = Cesium
/**
 * 生成随机位置
 * @param lon 经度
 * @param lat 纬度
 * @param num 数量
 * @returns {Cartesian3[]}
 */
function generatePosition(lon, lat, num) {
    let list = []
    for (let i = 0; i < num; i++) {
        let  lon1 = lon + Math.random() * 0.5
        let  lat1 = lat + Math.random() * 0.5
        list.push(new Cesium.Cartesian3.fromDegrees(lon1, lat1))
    }
    return list
}

/**
 * 生成随机uuid
 * @returns {`${string}-${string}-${string}-${string}-${string}`}
 */
function genUUid() {
    return window.crypto.randomUUID()
}

/**
 * 编码id
 * @param modules
 * @param id
 */
function encodeId(modules, id) {
    try {
        !id ? id = genUUid() : void 0
        modules && modules.length ? id = `${ id }@${ modules.join("@") }` : void 0
        return id
    } catch (e){
        console.error(e)
    }
}

/**
 * 解码id
 * @param id
 * @returns {{id, modules: []}}
 */
function decodeId(id) {
    try {
        let ids = id.split("@")
        id = ids[0]
        ids.splice(0, 1)
        return {
            id: id,
            modules: ids,
        }
    } catch (e){
        console.error(e)
    }
}

/**
 * 从缓存中获取模块
 * @param obj
 * @param modules {[]}
 */
function getModule(obj,modules) {
    let list = []
    for (let objKey in obj) {
        let encodeId = decodeId(objKey)
        if (encodeId.modules.join() === modules.join()) {
            list.push(objKey)
        }
    }
    return list

}

export {
    generatePosition,
    genUUid,
    encodeId,
    decodeId,
    getModule
}





