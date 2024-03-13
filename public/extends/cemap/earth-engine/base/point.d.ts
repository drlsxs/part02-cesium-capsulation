import {Cartesian3, Color, PointPrimitive, PointPrimitiveCollection, Viewer} from "cesium";
export class PointLayer {
    points: PointPrimitiveCollection;
    caches: Object;


    addPoint(_data: {
        id?: string;
        color: Color;
        position: Cartesian3;
        pixelSize?: number;
        outlineColor?: Color;
        outlineWidth?: number;
        show?: boolean;
    }): PointPrimitive

    remove(id: string): void

    removeAll(): void

}
