import {Color, Event} from "cesium";
export class MaterialBase {

    definitionChange: Event;

    color: Color;

    colorSubscription: any;

    time: Date;

    isConstant: boolean;

    type: string;

    speed: number;



}
