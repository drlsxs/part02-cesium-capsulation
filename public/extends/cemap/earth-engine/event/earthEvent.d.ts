import {Earth} from "../earth/earth";
import {ScreenSpaceEventHandler} from "cesium";
export class EarthEvent {
    earth: Earth;
    handler: ScreenSpaceEventHandler;
    eventCache: Object;

    onClick(modules: string, callback: Function): Object
}
