<template>
<div class="selectionContainer">
     <!-- 左侧：时间跨度 + 维度选择合并 -->
  <div class="selectionCard timeAndDimension">
    <!-- 时间跨度 -->
    <div class="timeRangeSelection">
      <span class="introduction">时间跨度：</span>
      <div class="yearRangePickers">
        <el-date-picker
          v-model="startYear"
          type="year"
          placeholder="开始年份"
          style="width: 120px"
          value-format="YYYY"
        />
        <span style="margin: 0 10px;">至</span>
        <el-date-picker
          v-model="endYear"
          type="year"
          placeholder="结束年份"
          style="width: 120px"
          value-format="YYYY"
        />
      </div>
    </div>

    <!-- 维度选择：去掉下拉，改成按钮卡片 -->
    <div class="dimensionSelection">
      <span class="introduction">维度对比：</span>
      <div class="dimensionBox">
        <div
          v-for="item in dimensionColors"
          :key="item.value"
          class="dimensionItem"
          :class="{ active: selectedDimension.includes(item.value) }"
          @click="toggleDimension(item.value)"
        >
          <el-tag :color="item.value" size="small" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
   <div class="selectionCard citySelection large">
    <span class="introduction">城市选择：</span>
    <div class="citySelectContainer">
      <!-- 左：可选城市 -->
      <div class="cityListBox">
        <div class="cityListHeader">
          可用城市 (共 {{ cityList.length }} 个)
        </div>
        <el-scrollbar style="height: 240px;">
          <div
            v-for="city in cityList"
            :key="city"
            class="cityItem"
            :class="{ active: selectedCities.includes(city) }"
            @click="toggleCity(city)"
          >
            {{ city }}
          </div>
        </el-scrollbar>
      </div>

      <!-- 中：按钮操作 -->
      <div class="cityActions">
        <el-button type="primary" size="large" style="width: 100%" @click="selectAll()">随机选择</el-button>
        <el-button type="danger" size="large" style="width: 100%" @click="clearAll">清空</el-button>
      </div>

      <!-- 右：已选城市 -->
      <div class="cityListBox">
        <div class="cityListHeader">
          已选择城市 ({{ selectedCities.length }} 个)
        </div>
        <el-scrollbar style="height: 240px;">
          <div
            v-for="city in selectedCities"
            :key="city"
            class="cityItem selected"
          >
            {{ city }}
          </div>
        </el-scrollbar>
      </div>
    </div>

    <!-- 底部提示条 -->
    <div class="cityNotice">
      已选择 {{ selectedCities.length }} / {{ cityList.length }} 个城市
      <span class="advice">（建议选择 5-8 个城市以获得最佳效果）</span>
    </div>
  </div>
</div>

  <el-card class="container">
    <div ref="chartRef" style="width: 100%; height: 400px;margin-top: 15px;"></div>  <!-- ECharts挂载点 -->
  </el-card>
  <el-card class="container" v-show="false">
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

import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import * as echarts from "echarts";
import { scoreFormat } from "@/utils/format.ts";

// ------------------- 年份和城市相关 -------------------
const availableYears = ref([2025, 2024, 2023]); // 可选年份
const startYear = ref(Math.min(...availableYears.value));  // 默认最早年份
const endYear = ref(Math.max(...availableYears.value));    // 默认最新年份
const selectedCities = ref([]);   // 当前选中的城市
const cityList = ref([]);         // 最新年份的城市列表
const allData = ref({});          // 所有年份数据 {year: [cityData]}
const toggleCity = (city) => {
  const idx = selectedCities.value.indexOf(city);
  if (idx > -1) {
    selectedCities.value.splice(idx, 1);
  } else {
    selectedCities.value.push(city);
  }
  updateChart();
};

const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};
const selectAll = (count = 5) => {
  const copiedArr = [...cityList.value];
  const shuffledArr = copiedArr.sort(() => Math.random() - 0.5);
  const result = shuffledArr.slice(0, count);
  selectedCities.value = result;
};

const clearAll = () => {
  selectedCities.value = [];
  
  updateChart();
  selectedCities.value = [];
};

