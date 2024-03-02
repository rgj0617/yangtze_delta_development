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
                  Comprehensive evaluation
                  <el-icon><star-filled /></el-icon>
                </template>
                <div>
                  Overall, the average score for high-quality development in the
                  Yangtze River Delta is 55.38. Among them, Shanghai has the
                  highest level of high-quality development, with a score of
                  87.82; Jiangsu and Zhejiang follow with average scores of
                  61.35 and 60.50, respectively; Anhui has a relatively lower
                  level of high-quality development, with an average score of
                  44.98.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Innovation" name="0">
                <div>
                  The innovation development levels vary significantly among
                  cities in the Yangtze River Delta, with high levels mainly
                  concentrated in a few core urban areas. Spatially,
                  high-scoring cities are mainly concentrated in Shanghai and
                  surrounding cities, as well as provincial capitals, presenting
                  a "geese formation" belt distribution.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Coordination" name="1">
                <div>
                  Most cities in the region exhibit a relatively high level of
                  coordinated development overall. Spatially, cities with high
                  levels of coordinated development are mainly concentrated in
                  the northern part of Zhejiang Province and the southern part
                  of Jiangsu Province, forming a contiguous distribution in
                  patches.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Green" name="2">
                <div>
                  The differences in the green development levels among cities
                  in the Yangtze River Delta are relatively small, with the
                  smallest gap among the five dimensions. Spatially, cities with
                  high levels of green development are widely distributed
                  throughout the provinces and municipalities, forming
                  block-like distributions within their respective regions.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Openness" name="3">
                <div>
                  The differences in the openness development levels among
                  cities in the Yangtze River Delta are significant, with
                  high-scoring cities concentrated in core cities such as
                  Shanghai, Nanjing, Hangzhou, and Suzhou. Spatially,
                  high-scoring cities are concentrated in the eastern part of
                  the Yangtze River Delta, with Shanghai as the main open core
                  extending to the surrounding areas.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sharing" name="4">
                <div>
                  There are certain differences in the level of shared
                  development among cities in the Yangtze River Delta, with
                  Shanghai notably having a higher level compared to other
                  cities. Spatially, high-scoring cities are concentrated in
                  Shanghai and its surrounding cities, including southern
                  Jiangsu and northern Zhejiang, exhibiting a patchy contiguous
                  distribution pattern.
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
  font-size: large;
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
    height: 94.3vh;
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