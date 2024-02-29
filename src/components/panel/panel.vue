<script setup>
import {cameraFlyTo, useEarth} from "@p/extends/cemap/useEarth/useEarth.js";
import { addPoint, removePoint } from '@p/extends/cemap/useDraw/useDraw.js'
import wx from "@p/models/wx.png"


// 画普通点
const handlefly = () => {
  cameraFlyTo({
    longitude: 116.39,
    latitude: 39.9,
    height: 1000000,
    duration: 1
  })
}

// 画普通点
const drawSimple = () => {
  addPoint({
    id: "111",
    color: Cesium.Color.RED,
    image: wx,
    scale: 0.1,
    position: Cesium.Cartesian3.fromDegrees(120, 30),
  })
}

function remove() {
  removePoint("111")
}




</script>

<template>
  <div class="panel">
    <h1>Panel 1</h1>
    <button @click="handlefly">相机飞行</button>
    <button @click="drawSimple">普通点</button>
    <button @click="remove">移除</button>
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
