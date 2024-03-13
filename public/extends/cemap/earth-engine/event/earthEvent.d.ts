import {Earth} from "../earth/earth";
import {ScreenSpaceEventHandler} from "cesium";
export class EarthEvent {
    earth: Earth;
    handler: ScreenSpaceEventHandler;
    eventCache: {
        key: {
            callback: Function;
            modules: string;
        }
    };

    onLeftClick(modules: string, callback: Function): void

    onMouseMove(modules: string, callback: Function): void




}
