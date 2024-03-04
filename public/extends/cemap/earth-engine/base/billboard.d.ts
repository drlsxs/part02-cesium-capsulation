import {BillboardCollection, Cartesian3, Color, Billboard as CesiumBillboard } from "cesium";
export class Billboard  {

    billboards: BillboardCollection;

    /**
     * 添加标牌，如果没有的参数请置于advanceParams对象中
     * @param [id] id
     * @param [color] 颜色
     * @param [width] 宽度
     * @param [height] 高度
     * @param image 图像
     * @param position 位置
     * @param [scale] 缩放
     * @param [rotation] 旋转
     * @param [modules] 模块
     */
    addBillboard({id, color, width, height, image, position, scale, rotation, modules}: {
        id?: string;
        color?: Color;
        width?: number;
        height?: number;
        image: string;
        position: Cartesian3;
        scale?: number;
        rotation?: number;
        modules?: string[];
    }): CesiumBillboard
}
