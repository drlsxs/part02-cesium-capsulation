
/**
 * @module Terrain
 * @description 地形控制器
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
var Terrain = (function () {
    function Terrain(earth) {
        this.earth = earth
    }

    /**
     * 从Cesium ion 资源中创建全球地球
     * @returns {Promise<void>}
     */
    Terrain.prototype.addTerrainFromId = async function (id) {
        let terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(id, {
            requestVertexNormals: true,
        })
        this.earth.viewer.terrainProvider = terrainProvider
    }

    /**
     * 从url地形数据创建全球地球
     * @returns {Promise<void>}
     */
    Terrain.prototype.addTerrainFromUrl = async function (url) {
        let terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(url, {
            requestVertexNormals: true,
        })
        this.earth.viewer.terrainProvider = terrainProvider

    }


    return Terrain
})()

export default Terrain
