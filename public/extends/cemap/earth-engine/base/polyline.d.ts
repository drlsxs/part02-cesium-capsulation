import {Cartesian3, Color, Polyline, PolylineCollection} from "cesium";
export class PolylineLayer {
    polylines: PolylineCollection;
    caches: Object;

    addPolyline(_data: {
        id: string;
        loop: boolean;
        color: Color;
        type: string;
        positions: Array<Cartesian3>;
        show: boolean;
        width: number;
        uniforms: Object;
    }): Polyline
}
