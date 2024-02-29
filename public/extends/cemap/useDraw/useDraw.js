import Billboard from '@p/extends/cemap/earth-engine/base/billboard.js'

let billboard

function useBillboard(earth) {
    billboard = new Billboard(earth)
}




function addPoint(data) {
    billboard.addBillboard(data)
}

function removePoint(id) {
    billboard.remove(id)
}

export {
    addPoint,
    useBillboard,
    removePoint
}
