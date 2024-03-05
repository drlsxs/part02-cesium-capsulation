import {BillboardCollection, Cartesian3, Color, Billboard as CesiumBillboard } from "cesium";
export class BillboardLayer  {

    billboards: BillboardCollection;

    addBillboard({id, color, width, height, image, position, scale, rotation, modules}: {
        id?: string;
        color?: Color;
        width?: number;
        height?: number;
        image: string;
        position: Cartesian3;
        scale?: number;
        rotation?: number;
        modules?: string[];
    }): CesiumBillboard
}
