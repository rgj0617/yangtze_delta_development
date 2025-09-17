<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <el-row class="normal">
        <div class="information">
          <el-card class="normal">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item name="5">
                <template #title>
                  综合评价
                  <el-icon><star-filled /></el-icon>
                </template>
                <div>{{ evaluationDescription[yearStore.year][0] }}</div>
              </el-collapse-item>
              <el-collapse-item title="创新" name="0">
                <div>{{ evaluationDescription[yearStore.year][1] }}</div>
              </el-collapse-item>
              <el-collapse-item title="协调" name="1">
                <div>{{ evaluationDescription[yearStore.year][2] }}</div>
              </el-collapse-item>
              <el-collapse-item title="绿色" name="2">
                <div>{{ evaluationDescription[yearStore.year][3] }}</div>
              </el-collapse-item>
              <el-collapse-item title="开放" name="3">
                <div>{{ evaluationDescription[yearStore.year][4] }}</div>
              </el-collapse-item>
              <el-collapse-item title="共享" name="4">
                <div>{{ evaluationDescription[yearStore.year][5] }}</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div>
        <div class="yangtzeMap">
          <yangtzeMap :currentMap="activeName" />
        </div>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import homeHeader from "@/components/header.vue";
import yangtzeMap from "@/components/map.vue";
import { ref, watch } from "vue";
import evaluationDescription from "@/assets/json/evaluationDescription.json";
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

const activeName = ref("5");
watch(activeName, (newValue, oldValue) => {
  if (!newValue) {
    activeName.value = oldValue; // 恢复上一个有效值
  }
});
</script>

<style scoped lang="scss">
:deep(.el-collapse-item__header) {
  font-size: 0.7vw;
  margin: 8px 0;
  text-align: center;
  // padding: 20px 0 ;
  font-weight: bold;
}
.container {
  display: hidden;
  height: 100vh;
  width: 100vw;
  .head {
    height: 5.5vh;
    width: 100%;
  }
  .normal {
    width: 100%;
    height: 100%;
  }
  .sectionContent {
    width: 100%;
    height: 94vh;
  }
  .information {
    height: 100%;
    width: 15%;
  }
  .yangtzeMap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 85%;
  }
}

@media (max-width: 1000px) {
  :deep(.el-collapse-item__header) {
    font-size: 0.9vh;
    margin: 8px 0;
    font-weight: bold;
  }
  .container {
    height: 100vh;
    width: 100vw;
    .head {
      height: 3vh;
      width: 100%;
    }

    .sectionContent {
      width: 100%;
      height: 96vh;
      .normal {
        width: 100%;
        height: 100%;
        .information {
          height: 100%;
          width: 20%;
        }
        .yangtzeMap {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 80%;
        }
      }
    }
  }
}
</style>