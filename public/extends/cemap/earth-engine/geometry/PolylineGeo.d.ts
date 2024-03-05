import {Earth} from "../earth/earth";
import {ArcType, Cartesian3, Color} from "cesium";

export class PolylineGeo {

    earth: Earth;
    caches: Object;

    addLine(_data :{
        positions: Array<Cartesian3>;
        width: number;
        colors: Array<Color>;
        arcType: ArcType;
        colorsPerVertex: boolean;
    }): void
}












