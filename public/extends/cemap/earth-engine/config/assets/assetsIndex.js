
/**
 * 静态资源路径
 */
const AssetBasePath = "/extends/cemap/assets/"


var Assets = (function (assets) {
    assets["Image"] = AssetBasePath + "images/"
    assets["Css"] = AssetBasePath + "css/map.css"
    return assets
})({})

export default Assets

