<template>
  <div class="mapboxBorder">
    <div
      id="mapbox"
      style="width: 100%; height: 100%; border-radius: 18px"
    ></div>
    <div v-if="currentMap == 5" id="legend">
      <div class="legend-title">
        {{ legendTitle ? legendTitle : "综合评价" }}得分
      </div>
      <div class="legend-gradient"></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">50</div>
        <div class="legend-label">100</div>
      </div>
    </div>
    <div v-else-if="currentMap == 0" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #fff4f8 0%, #dc7d61 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 1" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #e0e5e9 0%, #73a9d7 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 2" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #e9f0e8 0%, #80c67d 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 3" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #fff8eb 0%, #f6bb81 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div v-else-if="currentMap == 4" id="legend">
      <div class="legend-title">{{ legendTitle }}得分</div>
      <div
        class="legend-gradient2"
        style="background: linear-gradient(to right, #eaebff 0%, #b67ebd 100%)"
      ></div>
      <div class="legend-labels">
        <div class="legend-label">0</div>
        <div class="legend-label">10</div>
        <div class="legend-label">20</div>
      </div>
    </div>
    <div class="change-record-container">
      <div class="change-record-title">
        指标修改可视化
      </div>
      <div class="select-city">
        <div class="label">目前选择的地级市：</div>
        <div class="value">{{ selectedCityStore.get() }}</div>
      </div>
      <div class="change-score">
        <div class="table-header">
          <div class="header-cell">维度</div>
          <div class="header-cell">排名变化</div>
        </div>
        <div 
          v-for="(i, index) in dimensions" 
          :key="index" 
          class="table-row"
          :style="{ background: dimensionColors[i] }"
        >
          <div class="table-cell dimension-name">{{ i }}</div>
          <div class="table-cell rank-change">
            <span 
              :class="{
                'rank-up': rankChanges[i] > 0,
                'rank-down': rankChanges[i] < 0,
                'rank-same': rankChanges[i] === 0
              }"
            >
              {{ rankChanges[i] > 0 ? '+' : '' }}{{ rankChanges[i] }}
              <span class="arrow-icon">
                <template v-if="rankChanges[i] > 0">↑</template>
                <template v-else-if="rankChanges[i] < 0">↓</template>
                <template v-else>—</template>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { map, loadMap, addGeoJson, updateMap, rankingFormatted } from "@/utils/mapbox-decision.js";
import { onMounted, reactive, ref, watch } from "vue";
import { useYearStore } from "@/store/year.js";
import { useSelectedCityStore } from "@/store/selectedCity.js"
import overallRanking from "@/assets/json/2025/总分_ranking.json"
import indicatorRanking from "@/assets/json/2025/创新发展_ranking.json"
import shareRanking from "@/assets/json/2025/共享发展_ranking.json"
import openRanking from "@/assets/json/2025/开放发展_ranking.json"
import greenRanking from "@/assets/json/2025/绿色发展_ranking.json"
import coordinateRanking from "@/assets/json/2025/协调发展_ranking.json"
const yearStore = useYearStore();
const selectedCityStore = useSelectedCityStore()
const legendTitle = ref("");

// 原始地图样式信息
let originRankingFormatted = JSON.parse(JSON.stringify(rankingFormatted))

const initMapbox = async () => {
  await loadMap("mapbox");
  map.setCenter([119.14, 31.22]); //修改地图中心点
  map.setZoom(6); //设置缩放级别
  map.on("styledata", async () => {
    await addGeoJson();
    updateMap(props.currentMap);
    if (originRankingFormatted.length === 0) originRankingFormatted = JSON.parse(JSON.stringify(rankingFormatted))
  });
  // if (originRankingFormatted.length === 0) originRankingFormatted = JSON.parse(JSON.stringify(rankingFormatted))
};

const props = defineProps({
  currentMap: String,
  updateData: Object
});

watch(
  () => yearStore.year,
  async (newValue, oldValue) => {
    await initMapbox();
  }
);

