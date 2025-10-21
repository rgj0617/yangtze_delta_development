<template>
  <el-card class="container">
    <el-table :data="comparisonData" stripe class="adaptive-table">
      <el-table-column
        prop="cityName"
        label="Country"
        width="120"
        align="center"
      />
      <el-table-column
        prop="currentRanking"
        width="105"
        align="center"
      >
        <template #header>
          <el-select v-model="currentSelectedYear" size="small" style="width: 80px">
            <el-option
              v-for="year in availableYears"
              :key="year"
              :label="year"
              :value="year"
              :disabled="year===2023"
            />
            <!-- 禁用2023和与自身对比 -->
          </el-select>
        </template>
        </el-table-column>
      <el-table-column
        prop="previousRanking"
        width="105"
        align="center"
      >
        <template #header>
          <el-select v-model="selectedYear" size="small" style="width: 80px">
            <el-option
              v-for="year in availableYears"
              :key="year"
              :label="year"
              :value="year"
              :disabled=" year ===2023"
            />
            <!-- 禁用2023和与自身对比 -->
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="Rank_Change"
        
        align="center"
        sortable
        prop="rankingChange"
      >
        <template v-slot="scope">
          <div class="change-indicator">
            <el-icon v-if="scope.row.rankingChange > 0" class="up-arrow">
              <ArrowUp />
            </el-icon>
            <el-icon v-else-if="scope.row.rankingChange < 0" class="down-arrow">
              <ArrowDown />
            </el-icon>
            <el-icon v-else-if="scope.row.rankingChange === 0" class="no-change">
              —
            </el-icon>
            <span v-if="scope.row.rankingChange > 0" class="positive-change">
              {{ scope.row.rankingChange }}
            </span>
            <span v-else-if="scope.row.rankingChange < 0" class="negative-change">
              {{ Math.abs(scope.row.rankingChange) }}
            </span>
          </div>
        </template>
      </el-table-column>
      
      <el-table-column
        prop="currentScore"
        :label="currentSelectedYear + ' Ratings'"
        align="center"
        sortable
      />
      <el-table-column
        prop="previousScore"
        :label="selectedYear + ' Ratings'"
        align="center"
        sortable
      />
      <el-table-column
        label="Ratings_Change"
       
        align="center"
      >
        <template v-slot="scope">
          <div class="change-indicator">
            <span :class="getChangeClass(scope.row.scoreChange)">
              {{ Math.abs(scope.row.scoreChange === 'NEW' ? 'NEW' : scope.row.scoreChange).toFixed(2) }}
            </span>
            <span v-if="scope.row.scoreChange !== 'NEW' && parseFloat(scope.row.scoreChange) > 0" class="small-up-arrow">
              ↑
            </span>
            <span v-else-if="scope.row.scoreChange !== 'NEW' && parseFloat(scope.row.scoreChange) < 0" class="small-down-arrow">
              ↓
            </span>
          </div>
        </template>
      </el-table-column>
      
    </el-table>
  </el-card>
</template>

<script setup>
import { watch, ref } from "vue";
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue';
import { scoreFormat } from "@/utils/format.ts";
// import { getAvailableYears } from "@/utils/getAvailableYears.ts";

const comparisonData = ref([]);
const selectedYear = ref(2024);
const currentSelectedYear = ref(2025); // 最新年份
const availableYears = ref([2025, 2024, 2023])
// onMounted(async () => {
//   availableYears.value = await getAvailableYears()
// })


// 获取最新年份和选择年份的数据
const getCurrentYearData = async () => {
  const modules = import.meta.glob("/src/assets/json/**/*.json");
  const previousYear = selectedYear.value; // 使用选择的年份
  const currentYear = currentSelectedYear.value; // 使用当前选中的年份
  
  const currentPath = `/src/assets/json/${currentYear}/scoreRanking.json`;
  const previousPath = `/src/assets/json/${previousYear}/scoreRanking.json`;
  
  let currentData = [];
  let previousData = [];
  
  if (modules[currentPath]) {
    const currentModule = await modules[currentPath]();
    currentData = scoreFormat(currentModule.default);
  }
  
  if (modules[previousPath]) {
    const previousModule = await modules[previousPath]();
    previousData = scoreFormat(previousModule.default);
  }
  
  return { currentData, previousData };
};

// 计算对比数据
const calculateComparison = (currentData, previousData) => {
  const comparison = [];
  
  currentData.forEach((currentItem) => {
    const previousItem = previousData.find(item => item.cityName === currentItem.cityName);
    
    if (previousItem) {
      const rankingChange = parseInt(previousItem.ranking) - parseInt(currentItem.ranking);
      const scoreChange = (parseFloat(currentItem.score) - parseFloat(previousItem.score)).toFixed(2);
      
      comparison.push({
        currentRanking: currentItem.ranking,
        previousRanking: previousItem.ranking,
        cityName: currentItem.cityName,
        currentScore: currentItem.score,
        previousScore: previousItem.score,
        rankingChange: rankingChange,
        scoreChange: scoreChange
      });
    } else {
      // 如果在上一年数据中找不到该城市，标记为新增
      comparison.push({
        currentRanking: currentItem.ranking,
        previousRanking: '-',
        cityName: currentItem.cityName,
        currentScore: currentItem.score,
        previousScore: '-',
        rankingChange: 0,
        scoreChange: 'NEW'
      });
    }
  });
  
  return comparison;
};

// 监听选择的年份变化
watch([currentSelectedYear, selectedYear], async () => {
  const { currentData, previousData } = await getCurrentYearData();
  comparisonData.value = calculateComparison(currentData, previousData);
}, { immediate: true });

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

const getChangeClass = (change) => {
  if (change === 'NEW') return 'new-entry';
  const numChange = parseFloat(change);
  if (numChange > 0) return 'positive-change';
  if (numChange < 0) return 'negative-change';
  return 'no-change';
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 50px;
  
}

.adaptive-table {
 flex-direction: column;
 
}

.change-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.up-arrow {
  color: #67c23a;
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
}

.down-arrow {
  color: #f56c6c;
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
}

.small-up-arrow {
  color: #67c23a;
  font-size: 14px;
  font-weight: normal;
  margin-left: 4px;
}

.small-down-arrow {
  color: #f56c6c;
  font-size: 14px;
  font-weight: normal;
  margin-left: 4px;
}

.no-change {
  color: #909399;
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
}

.positive-change {
  color: #67c23a;
  font-weight: bold;
}

.negative-change {
  color: #f56c6c;
  font-weight: bold;
}

.new-entry {
  color: #409eff;
  font-weight: bold;
}

:deep(.el-table th) {
  background-color: #f5f7fa;
  font-weight: bold;
}

:deep(.el-table td) {
  padding: 8px 0;
}

/* 针对1920*1080 125%缩放（有效分辨率1536px）的优化 */
@media (min-width: 1536px) and (max-width: 1920px) {
  :deep(.el-table th) {
    font-size: 9px; /* 减小表头字体大小，防止列名叠行 */
    line-height: 1.2;
    white-space: nowrap; /* 强制单行显示 */
  }
  
  :deep(.el-table td) {
    font-size: 12px; /* 相应调整表格内容字体大小 */
  }
  /* 排序按钮容器优化 */
  :deep(.el-table th .caret-wrapper) {
    width: 10px; /* 减小排序按钮容器宽度 */
    margin-left: 1px; /* 减小左边距 */
  }
  /* 针对下拉选择器的优化 */
  :deep(.el-select) {
    font-size: 11px;
  }
}
</style>