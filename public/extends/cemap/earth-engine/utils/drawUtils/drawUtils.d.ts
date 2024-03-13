import {Earth} from "../../earth/earth";
import {Cartesian3, Color} from "cesium";
import {PointLayer} from "../../base/point";
import {EarthEvent} from "../../event/earthEvent";

export class DrawCache {
    type: string;
    layer: PointLayer;
    positions: Array<Cartesian3>;
}

export class DrawUtils {

    earth: Earth;

    event: EarthEvent;

    caches: {
        [key: string]: DrawCache;
    };

    drawPolyLine(_options: {
        id?: string,
        modules?: string;
        color?: Color;
        width?: number;
        showPoint?: boolean;
        pointSize?: number;
        pointColor?: Color;
        pointOutLineWith?: number;
        pointOutLineColor?: Color;
    }): void

    deletePolyLine(id: string): void
}