// 监听父组件传递过来的 currentMap 数据的变化
watch(
  () => props.currentMap,
  (newValue, oldValue) => {
    // console.log(rankingFormatted)
    // console.log(overallRanking)
    if (newValue) {
      switch (Number(newValue)) {
        case 0:
          legendTitle.value = "创新维度";
          break;
        case 1:
          legendTitle.value = "协调维度";
          break;
        case 2:
          legendTitle.value = "绿色维度";
          break;
        case 3:
          legendTitle.value = "开放维度";
          break;
        case 4:
          legendTitle.value = "共享维度";
          break;
        case 5:
          legendTitle.value = "综合评价";
          break;
      }
      updateMap(newValue);
    }
  }
);

const dimensions = ['创新', '协调', '绿色', '开放', '共享', '综合']
const dimensionColors = {
  '创新': 'linear-gradient(to right, #EEBAAF, #fff)',    
  '协调': 'linear-gradient(to right, #ACC8E0, #fff)',    
  '绿色': 'linear-gradient(to right, #B6DBB4, #fff)',    
  '开放': 'linear-gradient(to right, #FBDAB7, #fff)',    
  '共享': 'linear-gradient(to right, #D1B5DE, #fff)',    
  '综合': 'linear-gradient(to right, #8EBDCB, #fff)'
}
// 记录变化的变量
const scoreChanges = reactive({})
const rankChanges = reactive({})
const initializeChanges = () => {
  scoreChanges['创新'] = 0
  scoreChanges['协调'] = 0
  scoreChanges['绿色'] = 0
  scoreChanges['开放'] = 0
  scoreChanges['共享'] = 0
  scoreChanges['综合'] = 0
  rankChanges['创新'] = 0
  rankChanges['协调'] = 0
  rankChanges['绿色'] = 0
  rankChanges['开放'] = 0
  rankChanges['共享'] = 0
  rankChanges['综合'] = 0
}

// 根据得分变化计算排名变化
const calcRankChange = (city, dimension) => {
  let ranking
  switch (dimension) {
    case '创新':
      ranking = indicatorRanking
      break
    case '协调':
      ranking = coordinateRanking
      break
    case '绿色':
      ranking = greenRanking
      break
    case '开放':
      ranking = openRanking
      break
    case '共享':
      ranking = shareRanking
      break
    case '综合':
      ranking = overallRanking
      break
  }
  const index = ranking.findIndex((element) => element.city === city)
  let i = index
  
  while(i>0 && ranking[i-1].score<scoreChanges[dimension]) {
    i--
  }
  if(i!==index) return index - i;
  while(i<40 && ranking[i+1].score>scoreChanges[dimension]) {
    console.log(i)
    i++
  }
  if(i!==index) return index - i;
  return 0
}

// 清除所有修改
const recoverOriginRanking = () => {
  // 注意这里要使用深拷贝
  rankingFormatted.splice(0, rankingFormatted.length, ...JSON.parse(JSON.stringify(originRankingFormatted)))
}

// 监听选择的城市变化，初始化变量为对应的值
watch(
  () => selectedCityStore.get().value,
  (newValue, oldValue) => {
    // console.log("监听到了变化")
    initializeChanges()
    // console.log(originRankingFormatted)
    
    recoverOriginRanking()
    updateMap(props.currentMap)
  }
)

// 一个处理小工具，a为数字字符串，b为数字，最后返回字符串
const add = (a, b) => {
  return String(Number(a) + b)
}
// 减法
const sub = (a, b) => {
  return String(Number(a) - b)
}


// 记录历史修改内容
const changeHistory = reactive([])

// 检查修改历史记录，保证每个指标仅修改一次
const checkChangeHistory = (change, cityIndex) => {
  const index = changeHistory.findIndex((element) => {
    return (element.city === change.city && element.indicator === change.indicator)
  })
  if(index !== -1) {
    const removeChange = changeHistory[index]
    changeHistory.slice(index, index)
    rankingFormatted[cityIndex].score = sub(rankingFormatted[cityIndex].score, removeChange.delta)
    rankingFormatted[cityIndex][removeChange.dimension] = sub(rankingFormatted[cityIndex][removeChange.dimension], removeChange.delta)
  }
}

