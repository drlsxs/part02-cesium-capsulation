import UseBillboard from '@p/extends/cemap/useDraw/useBillboard.js'
import UseLabel from '@p/extends/cemap/useDraw/useLabel.js'
import { cameraFlyTo } from '@p/extends/cemap/useEarth/useEarth.js'
import UseSimple from '@p/extends/cemap/useDraw/useSimple.js'

function initAllUtils() {
    this.useBillboard = new UseBillboard(this)
    this.useLabel = new UseLabel(this)
    this.useSimple = new UseSimple(this)
    this.cameraFlyTo = cameraFlyTo
}




export {
    initAllUtils
}
