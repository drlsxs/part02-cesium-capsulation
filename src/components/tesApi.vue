<script setup>
import {onMounted, ref} from "vue";
import Panel from "@c/panel/panel.vue";
import {useEarth} from "@p/extends/cemap/useEarth/useEarth.js";

onMounted(() => {
  const earth = useEarth("id1");
  console.log(earth);
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
