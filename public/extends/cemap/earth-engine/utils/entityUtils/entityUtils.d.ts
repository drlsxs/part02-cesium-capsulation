import {Earth} from "../../earth/earth";
import {
    BillboardGraphics,
    BoxGraphics,
    CorridorGraphics,
    CylinderGraphics,
    EllipseGraphics,
    Ellipsoid,
    Entity,
    EntityCollection,
    LabelGraphics,
    ModelGraphics,
    PathGraphics,
    PlaneGraphics,
    PointGraphics,
    PolygonGraphics,
    PolylineGraphics, PolylineVolumeGraphics,
    PositionProperty,
    Property, PropertyBag, RectangleGraphics,
    TimeIntervalCollection, WallGraphics
} from "cesium";

export class EntityUtils {
    earth: Earth;
    entities: EntityCollection;
    caches: {
        [key: string]: Entity;
    }


    addEntity(_data: {
        id: string;
        modules: string;
        name: string;
        availability: TimeIntervalCollection
        show: boolean;
        description: Property;
        position: PositionProperty;
        orientation: Property;
        viewFrom: Property;
        parent: Entity;
        billboard: BillboardGraphics;
        box: BoxGraphics;
        corridor: CorridorGraphics;
        cylinder: CylinderGraphics;
        ellipse: EllipseGraphics;
        ellipsoid: Ellipsoid;
        label: LabelGraphics;
        model: ModelGraphics;
        path: PathGraphics;
        plane: PlaneGraphics;
        point: PointGraphics;
        polygon: PolygonGraphics;
        polyline: PolylineGraphics;
        properties: PropertyBag;
        polylineVolume: PolylineVolumeGraphics;
        rectangle: RectangleGraphics
        wall: WallGraphics;
    }): Entity

    getEntity(id: string): Entity

    remove(entity: Entity): void

    removeAll(): void

    removeById(id): void
}


