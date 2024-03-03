import Label from '@p/extends/cemap/earth-engine/base/label.js'
import { This } from '@p/extends/cemap/useEarth/useEarth.js'

function addLabel(data) {
    This(UseLabel, this).labels.addLabel(data)
}

function removeLabel(data) {
    This(UseLabel, this).labels.remove(data)
}

UseLabel.title = "useLabel"
function UseLabel(earth) {
    this.labels = new Label(earth)
}

UseLabel.prototype = {
    addLabel: addLabel,
    remove: removeLabel,
}




export default UseLabel
export {
    addLabel,
    removeLabel
}












