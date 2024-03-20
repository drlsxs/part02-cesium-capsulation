import {Earth} from "../earth/earth";
import {Primitive, PrimitiveCollection} from "cesium";

export class GeometryBase {

    earth: Earth;

    primitiveCollection: PrimitiveCollection;

    length: number;

    add(id: string, primitive: Primitive): Primitive

    remove(id: string): void

    removeAll(): void

}
