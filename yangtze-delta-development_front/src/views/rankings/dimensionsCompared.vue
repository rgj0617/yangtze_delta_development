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
          :disabled-date="disabledDate"
        />
        <span style="margin: 0 10px;">至</span>
        <el-date-picker
          v-model="endYear"
          type="year"
          placeholder="结束年份"
          style="width: 120px"
          value-format="YYYY"
          :disabled-date="disabledDate"
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
          :class="{ active: selectedDimension === item.value }"
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
            :class="{ 
              active: selectedCities.includes(city),
              disabled: !selectedCities.includes(city) && selectedCities.length >= 8
            }"
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
      已选择 {{ selectedCities.length }} / 8 个城市
      <span class="advice" v-if="selectedCities.length < 8">（建议选择 5-8 个城市以获得最佳效果）</span>
      <span class="warning" v-else>（已达到最大选择数量）</span>
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

import { ref, watch, onMounted, onUnmounted, nextTick, computed } from "vue";
import * as echarts from "echarts";
import { scoreFormat } from "@/utils/format.ts";

// ------------------- 年份和城市相关 -------------------
const availableYears = computed(() => {
  return Object.keys(allData.value).map(year => parseInt(year)).sort();
}); // 根据实际数据计算可用年份
const startYear = ref("2024");  // 默认开始年份
const endYear = ref("2025");    // 默认结束年份

// 禁用没有数据的年份，同时禁用2023年
const disabledDate = (date) => {
  const year = date.getFullYear();
  return !availableYears.value.includes(year) || year === 2023;
};
const selectedCities = ref([]);   // 当前选中的城市
const cityList = ref([]);         // 最新年份的城市列表
const allData = ref({});          // 所有年份数据 {year: [cityData]}
const toggleCity = (city) => {
  const idx = selectedCities.value.indexOf(city);
  if (idx > -1) {
    // 如果城市已选中，则移除
    selectedCities.value.splice(idx, 1);
  } else {
    // 如果城市未选中，检查是否已达到最大选择数量
    if (selectedCities.value.length >= 8) {
      // 达到最大限制时不执行任何操作，也不显示警告
      return;
    }
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
  // 确保选择数量不超过8个
  const maxCount = Math.min(count, 8, cityList.value.length);
  const copiedArr = [...cityList.value];
  const shuffledArr = copiedArr.sort(() => Math.random() - 0.5);
  const result = shuffledArr.slice(0, maxCount);
  selectedCities.value = result;
  updateChart();
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
    const earliestYear = years[1];
    
    // 设置默认年份范围
    startYear.value = earliestYear;
    endYear.value = latestYear;
    
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
  { value: "#fac39f", label: "创新发展" },
  { value: "#bfd3f9", label: "协调发展" },
  { value: "#c5e0b3", label: "绿色发展" },
  { value: "#ffe599", label: "开放发展" },
  { value: "#d9c8eb", label: "共享发展" },
]);

const selectedDimension = ref(null);
const toggleDimension = (color) => {
  // 单选逻辑：如果点击的是当前选中的维度，则取消选择；否则选择新的维度
  selectedDimension.value = selectedDimension.value === color ? null : color;
  updateChart();
};

// 生成基于维度颜色的深浅色系列
const generateColorSeries = (baseColor, count) => {
  if (!baseColor || count <= 0) return [];
  
  // 将十六进制颜色转换为RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  // 将RGB转换为十六进制
  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  
  const baseRgb = hexToRgb(baseColor);
  if (!baseRgb) return [baseColor];
  
  const colors = [];
  for (let i = 0; i < count; i++) {
    // 生成从浅到深的颜色系列
    const factor = 0.3 + (0.7 * i / Math.max(count - 1, 1)); // 从0.3到1.0
    const r = Math.round(255 - (255 - baseRgb.r) * factor);
    const g = Math.round(255 - (255 - baseRgb.g) * factor);
    const b = Math.round(255 - (255 - baseRgb.b) * factor);
    colors.push(rgbToHex(r, g, b));
  }
  
  return colors;
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
  if (!selectedDimension.value) return 0;
  
  const selectedDim = dimensionColors.value.find(dim => dim.value === selectedDimension.value);
  if (!selectedDim) return 0;
  
  return Number((Number(row[selectedDim.label]) || 0).toFixed(2));
};
 // 拼接"对比"
