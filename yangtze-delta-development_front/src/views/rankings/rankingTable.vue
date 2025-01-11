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
import { watchEffect, ref } from "vue";
// import rankingData from "@/assets/json/scoreRanking.json";
import { scoreFormat } from "@/utils/format.ts";
// @ts-ignore
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();
const rankingDataFormatted = ref([]);

watchEffect(async () => {
  const year = yearStore.year;
  // 使用 import.meta.glob 代替动态路径
  const modules = import.meta.glob("/src/assets/json/**/*.json");
  const modulePath = `/src/assets/json/${year}/scoreRanking.json`;

  if (modules[modulePath]) {
    const module = await modules[modulePath]();
    rankingDataFormatted.value = scoreFormat(module.default);
  }
  // const filePath = `/src/assets/json/${year}/scoreRanking.json`;
  // const module = await import(/* @vite-ignore */ filePath);
  // rankingDataFormatted.value = scoreFormat(module.default);
});

const getBackgroundColor = (score) => {
  if (score == null) return "transparent";
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