// ------------------- 加载所有年份数据 -------------------
onMounted(async () => {
  const modules = import.meta.glob("/src/assets/json/*/scoreDetail.json");
  allData.value = {};
  for (const path in modules) {
    const yearMatch = path.match(/\/(\d{4})\/scoreDetail.json/);
    if (yearMatch) {
      const year = yearMatch[1];
      const module = await modules[path]();
      allData.value[year] = module.default;
    }
  }
  // 默认取最新年份的城市列表
  const years = Object.keys(allData.value).sort();
  if (years.length > 0) {
    const latestYear = years[years.length - 1];
    cityList.value = allData.value[latestYear].map((item) => item.cityName);
    if (cityList.value.length > 0) {
      selectedCities.value = [cityList.value[0]];
    }
  }
  // 延迟到 DOM 渲染完成后再初始化 ECharts
  await nextTick();
  setTimeout(() => {
    if (chartRef.value) {
      chartRef.value.style.width = "100%";
      chartRef.value.style.height = "400px";
      initChartWithResizeObserver();
    }
  }, 0);
});

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
  window.removeEventListener("resize", resizeChart);
   if (resizeObserver) { // 新增：清理ResizeObserver
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

// ------------------- 维度相关 -------------------
const dimensionColors = ref([
  { value: "#fbe4d5", label: "创新发展" },
  { value: "#d9e2f3", label: "协调发展" },
  { value: "#c5e0b3", label: "绿色发展" },
  { value: "#ffe599", label: "开放发展" },
  { value: "#d9c8eb", label: "共享发展" },
]);

const selectedDimension = ref(dimensionColors.value.map(d => d.value));
const toggleDimension = (color) => {
  const idx = selectedDimension.value.indexOf(color);
  if (idx > -1) {
    selectedDimension.value.splice(idx, 1);
  } else {
    selectedDimension.value.push(color);
  }
  updateChart();
};

// ------------------- ECharts -------------------
const chartRef = ref(null);
let chartInstance = null;
let resizeObserver = null;
const initChartWithResizeObserver = () => {
  if (!chartRef.value) return;
  
  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) { // 确保容器有有效尺寸
        if (!chartInstance) { // 首次初始化
          chartInstance = echarts.init(chartRef.value);
          updateChart();
        } else { // 尺寸变化时调整
          chartInstance.resize();
        }
      }
    }
  });
  
  resizeObserver.observe(chartRef.value); // 开始观察容器尺寸变化
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  if (chartInstance) chartInstance.dispose();
});

const handleResize = () => {
  if (chartInstance) chartInstance.resize();
};

// ------------------- 计算分数 -------------------
const calculateScore = (row) => {
  let score = 0;
  selectedDimension.value.forEach(color => {
    dimensionColors.value.forEach(dim => {
      if (dim.value === color) score += Number(row[dim.label]) || 0;
    });
  });
  return Number(score.toFixed(2));
};
 // 拼接"对比"
