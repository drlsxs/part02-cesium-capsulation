import {LabelCollection, Label as CesiumLabel, Color, Cartesian3, LabelStyle} from "cesium";
export class Label {

    labels: LabelCollection;

    /**
     *
     * @param id
     * @param text
     * @param fillColor
     * @param font
     * @param outlineColor
     * @param outlineWidth
     * @param position
     * @param scale
     * @param textPosition
     * @param modules
     */
    addLabel({id, text, fillColor, font, outlineColor, outlineWidth, position, scale, textPosition, modules}: {
        id: string;
        text: string;
        fillColor: Color;
        font: string;
        outlineColor: Color;
        outlineWidth: number;
        position: Cartesian3;
        scale: number;
        textPosition: string;
        modules: string[];
        style: LabelStyle;
    }): CesiumLabel
}
