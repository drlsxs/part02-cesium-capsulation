<script setup>
import {onMounted} from "vue";
import {useEarth} from "@p/extends/cemap/useEarth/useEarth.js";
import Panel2 from "@c/panel/panel2.vue";

onMounted(() => {
  const earth = useEarth("id2");
  console.log(earth);
});
</script>

<template>
  <div id="tes2">
    <div id="cesiumContainer"></div>
    <Panel2></Panel2>
  </div>
</template>

<style scoped>
#tes2 {
  height: 84vh;
  position: relative;
}
</style>