// ------------------- 图表更新 -------------------
const updateChart = () => {
  if (!chartInstance) return;

  // 情况1：无数据（城市为空或维度为空）
  if (selectedCities.value.length === 0 || selectedDimension.value.length === 0) {
    chartInstance.setOption({
      title: { text: '暂未选择城市或对比维度', subtext: '请先选择城市和对比维度' ,left:'center',
      textStyle: {
          fontSize: 32, // 字体大小（默认约12-14，可根据需要调整为16/18/20等）
          fontWeight: 'bold' // 可选：加粗字体更醒目
        },
      subtextStyle: {
          fontSize: 24 // 副标题字体大小
        }},
      legend: { data: [] }, // 清空图例
      xAxis: { show: false }, // 清空x轴数据
      yAxis: { show: false }, // 清空y轴数据
      series: [] // 清空系列数据
    }, true);
    return; // 处理完空数据就退出
  }
  else{
    const years = Object.keys(allData.value).sort();
    const filteredYears = years.filter(year => year >= startYear.value && year <= endYear.value);
    const dimensionText = selectedDimension.value.map(color => dimensionColors.value.find(d => d.value === color)?.label || color).join('+'); // 数组转字符串（用加号分隔）
    const titleText = `“${dimensionText}”维度对比`;
    const series = selectedCities.value.map(city => {
    const data = filteredYears.map(year => {
      const cityData = allData.value[year]?.find(item => item.cityName === city);
      return cityData ? calculateScore(cityData) : null;
    });
    return { name: city, type: "line", data };
  });
   // 计算所有数据的有效范围（排除null值）
  const allValues = series.flatMap(s => s.data.filter(d => d !== null));
  let yMin, yMax;
  if (allValues.length === 0) {
    // 无有效数据时的默认范围
    yMin = 0;
    yMax = 100;
  } else {
    const dataMin = Math.min(...allValues);
    const dataMax = Math.max(...allValues);
    const range = dataMax - dataMin;
    // 偏移量：数据范围的5%（若数据相同则用固定值）
    const offset = range > 0 ? range * 0.05 : 5;
    // 确保y轴起点不小于0（根据业务需求调整）
    yMin = Math.floor(Math.max(dataMin - offset, 0));
    yMax = Math.ceil(dataMax );
  }

    const option = {
    title: { text: titleText ,left:'center'},
    tooltip: { trigger: "axis" },
    legend: { data: selectedCities.value,top:'30px' },
    xAxis: { type: "category", data: filteredYears},
    yAxis: { type: "value", name: "Score", min: yMin, max: yMax },
    series
  };

    chartInstance.setOption(option, true);
      if (!chartInstance || selectedCities.value.length === 0 || selectedDimension.value.length === 0) 
    chartInstance.setOption({
      title: { text: '暂无数据' },
      series: [] // 清空系列数据
    })
  }

  
};

// ------------------- 监听变化 -------------------
watch([selectedCities, selectedDimension, startYear, endYear], () => {
  updateChart();
}, { deep: true });

// ------------------- 表格排序 -------------------
const rankingDetailData = ref([]);
const formatScore = (row) => {
  let score = 0;
  selectedDimension.value.forEach(item => {
    dimensionColors.value.forEach(dim => {
      if (item === dim.value) score += Number(row[dim.label]) || 0;
    });
  });
  return Number(score.toFixed(2));
};

const tableSort = ({ column, prop, order }) => {
  rankingDetailData.value.sort((a, b) => {
    const scoreA = formatScore(a);
    const scoreB = formatScore(b);
    return order === "ascending" ? scoreA - scoreB : scoreB - scoreA;
  });
};

// ------------------- 多维度背景色 -------------------
const getBackgroundColor = (row) => {
  const emptyColor = "#EEEEEE";
  const arr = selectedDimension.value.map(color => {
    const dim = dimensionColors.value.find(d => d.value === color);
    return { dimension: dim.label, score: Number(row[dim.label]) || 0 };
  });

  const dimensionOrder = ["创新发展","协调发展","绿色发展","开放发展","共享发展"];
  let sumPercent = (n) => {
    let sum = 0;
    for (let i=0;i<n;i++) {
      arr.forEach(item => { if(item.dimension === dimensionOrder[i]) sum += item.score; });
    }
    return sum;
  };

  return `linear-gradient(to right,
    #fbe4d5 0%, #fbe4d5 ${sumPercent(1)}%, 
    #d9e2f3 ${sumPercent(1)}%, #d9e2f3 ${sumPercent(2)}%, 
    #c5e0b3 ${sumPercent(2)}%, #c5e0b3 ${sumPercent(3)}%, 
    #ffe599 ${sumPercent(3)}%, #ffe599 ${sumPercent(4)}%, 
    #d9c8eb ${sumPercent(4)}%, #d9c8eb ${sumPercent(5)}%, 
    ${emptyColor} ${sumPercent(5)}%, ${emptyColor} 100%)`;
};
</script>

  
<style lang="scss" scoped>
/* 全局浅蓝色主题 */
:deep(.el-select),
:deep(.el-input),
:deep(.el-date-picker),
:deep(.el-table),
:deep(.el-card) {
  font-family: "Microsoft YaHei", sans-serif;
}

