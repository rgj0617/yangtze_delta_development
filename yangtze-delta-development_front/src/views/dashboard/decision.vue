<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <el-row class="normal">
        <div class="information">
          <el-card class="normal">
            <div>
              <h2 v-if="selectedCityStore.get().value!=='未选择'">{{ selectedCityStore.get() }}</h2>
              <h2 v-else>请选择一个地级市</h2>
            </div>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item name="5">
                <template #title>
                  综合评价
                  <el-icon><star-filled /></el-icon>
                </template>
                <div>本栏目下地图展示了长三角地区各个地级市的综合得分情况</div>
                <div>
                  展开下面对应的栏目可以查看各个维度得分情况，并且可以选取二级指标进行自定义修改，辅助指导决策。
                </div>
              </el-collapse-item>
              <el-collapse-item title="创新" name="0">
                <dimension :indicators="innovation" dimension="创新发展" @update-score="updateScore"/>
              </el-collapse-item>
              <el-collapse-item title="协调" name="1">
                 <dimension :indicators="coordination" dimension="协调发展" @update-score="updateScore"/>
              </el-collapse-item>
              <el-collapse-item title="绿色" name="2">
                <dimension :indicators="green" dimension="绿色发展" @update-score="updateScore"/>
              </el-collapse-item>
              <el-collapse-item title="开放" name="3">
                <dimension :indicators="open" dimension="开放发展" @update-score="updateScore"/>
              </el-collapse-item>
              <el-collapse-item title="共享" name="4">
                <dimension :indicators="share" dimension="共享发展" @update-score="updateScore"/>
              </el-collapse-item>
            </el-collapse>
            <div class="tip">
              本工具目前仅支持2025年数据
            </div>
          </el-card>
        </div>
        <div class="yangtzeMap">
          <yangtzeMap :currentMap="activeName" :update-data="updateData"/>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import homeHeader from "@/components/header.vue";
import yangtzeMap from "@/components/map.vue";
import { onUnmounted, ref, watch } from "vue";
import evaluationDescription from "@/assets/json/evaluationDescription.json";
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

import { useSelectedCityStore } from "@/store/selectedCity.js"
const selectedCityStore = useSelectedCityStore();

import dimension from "../decision/dimension.vue";
import structure from "@/assets/json/structure.json"

const innovation = structure["创新发展"];
const coordination = structure["协调发展"];
const green = structure["绿色发展"];
const open = structure["开放发展"];
const share = structure["共享发展"];

const activeName = ref("5");
watch(activeName, (newValue, oldValue) => {
  if (!newValue) {
    activeName.value = oldValue; // 恢复上一个有效值
  }
});

// 像map组件传递用户更新的数据
const updateData = ref(null)
const updateScore = (data) => {
  updateData.value = data
}
onUnmounted(() => {
  selectedCityStore.set()
})
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
  .tip {
    color: #bbbbbb;
    font-size: 14px;
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