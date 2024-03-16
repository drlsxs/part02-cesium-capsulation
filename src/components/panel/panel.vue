<script setup>
import plane2 from "@p/models/plane2.png"
import monitor from "@p/models/monitor.png"
import {  useEarth } from "@p/extends/cemap/use/useEarth.js";
import Layer from '@p/extends/cemap/earth-engine/layer/layer.js'
import Terrain from '@p/extends/cemap/earth-engine/layer/terrain.js'
import { generatePosition } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'
import { onMounted } from 'vue'
import PointLayer from '@p/extends/cemap/earth-engine/base/point.js'
import SimpleLayer from '@p/extends/cemap/earth-engine/base/simple.js'
import LabelLayer from '@p/extends/cemap/earth-engine/base/label.js'
import BillboardLayer from '@p/extends/cemap/earth-engine/base/billboard.js'
import { genLineStr } from '@p/extends/cemap/earth-engine/utils/line.js'
import PolylineLayer from '@p/extends/cemap/earth-engine/geometry/Polyline.js'
import EarthEvent from '@p/extends/cemap/earth-engine/event/earthEvent.js'
import Assets from '@p/extends/cemap/earth-engine/config/assets/assetsIndex.js'
import DrawUtils from '@p/extends/cemap/earth-engine/utils/drawUtils/drawUtils.js'

/**
 * @type {DrawUtils}
 *
 */
let drawUtil

/**
 * @type{BillboardLayer}
 */
let bills
/**
 * @type{LabelLayer}
 */
let labels
/**
 * @type{SimpleLayer}
 */
let simple
/**
 * @type{PointLayer}
 */
let point
/**
 * @type{PolylineLayer}
 */
let polyline

let event, res,res2




onMounted(() => {
  bills = new BillboardLayer(useEarth(), true)
  labels = new LabelLayer(useEarth())
  simple = new SimpleLayer(useEarth())
  point = new PointLayer(useEarth())
  polyline = new PolylineLayer(useEarth())
  event = new EarthEvent(useEarth())
  event.onLeftClick("aa", addleftEvent1)
  event.onLeftClick("default", addleftEvent)
  let layer = new Layer(useEarth())
  layer.addTdtImgImgLayer()
  drawUtil = new DrawUtils(useEarth(), true)
})

// 画普通点
function handlefly() {
   useEarth().cameraFlyTo(116, 39)
}

// 画普通点
function drawSimple() {
  let a = simple.addSimple({
    id: "111",
    color: Cesium.Color.RED,
    image: plane2,
    text: "Hello",
    width: 50,
    height: 50,
    position: Cesium.Cartesian3.fromDegrees(120, 30),
    font: "16px",
  })
}

function remove() {
  simple.removeSimple("111")
}

function addPointz() {
  let pos = generatePosition(112, 33, 100)
  pos.map(po => {
    point.addPoint({
      position: po,
      color: Cesium.Color.RED,
      pixelSize: 6,
      outlineWidth: 2,
      outlineColor: Cesium.Color.YELLOW,
    })
  })
}

function removePoint() {
  point.removeAll()
}

function addtext() {
  labels.addLabel({
    id: "222",
    fillColor: Cesium.Color.RED,
    text: "一队",
    position: Cesium.Cartesian3.fromDegrees(110, 25),
    outlineWidth: 2,
    outlineColor: Cesium.Color.YELLOW,
  })
}

function retext() {
  labels.remove("222")
}

function addPoint() {
  let pos = generatePosition(108, 24, 1)
  bills.addBillboard({
    id: "333",
    position: pos[0],
    image: plane2,
    width: 30,
    height: 30,
  })
}

function addPoint1() {
  let bills2 = new BillboardLayer(useEarth())
  let pos = generatePosition(120, 30, 6)
  pos.map(po => {
    bills2.addBillboard({
      position: po,
      image: monitor,
      width: 30,
      height: 30,
      modules: "aa",
    })

  })

  let pos1 = generatePosition(120, 30, 6)
  pos1.map(po => {
    bills2.addBillboard({
      position: po,
      image: plane2,
      width: 30,
      height: 30,
      modules: "bb",
    })
  })

  console.log(bills)
  console.log(bills2)

}

function rePoint() {
  bills.remove("333")
}

function rePoint1() {
  bills.removeModule("aa")
}

function rePoint2() {
  bills.removeModule("bb")
}

function rePoint3() {
  bills.removeAll()
}

function addLayer() {
  let layer = new Layer(useEarth())
  layer.addTdtImgImgLayer()
}

function addLayer1() {
  let layer = new Layer(useEarth())
  layer.addTdtVecImgLayer()

}

