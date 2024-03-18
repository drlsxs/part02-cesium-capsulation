import {Camera, PrimitiveCollection, Scene, Viewer} from "cesium";
import {EarthConfig} from "../config/earth/configIndex";
import {EarthEvent} from "../event/earthEvent";
export class Earth {

    viewer: Viewer;

    scene: Scene;

    camera: Camera;

    primitives: PrimitiveCollection;

    id: string | number;

    event: EarthEvent;


    // 参数
    options: EarthConfig;
}
