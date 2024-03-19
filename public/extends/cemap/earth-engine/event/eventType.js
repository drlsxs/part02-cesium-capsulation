var EventType = (function (eventType) {
    eventType["leftClick"] = "_left"
    eventType["rightClick"] = "_right"
    eventType["mouseMove"] = "_move"
    eventType["preRender"] = "_preRender"
    return eventType
})({})

var SpaceEventType = (function (eventType) {
    eventType[EventType.leftClick] = Cesium.ScreenSpaceEventType.LEFT_CLICK
    eventType[EventType.rightClick] = Cesium.ScreenSpaceEventType.RIGHT_CLICK
    eventType[EventType.mouseMove] = Cesium.ScreenSpaceEventType.MOUSE_MOVE
    return eventType
})({})

export {
    SpaceEventType
}

export default EventType


