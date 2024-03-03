<script setup>
import { cameraFlyTo, This, useEarth } from "@p/extends/cemap/useEarth/useEarth.js";
import plane2 from "@p/models/plane2.png"
import { addBillboard } from '@p/extends/cemap/useDraw/useBillboard.js'
import { addSimple, removeSimple } from '@p/extends/cemap/useDraw/useSimple.js'
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
  addSimple({
    id: "111",
    color: Cesium.Color.RED,
    image: plane2,
    text: "Hello",
    width: 50,
    height: 50,
    position: Cesium.Cartesian3.fromDegrees(120, 30),
  })

}

function remove() {
  // useEarth().useBillboard.remove("111")
  useEarth().cameraFlyTo({
    longitude: 120,
    latitude: 30,
    height: 200000
  })
}

function addtext() {

  useEarth().useLabel.addLabel({
    id: "111",
    color: Cesium.Color.RED,
    text: "Hello",
    position: Cesium.Cartesian3.fromDegrees(120, 30),
  })
}

function retext() {
  removeSimple("111")
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
