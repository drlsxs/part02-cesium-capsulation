import {BillboardCollection} from "cesium";
export class Billboard {

    billboards: BillboardCollection;

    add({id,color,image}: {
        id: string;
        color: string;
        image: string;
    }): void
}
