import Label from '@p/extends/cemap/earth-engine/base/label.js'
import Billboard from '@p/extends/cemap/earth-engine/base/billboard.js'

var Simple = (function () {
    function Simple(earth, single) {
        single === void 0 ? single = true : void 0
        this.labels = new Label(earth, single)
        this.billboards = new Billboard(earth, single)
        this.simples = {}
        if (single) earth.useSimple = this
    }

    Simple.prototype.addSimple = function (data) {
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

    Simple.prototype.removeSimple = function (id) {
        this.labels.remove(id)
        this.billboards.remove(id)
        delete this.simples[id]
    }

    function remove(simple) {
        simple.labels.remove(this.id)
        simple.billboards.remove(this.id)
        delete simple.simples[this.id]
    }

    /**
     * 调用
     * @param earth
     * @param single
     * @returns {*|Label}
     * @constructor
     */
    function CallSimple(earth,single) {
        let simple = earth.useSimple
        if (!simple) simple = new Simple(earth, single)
        single ? simple = earth.useSimple : simple = new Simple(earth, single)
        return simple
    }

    return CallSimple


})()

export default Simple












