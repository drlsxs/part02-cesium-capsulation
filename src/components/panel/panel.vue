<script setup>
import { cameraFlyTo, This, useEarth } from "@p/extends/cemap/useEarth/useEarth.js";
import plane2 from "@p/models/plane2.png"
import { addSimple, removeSimple } from '@p/extends/cemap/useDraw/useSimple.js'
import { removeLabel } from '@p/extends/cemap/useDraw/useLabel.js'
import Layer from '@p/extends/cemap/earth-engine/layer/layer.js'
import Label from '@p/extends/cemap/earth-engine/base/label.js'
import Terrain from '@p/extends/cemap/earth-engine/layer/terrain.js'
// 画普通点
const handlefly = () => {
  // cameraFlyTo({
  //   longitude: 116.39,
  //   latitude: 39.9,
  //   height: 1000000,
  //   duration: 1
  // })
}

// 画普通点
const drawSimple = () => {
  let a = addSimple({
    id: "111",
    color: Cesium.Color.RED,
    image: plane2,
    text: "Hello",
    width: 50,
    height: 50,
    position: Cesium.Cartesian3.fromDegrees(120, 30),
    font:"16px"
  })
}

function remove() {
  removeSimple("111")
}

function addtext() {
  useEarth().useLabel.addLabel({
    id: "222",
    textColor: Cesium.Color.RED,
    text: "一队",
    position: Cesium.Cartesian3.fromDegrees(134, 28),
  })
}

function retext() {
  removeLabel("222")
}

function reAllLayer() {
  let layer = new Layer(useEarth())
  layer.removeAll()
  layer.addTdtImgImgLayer()


}

function addTerrain() {
  let terrain = new Terrain(useEarth())
  terrain.addTerrainFromUrl(Cesium.IonResource.fromAssetId(3956))
}


</script>

<template>
  <div class="panel">
    <h1>Panel 1</h1>
    <button @click="handlefly">相机飞行</button>
    <button @click="drawSimple">普通点</button>
    <button @click="remove">移除点</button>
    <button @click="addtext">文本</button>
    <button @click="retext">移除文本</button>
    <button @click="reAllLayer">去掉所有图层</button>
    <button @click="addTerrain">添加地形</button>

  </div>
</template>

<style scoped>
.panel {
  h1{
    color: white;
  }
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
