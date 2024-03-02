<template>
  <div class="mapboxBorder">
    <div
      id="mapbox"
      style="width: 100%; height: 100%; border-radius: 18px"
    ></div>
  </div>
</template>

<script setup>
import { map, loadMap, addGeoJson, updateMap } from "@/utils/mapbox.js";
import { onMounted, ref, watch } from "vue";

const initMapbox = () => {
  loadMap("mapbox");
  map.setCenter([119.14, 31.22]); //修改地图中心点
  map.setZoom(6.4); //设置缩放级别
};

const props = defineProps({
  currentMap: String,
});

// 监听父组件传递过来的 currentMap 数据的变化
watch(
  () => props.currentMap,
  (newValue, oldValue) => {
    if (newValue) {
      updateMap(newValue);
    }
  }
);

onMounted(() => {
  //挂载mapbox
  initMapbox();
  //添加矢量图层
  addGeoJson();
});
</script>

<style lang="scss" scoped>
.mapboxBorder {
  height: 98%;
  width: 98%;
  padding: 0;
  margin: 0.5%;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.15);
  // border: #475669 1px solid;
  border-radius: 18px;
}
</style>