.timeAndDimension {
  flex: 1 ;   /* 时间和维度相对较小 */
  
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.citySelection.large {
  flex: 2 1 auto;   /* 城市选择框更大 */
  min-width: 500px; /* 最小宽度更宽 */
  display: flex;
  flex-direction: column;
}

/* 维度选择展开样式 */
.dimensionBox {
  gap: 10px;
  margin-top: 10px;
}
.dimensionItem {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid #dceafc;
  border-radius: 8px;
  background: #f9fbff;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 15px;
}
.dimensionItem:hover {
  background: #eaf4ff;
}
.dimensionItem.active {
  border-color: #409eff;
  background: #dceafc;
  font-weight: 600;
  color: #2b5c99;
}

/* 城市选择卡片 */
.citySelectContainer {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  flex: 1;
}
.cityListBox {
  flex: 1;
  border: 1px solid #dceafc;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.cityListHeader {
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  color: #2b5c99;
  border-bottom: 1px solid #e6f0fc;
  background: #f5faff;
}
.cityItem {
  padding: 6px 10px;
  cursor: pointer;
}
.cityItem.active {
  background: #dceafc;
  font-weight: 600;
  color: #2b5c99;
}
.cityItem.selected {
  background: #cde3ff;
  color: #1a4f8a;
  font-weight: 600;
}
.cityActions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

/* 底部提示条 */
.cityNotice {
  margin-top: 12px;
  padding: 8px 12px;
  background: #fff0f0;
  border: 1px solid #f5c2c2;
  border-radius: 6px;
  font-size: 14px;
  color: #b22222;
}
.cityNotice .advice {
  color: #d9534f;
  font-style: italic;
}
.selectionContainer {
  display: flex;
  flex-wrap: wrap; /* 适应小屏幕自动换行 */
  gap: 25px;
  padding: 15px 20px;
  background: #f5faff; /* 淡蓝背景 */
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 123, 255, 0.1);
  margin-bottom: 20px;
}
.selectionCard {
  flex: 1 1 auto;
  min-width: 280px;
  background: #fff;
  border-radius: 12px;
  padding: 18px 20px;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.1);
  border: 1px solid #dceafc;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.selectionCard:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 123, 255, 0.15);
}
.dimensionSelection,
.timeRangeSelection,
.citySelection {
  flex: 1 1 auto;
  min-width: 280px;
}

.introduction {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #2b5c99;
}

.el-select {
  background-color: #fff;
  border-radius: 8px;
  :deep(.el-input__inner) {
    border: 1px solid #a5c8f5;
    border-radius: 8px;
    padding: 6px 10px;
    transition: border-color 0.3s;
    &:focus {
      border-color: #409eff;
      box-shadow: 0 0 4px rgba(64, 158, 255, 0.4);
    }
  }
}

.el-date-editor {
  :deep(.el-input__inner) {
    border-radius: 8px;
    border: 1px solid #a5c8f5;
    &:focus {
      border-color: #409eff;
    }
  }
}

.yearRangePickers {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.citySelection .el-select {
  width: 100%;
}

/* 图表卡片 */
.container {
  width: 95%;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.1);
  border: 1px solid #dceafc;
}

/* 标签美化 */
.el-tag {
  border: none;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

/* 表格优化 */
:deep(.el-table) {
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;
}
:deep(.el-table th) {
  background: #e6f0fc !important;
  color: #2b5c99;
  font-weight: 600;
}
:deep(.el-table td) {
  color: #333;
}
.citySelectContainer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;
}

.cityListBox {
  flex: 1;
  border: 1px solid #dceafc;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.cityListHeader {
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  color: #2b5c99;
  border-bottom: 1px solid #e6f0fc;
  background: #f5faff;
}

.cityItem {
  padding: 6px 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.cityItem:hover {
  background: #eaf4ff;
}
.cityItem.active {
  background: #dceafc;
  font-weight: 600;
  color: #2b5c99;
}
.cityItem.selected {
  background: #cde3ff;
  color: #1a4f8a;
  font-weight: 600;
}

.cityActions  {
   padding-left: 0; /* 清除可能的左内边距 */
  border-left: none; /* 确保无左侧边框 */
  justify-content: center;
  width: 70px;
  gap: 30px;
}
.cityActions .el-button {
  margin-left: 0 !important; /* 清除左内边距 */
  text-align: center; /* 确保文字居中，避免内容偏移 */
}
</style>