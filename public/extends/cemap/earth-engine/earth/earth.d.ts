import {PrimitiveCollection, Scene, Viewer} from "cesium";
import {EarthConfig} from "../../useEarth/config/configIndex";
export class Earth {

    viewer: Viewer;

    scene: Scene;

    primitives: PrimitiveCollection;

    id: string | number;

    // 参数
    options: EarthConfig;
}
