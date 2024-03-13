import {BillboardCollection, Cartesian3, Color, Billboard as CesiumBillboard } from "cesium";
export class BillboardLayer  {



    billboards: BillboardCollection;

    addBillboard(_data: {
        id?: string;
        image: string;
        position: Cartesian3;
        color?: Color;
        width?: number;
        height?: number;
        scale?: number;
        rotation?: number;
        modules?: string;
        advanceParams: Object;
    }): CesiumBillboard
}
