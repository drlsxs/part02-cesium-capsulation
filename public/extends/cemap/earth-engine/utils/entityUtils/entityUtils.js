import { encodeId } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'

var EntityUtils = (function () {

    /**
     * @param earth
     * @return EntityUtils
     */
    function EntityUtils(earth) {
        this.earth = earth
        this.entities = this.earth.viewer.entities
        this.caches = {}
    }

    EntityUtils.prototype.addEntity = function (_data = {}) {
        if (_data && typeof _data === "object") {
            let id = _data["id"], modules = _data["modules"]
                id = encodeId(id, modules)
            if (this.caches[id]) {
                return console.warn("entity:" + id + "已存在")
            }
            delete _data["modules"]
            let entity = this.entities.add({
                id: id,
                ..._data
            })
            this.caches[id] = entity
            return entity
        }
    }

    EntityUtils.prototype.getEntity = function (id) {
        if (this.caches[id]) {
            return this.entities.getById(id)
        }
    }

    EntityUtils.prototype.remove = function (entity) {
        let id = entity.id
        if (this.caches[id]) {
            this.entities.remove(entity)
            delete this.caches[id]
        }
    }

    EntityUtils.prototype.removeAll = function () {
        this.entities.removeAll()
        this.caches = {}
    }

    EntityUtils.prototype.removeById = function (id) {
        if (this.caches[id]) {
            this.entities.removeById(id)
            delete this.caches[id]
        }
    }

    return EntityUtils
})()

export default EntityUtils
