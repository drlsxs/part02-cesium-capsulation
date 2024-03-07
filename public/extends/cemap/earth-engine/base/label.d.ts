import {LabelCollection, Label as CesiumLabel, Color, Cartesian3, LabelStyle} from "cesium";
export class LabelLayer {

    labels: LabelCollection;

    addLabel(_data: {
        id?: string;
        text: string;
        fillColor: Color;
        position: Cartesian3;
        font?: string;
        outlineColor?: Color;
        outlineWidth?: number;
        scale?: number;
        textPosition?: string;
        modules?: string;
        style?: LabelStyle;
    }): CesiumLabel
}
