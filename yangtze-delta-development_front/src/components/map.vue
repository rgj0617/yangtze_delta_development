<template>
  <div class="mapboxBorder">
    <div
      id="mapbox"
      style="width: 100%; height: 100%; border-radius: 18px"
    ></div>
    <div v-if="currentMap == 5" id="legend">
      <div class="legend-title">
        {{ legendTitle ? legendTitle : "综合评价" }}得分
      </div>
      <div class="legend-gradient"></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">50</div>
        <div class="legend-label">100</div>
      </div>
    </div>
    <div v-else-if="currentMap == 0" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #fff4f8 0%, #dc7d61 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 1" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #e0e5e9 0%, #73a9d7 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 2" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #e9f0e8 0%, #80c67d 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 3" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #fff8eb 0%, #f6bb81 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 4" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #eaebff 0%, #b67ebd 100%)"
      ></div>
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
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();
const legendTitle = ref("");

const initMapbox = async () => {
  await loadMap("mapbox");
  map.setCenter([119.14, 31.22]); //修改地图中心点
  map.setZoom(6.4); //设置缩放级别
  map.on("styledata", async () => {
    await addGeoJson();
    updateMap(props.currentMap);
  });
};

const props = defineProps({
  currentMap: String,
});

watch(
  () => yearStore.year,
  async (newValue, oldValue) => {
    await initMapbox();
  }
);

// 监听父组件传递过来的 currentMap 数据的变化
watch(
  () => props.currentMap,
  (newValue, oldValue) => {
    if (newValue) {
      switch (Number(newValue)) {
        case 0:
          legendTitle.value = "创新维度";
          break;
        case 1:
          legendTitle.value = "协调维度";
          break;
        case 2:
          legendTitle.value = "绿色维度";
          break;
        case 3:
          legendTitle.value = "开放维度";
          break;
        case 4:
          legendTitle.value = "共享维度";
          break;
        case 5:
          legendTitle.value = "综合评价";
          break;
      }
      updateMap(newValue);
    }
  }
);

onMounted(async () => {
  //挂载mapbox
  await initMapbox();
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
  .legend-title {
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
    // background: linear-gradient(to right, #e2f0d9 0%, #385723 100%);
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