import {EarthEvent} from "../../event/earthEvent";

export class ScaleRuler {
    widgetContainer: HTMLDivElement;
    barWidth: number;
    distanceLabel: string;
    rulerName: string;
    rulerContainer: HTMLDivElement;
    scaleLabel: HTMLDivElement;
    scaleLine: HTMLDivElement;
    event: EarthEvent;
}
