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

    onClick(modules: string, callback: Function): void
}
