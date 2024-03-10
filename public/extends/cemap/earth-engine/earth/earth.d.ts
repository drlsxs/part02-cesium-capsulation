import {Camera, PrimitiveCollection, Scene, Viewer} from "cesium";
import {EarthConfig} from "../config/earth/configIndex";
export class Earth {

    viewer: Viewer;

    scene: Scene;

    camera: Camera;

    primitives: PrimitiveCollection;

    id: string | number;

    // 参数
    options: EarthConfig;
}
