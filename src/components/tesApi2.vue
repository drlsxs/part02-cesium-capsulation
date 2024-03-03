<script setup>
import {onMounted} from "vue";
import {useEarth} from "@p/extends/cemap/useEarth/useEarth.js";
import Panel2 from "@c/panel/panel2.vue";

onMounted(() => {
  const earth = useEarth("id2",{
    el: "cesiumContainer2",
  });
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
