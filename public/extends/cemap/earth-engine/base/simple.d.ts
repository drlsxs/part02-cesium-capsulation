import {LabelLayer} from "./label";
import {BillboardLayer} from "./billboard";
import {Cartesian3, Color, LabelStyle, Label as CesiumLabel, Billboard as CesiumBillboard} from "cesium";

export class SimpleData {
    id: string
    label: CesiumLabel;
    billboards: CesiumBillboard;
    data: Object;
    // 删除自身方法
    remove(): void;
}

export class SimpleLayer {
    labels: LabelLayer;
    billboards:BillboardLayer;
    simples: Object;


    addSimple(_data: {
        id?: string;
        image: string;
        text: string;
        position: Cartesian3;
        color?: Color;
        width?: number;
        height?: number;
        rotation?: number;
        fillColor?: Color;
        font?: string;
        outlineColor?: Color;
        outlineWidth?: number;
        scale?: number;
        textPosition?: string;
        modules?: string[];
        style?: LabelStyle;
    }): SimpleData


    /**
     * 删除简单标注
     */
    removeSimple(id:string): void

    /**
     * 获取简单标注
     * @param id
     */
    getSimple(id: string): SimpleData





}