// 监听传递过来的 updateData 的变化修改地图样式
watch(
  () => props.updateData,
  (newValue, oldValue) => {
    // console.log(newValue)
    const index = rankingFormatted.findIndex((element) => element.cityName === newValue.city)

    checkChangeHistory(newValue, index)

    // 计算分数变化
    scoreChanges['综合'] = rankingFormatted[index].score = add(rankingFormatted[index].score, newValue.delta)
    scoreChanges[newValue.dimension.replace('发展', '')] = rankingFormatted[index][newValue.dimension] = add(rankingFormatted[index][newValue.dimension], newValue.delta)
    // console.log(originRankingFormatted)
    updateMap(props.currentMap)

    // 记录修改
    changeHistory.push(newValue)

    // 计算排名变化
    rankChanges['综合'] = calcRankChange(newValue.city, '综合')
    rankChanges[newValue.dimension.replace('发展', '')] = calcRankChange(newValue.city, newValue.dimension.replace('发展', ''))
    // console.log(rankChanges)
  },
  {deep: true}
)

onMounted(async () => {
  //挂载mapbox
  await initMapbox();
  initializeChanges()
  initializeChanges()
});
</script>

<style lang="scss" scoped>
#legend {
  position: absolute;
  bottom: 3%;
  right: 2%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  .legend-title {
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: 600;
  }
  .legend-gradient {
    width: 300px;
    height: 20px;
    background: linear-gradient(to right, #dbeef6, #36869a);
    border-radius: 5px;
  }
  .legend-gradient2 {
    width: 300px;
    height: 20px;
    // background: linear-gradient(to right, #e2f0d9 0%, #385723 100%);
    border-radius: 5px;
  }
  .legend-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    .legend-label {
      font-size: 12px;
    }
  }
}
.mapboxBorder {
  height: 98%;
  width: 98%;
  padding: 0;
  margin: 0.5%;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.15);
  // border: #475669 1px solid;
  border-radius: 18px;
}
.change-record-container {
  position: absolute;
  top: 3%;
  right: 2%;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 8px;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  .change-record-title {
    margin: 0 0 15px 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    border-bottom: 2px solid #4a90e2;
    padding-bottom: 8px;
  }
  
  .select-city {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f5f7fa;
    border-radius: 5px;
    font-size: large;
    
    .label {
      // font-size: 14px;
      color: #666;
      margin-right: 5px;
    }
    
    .value {
      // font-size: 14px;
      font-weight: 600;
      color: #4a90e2;
    }
  }
  
  .change-score {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    
    .table-header {
      display: grid;
      grid-template-columns: 50% 50%;
      // background: linear-gradient(135deg, #4378B4 0%, #ffffff 100%);
      background: #4378B4;
      color: white;
      font-weight: 600;
      
      .header-cell {
        padding: 12px;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        
        &:last-child {
          border-right: none;
        }
      }
    }
    
    .table-row {
      display: grid;
      grid-template-columns: 50% 50%;
      border-bottom: 1px solid #e0e0e0;
      transition: background-color 0.2s;
      
      // &:hover {
      //   // background-color: #f8f9fa;
      //   background-color: pink;
      // }
      
      // &.even-row {
      //   background-color: #fafbfc;
      // }
      
      &:last-child {
        border-bottom: none;
      }
      
      .table-cell {
        padding: 12px;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid #e0e0e0;
        
        &:last-child {
          border-right: none;
        }
        
        &.dimension-name {
          font-weight: 500;
          color: #333;
        }
        
        &.rank-change {
          display: flex;
          align-items: center;
          justify-content: center;
          
          span {
            display: inline-flex;
            align-items: center;
            font-weight: 600;
            
            &.rank-up {
              color: #52c41a;
            }
            
            &.rank-down {
              color: #f5222d;
            }
            
            &.rank-same {
              color: #999;
            }
            
            .arrow-icon {
              margin-left: 4px;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>