// ------------------- 图表更新 -------------------
const updateChart = () => {
  if (!chartInstance) return;

  // 情况1：无数据（城市为空或维度为空）
  if (selectedCities.value.length === 0 || !selectedDimension.value) {
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
    const selectedDim = dimensionColors.value.find(d => d.value === selectedDimension.value);
    const dimensionText = selectedDim ? selectedDim.label : '未知维度';
    const titleText = `"${dimensionText}"维度对比`;
    
    // 生成基于维度颜色的深浅色系列
    const baseColor = selectedDimension.value;
    const colorSeries = generateColorSeries(baseColor, filteredYears.length);
    
    // 重新组织数据：每个年份作为一个series，城市作为X轴
    const series = filteredYears.map((year, index) => {
      const data = selectedCities.value.map(city => {
        const cityData = allData.value[year]?.find(item => item.cityName === city);
        return cityData ? calculateScore(cityData) : null;
      });
      return { 
        name: year, 
        type: "bar", 
        data,
        itemStyle: {
          color: colorSeries[index] || baseColor
        },
        emphasis: {
          disabled: true
        }
      };
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
    legend: { data: filteredYears, top:'30px' },
    xAxis: { type: "category", data: selectedCities.value },
    yAxis: { type: "value", name: "Score", min: yMin, max: yMax },
    series,
    // 禁用颜色淡化效果
    emphasis: {
      disabled: true
    },
    // 全局禁用blur效果
    blurScope: 'none'
  };

    chartInstance.setOption(option, true);
  }

  
};

// ------------------- 监听变化 -------------------
watch([selectedCities, selectedDimension, startYear, endYear], () => {
  updateChart();
}, { deep: true });

// ------------------- 表格排序 -------------------
const rankingDetailData = ref([]);
const formatScore = (row) => {
  // //let score = 0;
  // selectedDimension.value.forEach(item => {
  //   dimensionColors.value.forEach(dim => {
  //     if (item === dim.value) score += Number(row[dim.label]) || 0;
  //   });
  // });
  // return Number(score.toFixed(2));
  
  if (!selectedDimension.value) return 0;
  
  const selectedDim = dimensionColors.value.find(dim => dim.value === selectedDimension.value);
  if (!selectedDim) return 0;
  
  return Number((Number(row[selectedDim.label]) || 0).toFixed(2));
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
  if (!selectedDimension.value) return "#EEEEEE";
  
  const selectedDim = dimensionColors.value.find(d => d.value === selectedDimension.value);
  if (!selectedDim) return "#EEEEEE";
  
  const score = Number(row[selectedDim.label]) || 0;
  const maxScore = 100; // 假设最大分数为100，可根据实际情况调整
  const percentage = Math.min((score / maxScore) * 100, 100);
  
  return `linear-gradient(to right, ${selectedDimension.value} 0%, ${selectedDimension.value} ${percentage}%, #EEEEEE ${percentage}%, #EEEEEE 100%)`;
};
</script>

  
<style lang="scss" scoped>
@use "@/styles/responsive.scss" as *;
/* 全局浅蓝色主题 */
:deep(.el-select),
:deep(.el-input),
:deep(.el-date-picker),
:deep(.el-table),
:deep(.el-card) {
  font-family: "Microsoft YaHei", sans-serif;
}

.timeAndDimension {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.citySelection.large {
  min-width: 0;
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
.cityItem.disabled {
  background: #f5f5f5;
  color: #ccc;
  cursor: not-allowed;
}
.cityItem.disabled:hover {
  background: #f5f5f5;
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
.cityNotice .warning {
  color: #e74c3c;
  font-weight: 600;
  font-style: italic;
}
.selectionContainer {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.2vw, 18px);
  align-items: start;
  padding: 15px 20px;
  background: #f5faff; /* 淡蓝背景 */
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 123, 255, 0.1);
  margin-bottom: 20px;
}
.selectionContainer .selectionCard {
  min-width: 0; /* 保证两列在较窄容器下也不换行 */
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
@include mobile {
  .selectionContainer {
    grid-template-columns: 1fr;
  }
}
@include tablet {
  .selectionContainer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@include desktop {
  .selectionContainer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@include desktop_hd {
  .selectionContainer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>