import {Earth} from "../earth/earth";
import {Cartesian3, ScreenSpaceEventHandler} from "cesium";


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

    onRightClick(modules: string, callback: Function): void

    onMouseMove(modules: string, callback: Function): void

    destroy(): void

    onPreRender(modules: string, callback: Function): void

    removeEvent(eventType: string | number, module: string): void

    preRenderHtml(modules: string, objectList: Array<any>, lon: string, lat: string, callback: Function): void

    preRenderRuler(modules: string, callback: Function): void



}
