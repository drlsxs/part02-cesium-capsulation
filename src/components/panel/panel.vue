<script setup>
import { cameraFlyTo, This, useEarth } from "@p/extends/cemap/useEarth/useEarth.js";
import plane2 from "@p/models/plane2.png"
import { addBillboard } from '@p/extends/cemap/useDraw/useBillboard.js'
import { addSimple, removeSimple } from '@p/extends/cemap/useDraw/useSimple.js'
import { removeLabel } from '@p/extends/cemap/useDraw/useLabel.js'
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
  console.log(a)

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
