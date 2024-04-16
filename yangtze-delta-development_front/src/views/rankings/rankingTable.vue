<template>
  <el-card class="container">
    <el-table :data="rankingDataFormatted" stripe>
      <el-table-column
        prop="ranking"
        label="Rank"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="cityName"
        label="Country"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="score"
        label="Score"
        width="200"
        sortable
      ></el-table-column>
      <el-table-column label="Performance">
        <template v-slot="scope">
          <!-- 动态绑定样式，通过getBackgroundColor获得色带 -->
          <div
            :style="{
              background: getBackgroundColor(scope.row.score),
              height: '20px',
            }"
          ></div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import rankingData from "@/assets/json/scoreRanking.json";
import { scoreFormat } from "@/utils/format.ts";

const rankingDataFormatted = scoreFormat(rankingData);

const getBackgroundColor = (score) => {
  const percentage = score / 100;
  const filledPercentage = Math.min(percentage, 1);
  const filledColorHead = "#95CCDE";
  const filledColorFoot = "#A9B2D4";
  const emptyColor = "#EEEEEE";
  return `linear-gradient(to right, ${filledColorFoot}, ${filledColorHead} ${
    filledPercentage * 100
  }%, ${emptyColor} ${filledPercentage * 100}%)`;
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 50px;
}
</style>