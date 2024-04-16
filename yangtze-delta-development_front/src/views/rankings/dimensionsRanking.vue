<template>
  <div class="dimensionSelection">
    <span class="introduction">维度筛选：</span>
    <el-select
      v-model="selectedDimension"
      multiple
      placeholder="Select"
      style="width: 190px"
    >
      <el-option
        v-for="item in dimensionColors"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <div class="flex items-center">
          <el-tag :color="item.value" style="margin-right: 8px" size="small" />
          <span :style="{ color: item.value }">{{ item.label }}</span>
        </div>
      </el-option>
      <template #tag>
        <el-tag
          v-for="color in selectedDimension"
          :key="color.value"
          :color="color"
        />
      </template>
    </el-select>
    <!-- <span class="introduction" style="margin-left: 30px"></span> -->
  </div>

  <el-card class="container">
    <el-table :data="rankingDetailData" stripe @sort-change="tableSort">
      <el-table-column type="index" label="Rank" width="100"></el-table-column>
      <el-table-column
        prop="cityName"
        label="Country"
        width="200"
      ></el-table-column>
      <el-table-column label="Score" width="200" sortable="custom">
        <!-- 实现可变数据的动态排序 -->
        <template v-slot="scope">
          {{ formatScore(scope.row) }}
        </template>
      </el-table-column>
      <el-table-column label="Performance">
        <template v-slot="scope">
          <div
            :style="{
              background: getBackgroundColor(scope.row),
              height: '20px',
            }"
          ></div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
  
<script setup>
import rankingDetailData from "@/assets/json/scoreDetail.json";
import { scoreFormat } from "@/utils/format.ts";
import { ref } from "vue";

// 计算score列的数据
const formatScore = (row) => {
  var score = 0;
  selectedDimension.value.forEach((item) => {
    dimensionColors.value.forEach((dimension) => {
      if (item == dimension.value) {
        score += Number(row[dimension.label]);
      }
    });
  });
  return Number(parseFloat(score).toFixed(2));
};

/**计算后的结果进行排序，原理：
 * 1、
 */
const tableSort = ({ column, prop, order }) => {
  // 直接使用array.sort()方法，对原始数据进行处理
  rankingDetailData.sort((a, b) => {
    const scoreA = formatScore(a);
    const scoreB = formatScore(b);
    if (order === "ascending") {
      return scoreA - scoreB;
    } else {
      return scoreB - scoreA;
    }
  });
};

// 格式化各维度数据
// const rankingDetailDataFormatted = scoreFormat(rankingDetailData);

// 各维度颜色
const dimensionColors = ref([
  {
    value: "#fbe4d5",
    label: "创新发展",
  },
  {
    value: "#d9e2f3",
    label: "协调发展",
  },
  {
    value: "#c5e0b3",
    label: "绿色发展",
  },
  {
    value: "#ffe599",
    label: "开放发展",
  },
  {
    value: "#d9c8eb",
    label: "共享发展",
  },
]);

// 选中的维度
const selectedDimension = ref([]);

// 将所有维度颜色添加到初始框中
dimensionColors.value.forEach((color) => {
  selectedDimension.value.push(color.value);
});

// 搞定多维度的色带啊
const getBackgroundColor = (row) => {
  // 先定下来颜色
  const innovationColor = "#fbe4d5";
  const operateColor = "#d9e2f3";
  const greenColor = "#c5e0b3";
  const openColor = "#ffe599";
  const sharingColor = "#d9c8eb";
  const emptyColor = "#EEEEEE";

  // console.log(selectedDimension.value,'123');

  var arr = [];
  // 将选中的颜色放到arr中，arr用来确定选择框里面放什么颜色
  selectedDimension.value.forEach((element) => {
    dimensionColors.value.forEach((item) => {
      if (item.value == element) {
        var data = {};
        data.dimension = item.label;
        data.score = Number(row[item.label]);
        arr.push(data);
        return;
      }
    });
  });

  // 产出色带，减去0.3是为了添加柔和效果
  return `linear-gradient(to right, 
    ${innovationColor} 0%, ${innovationColor} ${arraySum(arr, 1)}%, 
    ${operateColor} ${arraySum(arr, 1)}%, ${operateColor} ${arraySum(arr, 2)}%, 
    ${greenColor} ${arraySum(arr, 2)}%, ${greenColor} ${arraySum(arr, 3)}%, 
    ${openColor} ${arraySum(arr, 3)}%, ${openColor} ${arraySum(arr, 4)}%, 
    ${sharingColor} ${arraySum(arr, 4)}%, ${sharingColor} ${arraySum(arr, 5)}%,
    ${emptyColor} ${arraySum(arr, 5)}%, ${emptyColor} 100%)`;
};

// 数组求和方法，适用于getBackgroundColor方法
const arraySum = (arr, n) => {
  let sum = 0;

  var dimensionOrder = [
    "创新发展",
    "协调发展",
    "绿色发展",
    "开放发展",
    "共享发展",
  ];

  for (let i = 0; i < n; i++) {
    arr.forEach((item) => {
      if (item.dimension == dimensionOrder[i]) {
        sum += item.score;
      }
    });
  }
  return sum;
};
</script>
  
<style lang="scss" scoped>
.el-tag {
  border: none;
  aspect-ratio: 1;
}
.dimensionSelection {
  margin-bottom: 2vh;
  width: 50vw;
  position: relative;
  .introduction {
    position: relative;
    top: 2px;
    line-height: 20px;
    color: rgb(100, 100, 100);
    font-size: 20px;
    font-weight: 600;
  }
}
.container {
  padding-bottom: 50px;
}
</style>