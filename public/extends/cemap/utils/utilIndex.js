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
        if (id.includes("@")) console.error("id不能包含@符号")
        typeof modules === 'string' && modules.length  ? id = `${ id }@${ modules }` : void 0
        return id
    } catch (e){
        console.error(e)
    }
}

/**
 * 解码id
 * @param id
 * @returns {{id, modules: string}}
 */
function decodeId(id) {
    try {
        let ids = id.split("@")
        id = ids[0]
        ids.splice(0, 1)
        let modules = ids.join("@")
        return {
            id: id,
            modules: modules ? modules : void 0,
        }
    } catch (e){
        console.error(e)
    }
}

/**
 * 从缓存中获取模块
 * @param obj
 * @param modules{string} 模块用@分割
 */
function getModule(obj,modules) {
    let list = []
    for (let objKey in obj) {
        let encodeId = decodeId(objKey)
        if (encodeId.modules === modules) {
            list.push(objKey)
        }
    }
    return list

}

function Object_assign (target, ...sources) {
    sources.forEach(source => {
        Object.keys(source).forEach(key => {
            const s_val = source[key]
            const t_val = target[key]
            target[key] = typeof s_val === 'object'
                ? Object_assign(t_val, s_val)
                : s_val
        })
    })
    return target
}

export {
    generatePosition,
    genUUid,
    encodeId,
    decodeId,
    getModule,
    Object_assign
}





