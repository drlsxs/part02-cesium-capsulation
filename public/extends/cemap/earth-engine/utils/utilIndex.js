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

/**
 * 解决合并对象属性会覆盖问题
 * @param target
 * @param sources
 * @returns {*}
 */
function Object_assign (target, ...sources) {
    if (!sources[0]) return target
    sources.forEach(source => {
        Object.keys(source).forEach(key => {
            const s_val = source[key]
            const t_val = target[key]
            target[key] = typeof s_val === 'object' ? Object_assign(t_val, s_val) : s_val
        })
    })
    return target
}

/**
 * 实例控制工具函数
 * @param Fun{Function}
 * @param Id{string}
 * @param single{Boolean}
 * @param instance{Object}
 * @returns {*}
 */
function instanceManage(Fun,Id,single,instance) {
    if (!Fun.instances) {
        Fun.instances = {}
    }

    Fun.getInstance = function () {
        return Fun.instances[Id || "default"]
    }
    Fun.setInstance = function () {
        Fun.instances[Id] = instance
    }

    if (single) {
        if (Fun.getInstance()) {
            return Fun.getInstance()
        } else {
            Fun.setInstance()
        }
    }



}

/**
 * 从线条字符串中生成线
 * @param linStr{string}
 * @return {Array<Cartesian3>}
 * @example
 * let lineStr = "123,23;135,28"
 * let lineArr =  genLineStr(lineStr)
 * 返回 [Cartesian3,Cartesian3]
 *
 *
 */
function genLineStr(linStr) {
    /**
     * @type{Array}
     */
    let list = []
    let linList = linStr.split(";")
    if (linList && linList.length) {
        linList.map(line => {
            line = line.split(",")
            if (line && line.length) {
                let lon = Number(line[0])
                let lat = Number(line[1])
                let alt = line[2] ? Number(line[2]) : 0
                let cartesian3 = Cesium.Cartesian3.fromDegrees(lon, lat, alt)
                list.push(cartesian3)
            }
        })
    }
    return list
}

/**
 * 从列表中返回线条卡迪尔数组
 * @param data {Array}
 * @param lon
 * @param lat
 * @param alt
 * @return {Array<Cartesian3>}
 */
function genLineList(data, lon = "lon", lat = "lat", alt = "alt") {
    let list = []
    if (!data) return list
    data.map(item => {
        let ilon = Number(item[lon])
        let ilat = Number(item[lat])
        let ialt = item[alt] ? Number(item[alt]) : 0
        let cartesian3 = Cesium.Cartesian3.fromDegrees(ilon, ilat, ialt)
        list.push(cartesian3)
    })
    return list
}

/**
 * 返回随机位置和颜色的线条，可设置固定高度，和经纬度范围
 * @param startLng{number}
 * @param startLat{number}
 * @param [height]{number}
 * @returns {{positions: Cartesian3[], colors: Color[]}}
 */
function genRandomLine(startLng, startLat, height) {

    const positions = [];
    const colors = [];

    for (let j = 0; j <= 50; j += 5) {
        positions.push(
            Cesium.Cartesian3.fromDegrees(startLng + j, startLat, height === 0 ? height : height ? height : 50000.0 * (j % 10))
        );
        colors.push(Cesium.Color.fromRandom({ alpha: 1.0 }));
    }

    return { positions, colors }

}


export {
    generatePosition,
    genUUid,
    encodeId,
    decodeId,
    getModule,
    Object_assign,
    instanceManage,
    genLineStr,
    genLineList,
    genRandomLine
}





