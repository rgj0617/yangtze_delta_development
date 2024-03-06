<template>
  <el-card class="container">
    <el-table :data="rankingData" stripe>
    <el-table-column prop="ranking" label="Rank" width="100"></el-table-column>
    <el-table-column prop="cityName" label="Country" width="200"></el-table-column>
    <el-table-column prop="score" label="Score" width="200"></el-table-column>
    <el-table-column label="Performance">
      <template v-slot="scope">
        <div :style="{background: getBackgroundColor(scope.row.score), height: '20px'}"></div>
      </template>
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script setup>
import rankingData from "@/assets/json/scoreRanking.json"

const getBackgroundColor = (score) =>{
    const percentage = score / 100;
      const filledPercentage = Math.min(percentage, 1); // Ensure filledPercentage is between 0 and 1
      const filledColorHead = '#95CCDE'; // Green color for filled part
      const filledColorFoot = '#A9B2D4'; // Green color for filled part
      const emptyColor = '#EEEEEE'; // Gray color for empty part

      return `linear-gradient(to right, ${filledColorFoot}, ${filledColorHead} ${filledPercentage * 100}%, ${emptyColor} ${filledPercentage * 100}%)`;
}
</script>

<style lang="scss" scoped>
.container{
  padding-bottom: 50px;
}
</style>