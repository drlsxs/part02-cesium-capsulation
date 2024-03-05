import {Cartesian3, Color, PointPrimitive, PointPrimitiveCollection, Viewer} from "cesium";
export class PointLayer {
    points: PointPrimitiveCollection;
    caches: Object;
    addPoint({id,color,outlineColor,outlineWidth,pixelSize,position,show}: {
        color: Color;
        id: string;
        outlineColor: Color;
        outlineWidth: number;
        pixelSize: number;
        position: Cartesian3;
        show: boolean;
    }): PointPrimitive
}
