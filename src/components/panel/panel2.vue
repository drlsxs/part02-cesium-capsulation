<script setup>
import { useEarth} from "@p/extends/cemap/use/useEarth.js";
import plane from "@p/models/plane.png"


// 画普通点
const handlefly = () => {
  useEarth("id2").cameraFlyTo(120, 30)
}

// 画普通点
const drawSimple = () => {

}

function remove() {
  useEarth("id2").useBillboard.remove("111")
}

function addtext() {

}



</script>

<template>
  <div class="panel">
    <h1>Panel 2</h1>
    <button @click="handlefly">相机飞行</button>
    <button @click="drawSimple">普通点</button>
    <button @click="remove">移除点</button>
    <button @click="addtext">文本</button>
    <button @click="addtext">移除文本</button>

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
