<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> 对比探索 </span>
      <span class="description">
        探索长三角高质量发展41个城市的综合评价得分年际变化
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
      <!-- 这一块主要做成类似编程语言排行榜的效果 -->
      <el-tab-pane label="最新排名" name="first" class="ranking">
        <div class="dataTable">
          <div class="description">
            最新版报告城市按综合得分进行排名。给出了最新年份报告得分较次年报告对比变化。
          </div>
          <dataTable />
        </div>
      </el-tab-pane>
      <!-- 这里主要呈现一个折线图效果，用户选择起止时间展示折线图，用户可以选择展示的维度或指标，以及要参与比较的地级市 -->
      <el-tab-pane label="对比分析" name="second" class="ranking">
        <div class="dataTable">
          <div class="description">
            对比分析历年总得分、各维度得分、各指标结果
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
// @ts-ignore
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();
const activeName = ref("first");
</script>

<style lang="scss" scoped>
:deep(.el-tabs__item) {
  width: 25vw; /* 设置宽度为200px */
  font-size: 1.8vh;
  font-weight: bold;
}
.head {
  height: 5.5vh;
  width: 100%;
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

@media (max-width: 1000px) {
  :deep(.el-tabs__item) {
    width: 47.5vw;
    font-size: 2.5vw;
    font-weight: bold;
  }
  .head {
    height: 5vh;
    width: 100%;
  }
  .sectionContent {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1.5% 5% 0.5% 5%;

    .title {
      font-size: 5vw;
      font-weight: bold;
    }
    .description {
      color: rgb(142, 142, 142);
      font-size: 1.6vw;
      font-weight: 500;
      margin-top: 1.2%;
    }
  }
  .tabContent {
    margin: 1.5% 2.5% 0.5% 2.5%;
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
    // overflow: visible;
    .ranking {
      .dataTable {
        margin: 0.5% 0;
        width: 95vw;
        .description {
          padding-bottom: 2%;
          line-height: 1.4vw;
          font-size: 1.4vw;
          font-weight: 300;
        }
      }
    }
  }
}
</style>