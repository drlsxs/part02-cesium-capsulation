import { cameraFlyTo, setView } from '@p/extends/cemap/use/useEarth.js'
import "@p/extends/cemap/earth-engine/material/materialIndex.js"

function initAll() {
    this.cameraFlyTo = cameraFlyTo
    this.setView = setView
}

export default initAll
