<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> Rankings </span>
      <span class="description">
        The Yangtze River Delta High-Quality Development (2023) comprehensive
        evaluation scores of 41 cities ranked
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
      <el-tab-pane label="Comprehensive Ranking" name="first" class="ranking">
        <div class="dataTable">
          <div class="description">
            Cities are ranked according to their comprehensive scores. The
            comprehensive score measures the overall progress towards achieving
            all high-quality development goals. The score can be interpreted as
            the percentage of high-quality development goals achieved. A score
            of 100 indicates that all high-quality development goals have been
            fully realized.
          </div>
          <dataTable />
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="Explore the rankings of each dimension"
        name="second"
        class="ranking"
      >
        <div class="dataTable">
          <div class="description">
            Cities are ranked based on their comprehensive scores. The
            comprehensive score is composed of five dimensions: "Innovation,"
            "Coordination," "Green," "Openness," and "Sharing," each dimension
            scoring from 0 to 20 points. A score of 20 points indicates that all
            targets for that dimension within the high-quality development goals
            have been fully achieved.
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