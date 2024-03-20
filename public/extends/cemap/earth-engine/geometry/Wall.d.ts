import {GeometryBase} from "./GeometryBase";
import {Cartesian3, Color, Primitive} from "cesium";

export class WallLayer extends GeometryBase{

    addWall(_data: {
        id: string;
        modules: string;
        positions: Cartesian3[];
        type: string;
        color: Color;
        uniforms: Object;
        opacity: number;
    }): Primitive
}
