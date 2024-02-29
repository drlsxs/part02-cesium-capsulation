<script setup>
import {onMounted} from "vue";
import Panel from "@c/panel/panel.vue";
import {useEarth} from "@p/extends/cemap/useEarth/useEarth.js";

let earth;
onMounted(() => {
  earth = useEarth()


});

function getEarth() {
  useEarth("aaa")
}

</script>

<template>
  <div id="tes">
    <button @click="getEarth">点击</button>
    <div id="cesiumContainer"></div>
    <Panel></Panel>
  </div>
</template>

<style scoped>
#tes {
  height: 84vh;
  position: relative;
}
</style>