function reAllLayer() {
  let layer = new Layer(useEarth())
  layer.removeAll()
}

function addTerrain() {
  let terrain = new Terrain(useEarth())
  terrain.addTerrainFromUrl(Cesium.IonResource.fromAssetId(3956))
}

function reTerrain() {
  let terrain = new Terrain(useEarth())
  terrain.remove()
}

function addPolyline() {

  let positions = genLineStr("120.328,24.000;105.443,24.000")

  polyline.addPolyline({
    positions: positions,
    color: Cesium.Color.RED,
  })
}

function addPolyline1() {
  let positions = genLineStr("120.328,26.000;105.443,26.000")

  polyline.addPolyline({
    positions: positions,
    type: "PolylineGlow",
    color: Cesium.Color.CORNFLOWERBLUE,
    uniforms: {
      glowPower: 0.2,
      taperPower: 0.5,
    },
  })
}

function addPolyline2() {

  let positions = genLineStr("120.328,28.000;105.443,28.000")

  polyline.addPolyline({
    positions: positions,
    type: "PolylineOutline",
    color: Cesium.Color.ORANGE,
    uniforms: {
      outlineWidth: 2,
      outlineColor: Cesium.Color.BLACK
    },
  })
}

function addPolyline3() {
  let positions = genLineStr("120.328,30.000;105.443,30.000")
  polyline.addPolyline({
    positions: positions,
    type: "PolylineArrow",
    color: Cesium.Color.PURPLE,
  })
}

function addPolyline4() {
  let positions = genLineStr("120.328,32.000;105.443,32.000")
  polyline.addPolyline({
    positions: positions,
    type: "PolylineDash",
    color: Cesium.Color.CYAN,
  })
}


function addPolyline5() {
  polyline.addPolyline({
    positions: genLineStr("107.3594,26.3970;107.4003,26.3970"),
    type: "PolylineTrail",
    width: 8,
    uniforms: {
      color: Cesium.Color.fromCssColorString("#00FFFF"),
      speed: 3,
      image: Assets.Image + "polylinematerial/LinkPulse.png",
    },
  })


}

function rePolyline() {
  polyline.removeAll()
}

async function drawLine() {

  res = await drawUtil.drawPolyLine({
    color: Cesium.Color.GRAY,
    width: 2,
    showPoint: true,
    pointColor: Cesium.Color.CYAN,
    pointOutLineColor: Cesium.Color.WHITE,
    pointOutLineWith: 1,
  })


}

function deletLine() {
  drawUtil.delete(res)
}

async function drawpolyGon() {
  res2 = await drawUtil.drawPolyGon({
    color: Cesium.Color.GRAY,
    opacity: 0.8,
  })
  console.log(res2)

}

function deletpolyGon() {
  drawUtil.delete(res2)
}

function addleftEvent(data) {
  console.log(data, 0)

}

function addleftEvent1(data) {
  console.log(data, 1)

}


</script>
<template>
  <div class="panel">
    <h1>Panel 1</h1>
    <button @click="handlefly">相机飞行</button>
    <button @click="drawSimple">简单点</button>
    <button @click="remove">移除简单点</button>
    <button @click="addPointz">普通点</button>
    <button @click="removePoint">移除普通点</button>
    <button @click="addtext">文本</button>
    <button @click="retext">移除文本</button>
    <button @click="addPoint">添加点</button>
    <button @click="rePoint">移除点</button>
    <button @click="addPoint1">批量添加点</button>
    <button @click="rePoint1">批量移除点1</button>
    <button @click="rePoint2">批量移除点2</button>
    <button @click="rePoint3">移除全部点</button>
    <button @click="addLayer">添加图层1</button>
    <button @click="addLayer1">添加图层2</button>
    <button @click="reAllLayer">去掉所有图层</button>
    <button @click="addTerrain">添加地形</button>
    <button @click="reTerrain">移除地形</button>

    <br/>
    <button @click="addPolyline">普通线</button>
    <button @click="addPolyline1">发光线</button>
    <button @click="addPolyline2">轮廓线</button>
    <button @click="addPolyline3">箭头线</button>
    <button @click="addPolyline4">虚线</button>
    <button @click="addPolyline5">轨迹线</button>
    <button @click="rePolyline">移除线条</button>
    <button @click="drawLine">绘制线</button>
    <button @click="deletLine">删除绘制线</button>
    <button @click="drawpolyGon">绘制面</button>
    <button @click="deletpolyGon">删除面</button>

    <br>

  </div>
</template>
<style scoped>
.panel {
  h1 {
    color: white;
  }

  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
