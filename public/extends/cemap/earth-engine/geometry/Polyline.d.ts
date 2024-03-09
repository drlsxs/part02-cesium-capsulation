import {Earth} from "../earth/earth";
import {ArcType, Cartesian3, Color} from "cesium";
import {GeometryBase} from "./GeometryBase";

export class PolylineLayer extends GeometryBase{

    addPolyline(_data :{
        id: string;
        color: Color;
        positions: Array<Cartesian3>;
        width?: number;
        type?: string;
        uniforms?: Object;
        modules: string;
    }): void

}












