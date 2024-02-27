const tdtTk = "fa16e0c4bc5e5106d74609935e155b9d"
const LayerData = [
    {
        code: "gdimg",
        url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        method: "addGdImgImgLayer"
    },
    {
        code: "gdvec",
        url: "https://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
        method: "addGdVecImgLayer",
    },
    {
        code: "gdanno",
        url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        method: "addGdAnnotationLayer",
    },
    {
        code: "arcgisimg",
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
        method: "addArcgisImgImgLayer",
    },
    {
        code: "arcgisblue",
        url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
        method: "addArcgisBlueStreetImgLayer",
    },
    {
        code: "tdtimg",
        url: "http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + tdtTk,
        method: "addTdtImgImgLayer",
    },
    {
        code: "tdtvec",
        url: "http://t0.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + tdtTk,
        method: "addTdtVecImgLayer",
    },
    {
        code: "tdtvecanno",
        url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + tdtTk,
        method: "addTdtVecAnnotationLayer",
    },
    {
        code: "tdtimganno",
        url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + tdtTk,
        method: "addTdtImgAnnotationLayer",
    },
]

/**
 * 根据code获取对应图层详情
 * @param code
 * @returns {Object}
 */
function getLayer(code) {
    return LayerData.find(item => item.code === code)
}

export default getLayer
