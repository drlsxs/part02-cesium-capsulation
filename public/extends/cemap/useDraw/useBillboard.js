import Billboard from '@p/extends/cemap/earth-engine/base/billboard.js'
import { This } from '@p/extends/cemap/useEarth/useEarth.js'

function addBillboard(data) {
    This(UseBillboard, this).billboards.addBillboard(data)
}

function removeBillboard(data) {
    This(UseBillboard, this).billboards.remove(data)
}



function UseBillboard(earth) {
    this.billboards = new Billboard(earth)
}

UseBillboard.title = "useBillboard"
UseBillboard.prototype = {
    add: addBillboard,
    remove: removeBillboard,
}





export default UseBillboard
export {
    addBillboard,
    removeBillboard
}












