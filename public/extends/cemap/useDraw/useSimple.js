import Label from '@p/extends/cemap/earth-engine/base/label.js'
import Billboard from '@p/extends/cemap/earth-engine/base/billboard.js'
import { This } from '@p/extends/cemap/useEarth/useEarth.js'

function addSimple(data) {
    let _this = This(UseSimple, this)
    let _b =  _this.billboards.addBillboard(data)
    // 获取图片的宽高
    let width = _b._width / 2,
        height = _b._height / 2
    let _a =  _this.labels.addLabel(
        Object.assign(data,
            {width,height}
        )
    )
    _this.simples[data.id] = {
        id: data.id,
        label: _a,
        billboard: _b,
        data: data,
    }
    _this.simples[data.id].remove = remove.bind(_this.simples[data.id], _this)
    return _this.simples[data.id]
}

function removeSimple(data) {
    let _this = This(UseSimple, this)
    _this.labels.remove(data)
    _this.billboards.remove(data)
    delete _this.simples[data]
}

function remove(simple) {
    simple.labels.remove(this.id)
    simple.billboards.remove(this.id)
    delete simple.simples[this.id]
}


function UseSimple(earth) {
    // 不要再新建实例，使用原来的实例
    this.labels = earth.useLabel.labels
    this.billboards = earth.useBillboard.billboards
    this.simples = {}
}

UseSimple.title = "useSimple"
UseSimple.prototype = {
    addSimple: addSimple,
    removeSimple: removeSimple,
}

export default UseSimple
export {
    addSimple,
    removeSimple
}












