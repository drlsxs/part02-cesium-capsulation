import {Label} from "./label";
import {Billboard} from "./billboard";
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
    labels: Label;
    billboards: Billboard;
    simples: Object;


    addSimple({
                  id, color, width, height, image, rotation, text, fillColor, font, outlineWidth,
                  outlineColor, position, scale, textPosition, modules, style
              }: {
        id?: string;
        color?: Color;
        width?: number;
        height?: number;
        image: string;
        rotation?: number;
        text: string;
        fillColor?: Color;
        font?: string;
        outlineColor?: Color;
        outlineWidth?: number;
        position: Cartesian3;
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
