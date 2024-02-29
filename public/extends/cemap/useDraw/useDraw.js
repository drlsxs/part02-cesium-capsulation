import Billboard from '@p/extends/cemap/earth-engine/base/billboard.js'

let billboard

function useBillboard(earth) {
    billboard = new Billboard(earth)
    billboard.add({

    })
}




function addPoint(data) {
    billboard.add()
}


export {
    addPoint,
    useBillboard
}
