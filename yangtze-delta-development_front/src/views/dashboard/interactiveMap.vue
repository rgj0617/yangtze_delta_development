<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <el-row class="normal">
        <el-col :span="4" class="information">
          <el-card class="normal">
            <el-collapse accordion v-model="activeName">
              <el-collapse-item name="5">
                <template #title>
                  综合评价
                  <el-icon><star-filled /></el-icon>
                </template>
                <div>
                  长三角高质量发展（2023）平均得分为55.38，其中，上海高质量发展水平最高，评分达87.82；江苏和浙江高质量发展水平次之，平均得分分别为61.35和60.50；安徽高质量发展水平相对较低，平均得分为44.98，相当于上海高质量发展水平的一半。
                </div>
              </el-collapse-item>
              <el-collapse-item title="创新" name="0">
                <div>
                  长三角各城市创新发展水平差异明显，高创新发展水平城市主要集中于少数区域核心城市。从空间分布来看，高分城市主要集中于上海和周边城市，以及各省省会城市，同样呈现“雁阵”轴带分布。
                </div>
              </el-collapse-item>
              <el-collapse-item title="协调" name="1">
                <div>
                  区域内多数城市整体呈现较高协调发展水平。从空间分布来看，高协调发展水平城市主要集中于浙江省北部、江苏省南部城市，呈片状连绵分布。
                </div>
              </el-collapse-item>
              <el-collapse-item title="绿色" name="2">
                <div>
                  长三角各城市绿色发展水平差异较小，其内部差距在五个维度中最小。从空间分布来看，高绿色发展水平城市分布广泛，于各省市区域内块状分布。
                </div>
              </el-collapse-item>
              <el-collapse-item title="开放" name="3">
                <div>
                  长三角各城市开放发展水平差异显著，高分城市集中于上海、南京、杭州、苏州等核心城市。从空间分布来看，高分城市集中于长三角东部，以上海为主要开放核心向内周边延伸。
                </div>
              </el-collapse-item>
              <el-collapse-item title="共享" name="4">
                <div>
                  长三角各城市共享发展水平存在一定差异，且上海共享发展水平明显高于其他城市。从空间分布来看，高分城市集中于上海及其周边城市，包括苏南和浙北，呈现片状连绵分布特征。
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
        <el-col :span="20" class="yangtzeMap">
          <yangtzeMap :currentMap="activeName" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import homeHeader from "@/components/header.vue";
import yangtzeMap from "@/components/map.vue";
import { ref } from "vue";

const activeName = ref("5");

// const changeDataMap = () => {
//     console.log(activeName.value,156);
//     emits("newMap",activeName.value)
// };
</script>

<style scoped lang="scss">
:deep(.el-collapse-item__header) {
  font-size: 0.7vw;
  margin: 8px 0;
  text-align: center;
  // padding: 20px 0 ;
  font-weight: bold;
}
.container {
  display: hidden;
  height: 100vh;
  width: 100vw;
  .head {
    height: 5.5vh;
    width: 100%;
  }
  .normal {
    width: 100%;
    height: 100%;
  }
  .sectionContent {
    width: 100%;
    height: 94vh;
  }
  .information {
    height: 100%;
    width: 15%;
  }
  .yangtzeMap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 85%;
  }
}
</style>