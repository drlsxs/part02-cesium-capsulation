import Label from '@p/extends/cemap/earth-engine/base/label.js'
import Billboard from '@p/extends/cemap/earth-engine/base/billboard.js'

var SimpleLayer = (function () {
    function SimpleLayer(earth) {
        this.labels = new Label(earth)
        this.billboards = new Billboard(earth)
        this.simples = {}
    }

    SimpleLayer.prototype.addSimple = function (data) {
        let _b =  this.billboards.addBillboard(data)
        // 获取图片的宽高
        let width = _b.width / 2,
            height = _b.height / 2
        let _a =  this.labels.addLabel(
            Object.assign(data,
                {width,height}
            )
        )
        this.simples[data.id] = {
            id: data.id,
            label: _a,
            billboard: _b,
            data: data,
        }
        this.simples[data.id].remove = remove.bind(this.simples[data.id], this)
        return this.simples[data.id]
    }

    SimpleLayer.prototype.removeSimple = function (id) {
        this.labels.remove(id)
        this.billboards.remove(id)
        delete this.simples[id]
    }

    SimpleLayer.prototype.getSimple = function (id) {
        return this.simples[id]
    }

    function remove(simple) {
        simple.labels.remove(this.id)
        simple.billboards.remove(this.id)
        delete simple.simples[this.id]
    }

    return SimpleLayer


})()

export default SimpleLayer












