import {Earth} from "../earth/earth";
import {GeometryBase} from "./GeometryBase";
import {Cartesian3, Color, Primitive} from "cesium";

export class PolygonLayer extends GeometryBase{

    addPolygon(_data: {
        id: string;
        modules: string;
        positions: Cartesian3[];
        type: string;
        color: Color;
        uniforms: Object;
        opacity: number;
    }): Primitive
}
