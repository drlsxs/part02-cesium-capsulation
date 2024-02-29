import {BillboardCollection} from "cesium";
export class Billboard {
    billboards: BillboardCollection;

    add({id,color}: {
        id: string;
        color: string;
    }): void
}
