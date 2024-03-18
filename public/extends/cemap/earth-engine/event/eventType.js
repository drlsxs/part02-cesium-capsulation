var EventType = (function (eventType) {
    eventType["leftClick"] = Cesium.ScreenSpaceEventType.LEFT_CLICK
    eventType["rightClick"] = Cesium.ScreenSpaceEventType.RIGHT_CLICK
    eventType["mouseMove"] = Cesium.ScreenSpaceEventType.MOUSE_MOVE
    eventType["preRender"] = "-preRender"
    return eventType
})({})

export default EventType


