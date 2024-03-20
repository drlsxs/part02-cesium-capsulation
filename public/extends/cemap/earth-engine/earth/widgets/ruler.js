import EventType from '@p/extends/cemap/earth-engine/event/eventType.js'

var ScaleRuler = (function () {

    /**
     * @param earth {Earth}
     * @return ScaleRuler
     */
    function ScaleRuler(earth) {
        this.container = earth.widgetContainer
        this.event = earth.event
        this.barWidth = void 0
        this.distanceLabel = void 0
        this.rulerName = "widget-scale-ruler"
        this.rulerContainer = void 0
        this.scaleLabel = void 0
        this.scaleLine = void 0
        this.showRuler()
        this.upDateRuler()
    }

    ScaleRuler.prototype.showRuler = function () {
        this.remove()
        let scaleRuler =
            `<div class="widget ${this.rulerName}">
                <div class="scale-label"></div>
                <div class="scale-line"></div>
             </div>`
        this.container.insertAdjacentHTML("beforeend", scaleRuler)
        this.rulerContainer = this.container.querySelector(`.${ this.rulerName }`)
        this.scaleLabel = this.rulerContainer.querySelector(".scale-label")
        this.scaleLine = this.rulerContainer.querySelector(".scale-line")
    }

    ScaleRuler.prototype.upDateRuler = function () {
        this.event.preRenderRuler("showRuler", (barWidth, distanceLabel) => {
            this.barWidth = barWidth
            this.distanceLabel = distanceLabel
            let maxBarWidth = this.rulerContainer.offsetWidth
            let restArea = (maxBarWidth - this.barWidth) / 2
            this.scaleLabel.innerText = this.distanceLabel
            this.scaleLine.style.left = restArea + "px"
            this.scaleLine.style.width = this.barWidth + "px"
        })
    }

    ScaleRuler.prototype.remove = function () {
        this.event.removeEvent(EventType.preRender, 'showRuler')
        let node = this.container.querySelector(`.${ this.rulerName }`)
        if (node) this.container.removeChild(node)
    }

    return ScaleRuler
})()

export default ScaleRuler
