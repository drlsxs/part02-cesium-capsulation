var ToolTip = (function () {

    /**
     *
     * @param earth {Earth}
     * @return ToolTip
     */
    function ToolTip(earth) {
        this.container = earth.widgetContainer
        this.message = ""
        this.tipName = "tool-tip"
        this.left = 0
        this.top = 0
        this.tipContainer = void 0
    }

    ToolTip.prototype.showToolTip = function (left = 0, top = 0) {
        this.remove()
        let toolTip = `
            <div class="widget ${ this.tipName }" >${ this.message }</div>
        `
        this.container.insertAdjacentHTML("beforeend", toolTip)
        this.tipContainer = this.container.querySelector(`.${ this.tipName }`)
        // 如果有位置立即显示提示位置
        if (left && top) {
            this.updateTipPosition(left, top)
        }
    }

    ToolTip.prototype.updateTipPosition = function (left, top) {
        // 伪元素更新到鼠标位置
        this.left = left + 10
        this.top = top - 15
        this.tipContainer.style.visibility = "visible"
        this.tipContainer.style.zIndex = 1
        this.tipContainer.style.transform = `translate(${ this.left  }px, ${ this.top }px)`
        // 鼠标形状为手形
        document.body.style.cursor = "pointer"
    }

    ToolTip.prototype.remove = function () {
        document.body.style.cursor = "initial"
        let node = this.container.querySelector(`.${ this.tipName }`)
        if (node) this.container.removeChild(node)
    }

    return ToolTip

})()

export default ToolTip
