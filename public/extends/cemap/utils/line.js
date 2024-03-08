import {Cartesian3,Color} from "cesium"
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
    genLineStr,
    genLineList,
    genRandomLine
}
