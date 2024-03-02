<template>
  <div class="container">
    <div class="head" style="height: 5.5vh; width: 100%">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> Rankings </span>
      <span class="description">
        The overall performance of all 41 Cities in the Yangtze River Delta
        region
      </span>
      <br />
      <el-divider>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
      </el-divider>
    </div>
    <div class="dataTable">
      <div class="description">
        Cities are ranked by their overall score. The overall score measures the
        total progress towards achieving all high-quality development goals. The
        score can be interpreted as a percentage of high-quality development
        goal achievement. A score of 100 indicates that all high-quality
        development goals have been achieved.
      </div>
      <dataTable />
    </div>
  </div>
</template>

<script setup>
import homeHeader from "@/components/header.vue";
import dataTable from "@/components/rankingTable.vue";
</script>

<style lang="scss" scoped>
.sectionContent {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1.5% 30% 0.5% 30%;
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

  //   :deep(div.el-divider.el-divider--horizontal) {
  //     border-top: 20px var(--el-border-color) var(--el-border-style);
  //   }
}
.dataTable {
  margin: 0.5% 30%;
  height: 100vh;
  // border:1px black solid;
  .description {
    padding-bottom: 2%;
    line-height: 1.5vh;
    // color: rgb(142, 142, 142);
    font-size: 1.2vh;
    font-weight: 400;
  }
}
</style>