import Earth from "@p/extends/cemap/earth-engine/earth/earth.js";

/**
 * 初始化地球实例
 * @returns {Earth}
 * @param [id] {String} 地球实例Id
 * @param [option] {EarthConfig} 初始化参数
 */
function useEarth(id, option) {
    let earth = Earth.getInstance(id);
    if (earth) return earth;
    earth = new Earth(id, option);
    return earth;
}



/**
 * 返回当前this
 * @param [_this1]
 * @param [_this2]
 * @returns {Earth|Object}
 * @constructor
 */
let This = function (_this1, _this2) {
    if (_this1 === void 0) {
        _this1 = useEarth()
    } else if (!(_this1 instanceof Earth)) {
        if (_this2) {
            if (_this2 instanceof Earth) {
                _this1 = useEarth(_this2.id)[_this1]
            } else {
                _this1 = _this2
            }
        } else {
            _this1 = useEarth()[_this1]
        }
    }
    return _this1
}


export {
    useEarth,
    This,
}
