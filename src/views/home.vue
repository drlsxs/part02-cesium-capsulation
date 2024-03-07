<script setup>
import TesApi from "@c/tesApi.vue";
import TesApi2 from "@c/tesApi2.vue";
</script>

<template>
  <TesApi></TesApi>
<!--    <TesApi2></TesApi2>-->
</template>

<style scoped>
/deep/ #cesiumContainer {
  height: 100%;
}
</style>
