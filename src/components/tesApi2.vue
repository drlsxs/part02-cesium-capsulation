<script setup>
import {onMounted} from "vue";
import {useEarth} from "@p/extends/cemap/use/useEarth.js";
import Panel2 from "@c/panel/panel2.vue";
import BillboardLayer from '@p/extends/cemap/earth-engine/base/billboard.js'
import { genRandomPosition } from '@p/extends/cemap/earth-engine/utils/utilIndex.js'
import plane2 from '@p/models/plane2.png'

onMounted(() => {
  // let bills = new BillboardLayer(useEarth())
  // let pos = genRandomPosition(108, 24, 1)
  // bills.addBillboard({
  //   id: "556",
  //   position: pos[0],
  //   image: plane2,
  //   width: 30,
  //   height: 30,
  // })

});
</script>

<template>
  <div id="tes2">
<!--    <div id="cesiumContainer2"></div>-->
    <Panel2></Panel2>
  </div>
</template>

<style scoped>
#tes2 {
  height: 84vh;
  position: relative;
}
</style>
