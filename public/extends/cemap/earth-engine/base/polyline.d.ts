import {Cartesian3, Color, Polyline, PolylineCollection, Viewer} from "cesium";
export class PolylineLayer {
    polylines: PolylineCollection;

    caches: Object;

    addPolyline(_data: {
        id?: string;
        color: Color;
        positions: Array<Cartesian3>;
        width?: number;
        loop?: boolean;
        type?: string;
        show?: boolean;
        uniforms?: Object;
    }): Polyline
}
