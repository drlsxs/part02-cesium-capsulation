import getLayer from '@p/extends/cemap/earth-engine/layer/constant.js'

/**
 * @module Layer
 * @description 图层控制器
 * @author ysl
 * @version 1.0.0
 * @license IMT
 */
var Layer = (function () {
    function Layer(earth) {
        this.imageryLayers = earth.viewer.imageryLayers
        this.layerCaches = {}
        earth.layer = this
    }

    Layer.prototype.removeAll = function () {
        this.imageryLayers.removeAll(true)
        this.layerCaches = {}
    }

    /**
     * 添加高德影像底图
     */
    Layer.prototype.addGdImgImgLayer = function () {
        let layer = getLayer("gdimg")
        let imageryProvider = new Cesium.UrlTemplateImageryProvider({
            url: layer.url
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加高德电子底图
     */
    Layer.prototype.addGdVecImgLayer = function () {
        let layer = getLayer("gdvec")
        let imageryProvider = new Cesium.UrlTemplateImageryProvider({
            url: layer.url
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加高德路网注记
     */
    Layer.prototype.addGdAnnotationLayer = function () {
        let layer = getLayer("gdanno")
        let imageryProvider = new Cesium.UrlTemplateImageryProvider({
            url: layer.url,
            minimumLevel: 3,
            maximumLevel: 18
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加arcgis影像底图
     */
    Layer.prototype.addArcgisImgImgLayer = function () {

        let layer = getLayer("arcgisimg")
        let imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
            url: layer.url
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加arcgis影像底图
     */
    Layer.prototype.addArcgisBlueStreetImgLayer = function () {

        let layer = getLayer("arcgisblue")
        let imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
            url: layer.url
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加天地图影像底图
     */
    Layer.prototype.addTdtImgImgLayer = function () {
        let layer = getLayer("tdtimg")
        let imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: layer.url,
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "tdtimg",
            show: true
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加天地图电子底图
     */
    Layer.prototype.addTdtVecImgLayer = function () {
        let layer = getLayer("tdtvec")
        let imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: layer.url,
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "tdtvec",
            show: true
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加天地图影像底图
     */
    Layer.prototype.addTdtImgAnnotationLayer = function () {
        let layer = getLayer("tdtimganno")
        let imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: layer.url,
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "tdtimg",
            show: true
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    /**
     * 添加天地图电子底图
     */
    Layer.prototype.addTdtVecAnnotationLayer = function () {
        let layer = getLayer("tdtvecanno")
        let imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
            url: layer.url,
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "tdtvec",
            show: true
        })
        this.imageryLayers.addImageryProvider(imageryProvider);
        // 缓存
        this.layerCaches[layer.code] = imageryProvider
    }

    return function (earth) {
        let layer = earth.layer
        if (!layer) {
            layer = new Layer(earth)
        }
        return layer
    }

})()

export default Layer
