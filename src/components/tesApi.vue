<script setup>
import {onMounted} from "vue";
import Panel from "@c/panel/panel.vue";
import { useEarth } from "@p/extends/cemap/use/useEarth.js";

let earth;
onMounted(() => {
  earth = useEarth()
});


</script>

<template>
  <div id="tes">
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
