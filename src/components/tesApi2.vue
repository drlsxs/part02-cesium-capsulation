<script setup>
import {onMounted} from "vue";
import {useEarth} from "@p/extends/cemap/use/useEarth.js";
import Panel2 from "@c/panel/panel2.vue";
import Layer from '@p/extends/cemap/earth-engine/layer/layer.js'

onMounted(() => {
  const earth = useEarth("id2",{
    el: "cesiumContainer2",
  });
  const layer = new Layer(useEarth("id2"))
  layer.addGdImgImgLayer()

});
</script>

<template>
  <div id="tes2">
    <div id="cesiumContainer2"></div>
    <Panel2></Panel2>
  </div>
</template>

<style scoped>
#tes2 {
  height: 84vh;
  position: relative;
}
</style>
