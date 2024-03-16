import {Earth} from "../../earth/earth";
import {Cartesian3, Color, Entity} from "cesium";
import {PointLayer} from "../../base/point";
import {EarthEvent} from "../../event/earthEvent";
import {PolylineLayer} from "../../geometry/Polyline";



export class DrawCache {
    id: string;
    type: string;
    positions: Array<Cartesian3>;
    coordinates: Array<{lon:number,lat:number, alt: number;}>;
    entities: Array<Array<Entity>>;
}

export class DrawUtils {

    earth: Earth;

    event: EarthEvent;

    drawed: {
        [key: string]: DrawCache;
    };


    drawPolyLine(options: {
        id?: string,
        modules?: string;
        color?: Color;
        width?: number;
        showPoint?: boolean;
        pointSize?: number;
        pointColor?: Color;
        pointOutLineWith?: number;
        pointOutLineColor?: Color;
    }): Promise<DrawCache>

    drawPolyGon(options: {
        id?: string,
        modules?: string;
        color?: Color;
        opacity: number;
    }): Promise<DrawCache>

    deleteById(id: string): void
}


