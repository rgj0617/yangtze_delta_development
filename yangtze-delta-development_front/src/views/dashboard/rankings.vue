<template>
  <div class="container">
    <div class="head" style="height: 5.5vh; width: 100%">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> 综合排序 </span>
      <span class="description">
        长三角高质量发展（2023）41个城市的综合评价得分排序
      </span>
      <br />
      <!-- <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      </el-tabs> -->
      <!-- <el-divider>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
      </el-divider> -->
    </div>
    <el-tabs v-model="activeName" class="tabContent">
      <el-tab-pane label="综合排名" name="first" class="ranking">
        <div class="dataTable">
          <div class="description">
            城市按综合得分进行排名。综合得分衡量实现所有高质量发展目标的总进展情况。得分可以解释为高质量发展目标实现的百分比。100分表示高质量发展目标全部实现。
          </div>
          <dataTable />
        </div>
      </el-tab-pane>
      <el-tab-pane label="探索各维度排名" name="second" class="ranking">
        <div class="dataTable">
          <div class="description">
            城市按综合得分进行排名。综合得分由“创新”、“协调”、“绿色”、“开放”、“共享”五个维度组成，每个维度均为0-20分，20分表示高质量发展目标中该维度目标全部实现。
          </div>
          <dimensionTable />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import homeHeader from "@/components/header.vue";
import { ref } from "vue";
import dataTable from "../rankings/rankingTable.vue";
import dimensionTable from "../rankings/dimensionsRanking.vue";

const activeName = ref("first");
</script>

<style lang="scss" scoped>
:deep(.el-tabs__item) {
  width: 25vw; /* 设置宽度为200px */
  font-size: 1.8vh;
  font-weight: bold;
}
.homeHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 可选，设置层级，确保在其他内容之上 */
}

.sectionContent {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1.5% 25% 0.5% 25%;

  .title {
    font-size: 5vh;
    font-weight: bold;
  }
  .description {
    color: rgb(142, 142, 142);
    font-size: 1.5vh;
    font-weight: 300;
    margin-top: 1.2%;
  }
}
.tabContent {
  margin: 1.5% 25% 0.5% 25%;
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  // overflow: visible;
  .description {
    color: rgb(142, 142, 142);
    font-size: 1.5vh;
    font-weight: 300;
    margin-top: 1.2%;
  }
  // .ranking {
  // height: 200vh;
  // overflow: auto;
  // }
  .dataTable {
    margin: 0.5% 0;
    // height: 100vh;
    width: 49.5vw;
    // border:1px black solid;
    .description {
      padding-bottom: 2%;
      line-height: 1.5vh;
      // color: rgb(142, 142, 142);
      font-size: 1.2vh;
      font-weight: 400;
    }
  }
}
</style>