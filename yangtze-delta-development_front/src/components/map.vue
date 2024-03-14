<template>
  <div class="mapboxBorder">
    <div
      id="mapbox"
      style="width: 100%; height: 100%; border-radius: 18px"
    ></div>
    <div v-if="currentMap == 5" id="legend">
      <div class="legend-title">综合评价得分</div>
      <div class="legend-title">图例</div>
      <div class="legend-gradient"></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">50</div>
        <div class="legend-label">100</div>
      </div>
    </div>
    <div v-else id="legend">
      <div class="legend-title">{{ legendTitle }}维度得分</div>
      <div class="legend-title">图例</div>
      <div class="legend-gradient2"></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { map, loadMap, addGeoJson, updateMap } from "@/utils/mapbox.js";
import { onMounted, ref, watch } from "vue";

const legendTitle = ref("")

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
      switch(Number(newValue)){
        case 0 :
          legendTitle.value = "创新"
          break
        case 1 :
          legendTitle.value = "协调"
          break
        case 2 :
          legendTitle.value = "绿色"
          break
        case 3 :
          legendTitle.value = "开放"
          break
        case 4 :
          legendTitle.value = "共享"
          break
      }
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
#legend {
  position: absolute;
  bottom: 3%;
  right: 2%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  .legend-title{
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: 600;
  }
  .legend-gradient {
    width: 300px;
    height: 20px;
    background: linear-gradient(to right, #dbeef6, #36869a);
    border-radius: 5px;
  }
  .legend-gradient2 {
    width: 300px;
    height: 20px;
    background: linear-gradient(to right, #e2f0d9 0%, #385723 100%);
    border-radius: 5px;
  }
  .legend-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    .legend-label {
      font-size: 12px;
    }
  }
}
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