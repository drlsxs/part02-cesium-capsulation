<script setup>
import {cameraFlyTo} from "@p/extends/cemap/useEarth/useEarth.js";
import Earth from "@p/extends/cemap/earth-engine/earth/earth.js";


// 画普通点
const handlefly = () => {
  Earth.setInstance("id2");
  cameraFlyTo({
    longitude: 116.39,
    latitude: 39.9,
    height: 1000000,
    duration: 1
  })
}




</script>

<template>
  <div class="panel">
    <h1>Panel 2</h1>
    <button @click="handlefly">画普通点</button>
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
