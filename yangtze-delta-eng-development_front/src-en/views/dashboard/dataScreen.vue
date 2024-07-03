<style lang="scss" scoped>
html,
body {
  height: 100vh;
  width: 100vw;
}

.charts {
  width: 100%;
  height: 100%;
}

.mapBorder {
  // border: 1px solid black;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  /* 开启BFC */
  /* overflow: hidden;  */
}

.chartsRow {
  width: 100%;
  height: 100%;
}
.head {
  width: 100%;
  background-color: white;
}
.foot {
  width: 100%;
  height: 0.0001%;
  text-align: center;
  font-size: 16px;
  /* line-height: 5%;  */
  // background-color: #666;
  // padding-top: 0.5%;
}
.title {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  text-align: center;
  height: 6%;
  // border: 1px solid #666;
  color: #2f89cf;
  // letter-spacing: 2px;
  font-size: 2vh;
  padding: 0.5vh;
  font-weight: bold;
}
.bars {
  height: 93%;
  width: 90%;
  margin-left: 5%;
}
.mapMiddle {
  height: 83%;
}
.mapBottom {
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
}
.introduce {
  height: 38vh;
  position: relative;
}
.piesOrBar {
  height: 53%;
  /* border: 1px yellow solid; */
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pieSelect {
  width: 20%;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

.pie-item {
  width: 6.8vw;
  height: 6.8vw;
  position: relative;
}
.pieItems {
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  justify-content: center;
  align-items: center;
}
.pieLegend {
  width: 100%;
  height: 8%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item--card {
  height: 50%;
}
.el-carousel__item--card {
  margin-top: 4%;
}
.pieCard {
  width: 86%;
  height: 88%;
  margin: 0 5%;
  padding: 1% 2%;
  position: relative;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  overflow: auto;
}
.pieBackgroundImage {
  width: 90%;
  height: 90%;
  margin: 0 5%;
  object-fit: cover;
  z-index: 0;
  position: absolute;
  border-radius: 10px;
}
.el-main {
  overflow: auto;
}
.mapboxBorder {
  height: 100%;
  width: 98%;
  margin: 0 1%;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.15);
  // border: #475669 1px solid;
  border-radius: 8px;
}
:deep(.echarts-legend .zr-text) {
  display: none;
}

@media (max-width: 1000px) {
  .leftRanking {
    height: 100vh;
  }
  .middleMap {
    height: 100vh;
  }
  .rightPie {
    height: 100vh;
  }
  .charts {
    margin: 1vh 0;
  }
  .pieCard {
    width: 90%;
    height: 90%;
    margin: 0 5%;
    position: relative;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    overflow: auto;
    li {
      margin-bottom: 2vw;
    }
    ul {
      font-size: 3vw;
      line-height: 3.6vw;
    }
  }
}
</style>

<template>
  <div style="width: 100vw; height: 100vh">
    <el-container style="width: 100%; height: 100%">
      <div class="head" style="height: 5.5vh; width: 100%">
        <homeHeader></homeHeader>
      </div>

      <el-main>
        <el-row class="chartsRow" :gutter="20">
          <el-col :span="isMobile ? 24 : 6">
            <div class="charts mapBorder leftRanking">
              <div class="title">
                Yangtze River Delta High-Quality Development Evaluation Ranking
              </div>
              <div class="bars" id="bars"></div>
            </div>
          </el-col>

          <el-col :span="isMobile ? 24 : 10">
            <div class="charts mapBorder middleMap">
              <div class="title">
                Spatial Distribution of High-Quality Development Level in the
                Yangtze River Delta
              </div>
              <div class="mapMiddle">
                <div class="mapboxBorder">
                  <div
                    id="mapbox"
                    style="width: 100%; height: 100%; border-radius: 8px"
                  ></div>
                </div>
              </div>
              <div class="mapBottom">
                <el-radio-group v-model="radio" @change="handleRadioChange">
                  <el-radio :label="5" class="radio-item"
                    >Comprehensive</el-radio
                  >
                  <el-radio :label="0" class="radio-item">Innovation</el-radio>
                  <el-radio :label="1" class="radio-item"
                    >Coordination</el-radio
                  >
                  <el-radio :label="2" class="radio-item">Green</el-radio>
                  <el-radio :label="3" class="radio-item">Openness</el-radio>
                  <el-radio :label="4" class="radio-item">Sharing</el-radio>
                </el-radio-group>
              </div>
            </div>
          </el-col>

          <el-col :span="isMobile ? 24 : 8">
            <div class="charts mapBorder rightPie">
              <!-- <div class="title">
                  介绍内容
                </div> -->
              <div class="title">
                Details of the High-Quality Development Evaluation in the
                Yangtze River Delta
              </div>
              <div class="introduce">
                <img
                  :src="backgroundUrl"
                  class="pieBackgroundImage"
                  alt="Background Image"
                />
                <!-- 综合 -->
                <el-card class="pieCard" v-if="radio == 5">
                  Shanghai is the core of high-quality development in the
                  Yangtze River Delta cities, with the strongest open economy
                  and the most extensive public services in the region. However,
                  due to its absolute advantageous position, its score in
                  coordinated development is relatively low.
                  <br />
                  <br />
                  Nanjing also shows a relatively balanced level of high-quality
                  development, with high evaluation results in all dimensions,
                  and performs better than Shanghai in terms of coordinated
                  development and green development.
                  <br />
                  <br />
                  Hangzhou is on par with Nanjing, also showing a relatively
                  balanced level of high-quality development, with an emphasis
                  on innovation development, green development, and coordinated
                  development dimensions.
                  <br />
                  <br />
                  Hefei exhibits strong competitiveness in the three dimensions
                  of innovation development, coordinated development, and green
                  development, but still needs to make efforts in the aspects of
                  open development and sharing development.
                  <br />
                  <br />
                </el-card>
                <!-- 创新 -->
                <el-card class="pieCard" v-if="radio == 0">
                  The levels of innovative development among the cities in the
                  Yangtze River Delta vary significantly, with cities having
                  high levels of innovative development mainly concentrated in a
                  few core regional cities.
                  <br />
                  <br />
                  In terms of spatial distribution, high-scoring cities are
                  primarily concentrated in Shanghai and its neighboring cities,
                  as well as in the provincial capitals, also showing a "goose
                  formation" pattern of distribution along axes.
                  <br />
                  <br />
                  Hangzhou, Shanghai, Suzhou, Nanjing, and Hefei have
                  significantly higher scores than other cities, belonging to
                  the first echelon and are the main engines of innovation
                  development in the Yangtze River Delta; Ningbo, Wuhu, Wuxi,
                  and Changzhou belong to the second echelon.
                  <br />
                  <br />
                  The remaining 32 cities are categorized into the third,
                  fourth, to fifth echelons, with relatively lower levels of
                  innovative development.
                  <br />
                  <br />
                </el-card>
                <!-- 协调 -->
                <el-card class="pieCard" v-if="radio == 1">
                  Most cities in the region generally exhibit a high level of
                  coordinated development. In terms of spatial distribution,
                  cities with high levels of coordinated development are mainly
                  concentrated in the northern part of Zhejiang Province and the
                  southern part of Jiangsu Province, showing a patchy and
                  contiguous distribution.
                  <br />
                  <br />
                  The top 10 cities in the Yangtze River Delta for coordinated
                  development are Changzhou, Nanjing, Hangzhou, Suzhou, Ningbo,
                  Jiaxing, Hefei, Shaoxing, and Huzhou, among which cities in
                  Zhejiang Province account for half, indicating that Zhejiang
                  Province has a relatively high level of coordinated
                  development.
                  <br />
                  <br />
                  In terms of internal disparities, the gradient distribution of
                  the cities' coordinated development scores is relatively
                  gentle. Changzhou, Nanjing, Hangzhou, Suzhou, Ningbo, Jiaxing,
                  Hefei, Shaoxing, and Huzhou belong to the first echelon.
                  Huzhou, Wuxi, Zhoushan, Yangzhou, Jinhua, Zhenjiang, Wenzhou,
                  and Shanghai belong to the second echelon, while the remaining
                  25 cities are distributed across the third, fourth, and fifth
                  echelons.
                  <br />
                  <br />
                </el-card>

                <!-- 绿色 -->
                <el-card class="pieCard" v-if="radio == 2">
                  The differences in green development levels among the cities
                  in the Yangtze River Delta are relatively small, with the
                  internal disparities being the smallest among the five
                  dimensions. In terms of spatial distribution, cities with high
                  levels of green development are widely distributed, forming
                  patches within the regions of each province and city.
                  <br />
                  <br />
                  In particular, the top 10 cities for green development in the
                  Yangtze River Delta are Hangzhou, Huangshan, Zhoushan, Wuxi,
                  Nanjing, Hefei, Ningbo, Wuhu, and Shanghai. Against the
                  backdrop of the overall high level of green development in the
                  Yangtze River Delta, these cities possess even more superior
                  capabilities in green development.
                  <br />
                  <br />
                  The gradient changes within the region are relatively small.
                  Hangzhou, Huangshan, Zhoushan, Wuxi, Nanjing, Hefei, and
                  Ningbo belong to the first echelon, while Wuhu, Shanghai,
                  Yangzhou, Suzhou, Changzhou, and Wenzhou belong to the second
                  echelon. The remaining 28 cities are distributed across the
                  third, fourth, and fifth echelons. The scores for green
                  development levels among and within each echelon change
                  little, showing an overall high level of green development.
                  <br />
                </el-card>

                <!-- 开放 -->
                <el-card class="pieCard" v-if="radio == 3">
                  There is a significant difference in the level of open
                  development among the cities in the Yangtze River Delta, with
                  high-scoring cities concentrated in core cities such as
                  Shanghai, Nanjing, Hangzhou, and Suzhou. In terms of spatial
                  distribution, high-scoring cities are concentrated in the
                  eastern part of the Yangtze River Delta, extending from
                  Shanghai, the main core of openness, to its surrounding areas.
                  <br />
                  <br />
                  In particular, the top 10 cities for open development in the
                  Yangtze River Delta are Shanghai, Nanjing, Hangzhou, Suzhou,
                  Ningbo, Wuxi, Jiaxing, Changzhou, and Zhoushan. Shanghai's
                  level of openness is significantly higher than other cities,
                  scoring full marks; apart from a few core cities, the level of
                  open development in other cities remains relatively low.
                  <br />
                  <br />
                  Overall, the scores for the level of open development among
                  the cities show a significant gradient differentiation and
                  exhibit a clear polarization phenomenon: Shanghai, Nanjing,
                  Hangzhou, and Suzhou belong to the first echelon; Ningbo,
                  Wuxi, Jiaxing, Changzhou, and Zhoushan, along with Hefei,
                  Nantong, and Xuzhou, belong to the second echelon; the
                  remaining 29 cities are distributed across the third, fourth,
                  and fifth echelons, with scores not reaching half of the first
                  echelon.
                  <br />
                </el-card>

                <!-- 共享 -->
                <el-card class="pieCard" v-if="radio == 4">
                  There are certain differences in the level of shared
                  development among the cities in the Yangtze River Delta, with
                  Shanghai's level of shared development significantly higher
                  than that of other cities. In terms of spatial distribution,
                  high-scoring cities are concentrated in Shanghai and its
                  surrounding cities, including the southern part of Jiangsu and
                  the northern part of Zhejiang, showing a patchy and contiguous
                  distribution characteristic.
                  <br />
                  <br />
                  In particular, the top 10 cities for shared development in the
                  Yangtze River Delta are Shanghai, Wuxi, Suzhou, Ningbo,
                  Nanjing, Jiaxing, Hangzhou, Changzhou, and Nantong. Cities in
                  Jiangsu Province account for half, demonstrating that Jiangsu
                  Province has a relatively high level of shared development.
                  <br />
                  <br />
                  The gradient differentiation of shared development levels
                  among cities is obvious, with Shanghai, Wuxi, and Suzhou
                  belonging to the first echelon, and Ningbo, Nanjing, Jiaxing,
                  Hangzhou, Changzhou, and Nantong belonging to the second
                  echelon. The remaining 32 cities are distributed across the
                  third, fourth, and fifth echelons. Although the score
                  differences among the cities ranked later are small, there is
                  a significant gap compared to the echelons ranked at the top,
                  and the internal gap in the level of shared development is
                  relatively large.
                  <br />
                </el-card>
              </div>
              <div class="piesOrBar">
                <div v-if="showPie" class="charts">
                  <div class="flex-container">
                    <div class="title">
                      Evaluation of High-Quality Development Dimensions in
                      {{ selectedCity }}
                    </div>
                    <!-- 打开下拉框后直接打字搜索 -->
                    <el-select
                      class="pieSelect"
                      placeholder="Select a City"
                      v-model="selectedCity"
                      @change="handleCityChange"
                      filterable
                    >
                      <el-option
                        v-for="city in cityNames"
                        :key="city"
                        :label="city"
                        :value="city"
                      >
                        {{ city }}
                      </el-option>
                    </el-select>
                  </div>

                  <div class="pieItems">
                    <div id="single-pie-chart" class="charts"></div>
                  </div>
                  <!-- <div id="pie-item-legend" class="pieLegend"></div> -->
                </div>
                <div v-else id="bars2" style="width: 100%; height: 44vh"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-footer class="foot">
        <!-- Copyright © 2023-2024 南京师范大学-OpenGMS. All Rights Reserved. -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { map, loadMap, addGeoJson, updateMap } from "@/utils/mapbox.js";
import {
  getAnnualScore,
  getMultiPieData,
  getMultiPieDataNew,
  getDBData,
  getMultiBarData,
} from "@/utils/dataExplorerEcharts.js";
import { cityNames } from "@/utils/dataExplorerEcharts.js"; //cityNames
import * as echarts from "echarts";
import homeHeader from "@/components/header.vue";
// import { set } from "ol/transform.js";

export default {
  name: "annual",
  components: {
    homeHeader,
  },
  data() {
    return {
      DBdate: {},
      AnnualScoreOption: {},
      radio: 5,
      backgroundUrl: "",
      showPie: true,
      selectedCity: "Shanghai",
      cityNames: cityNames,
      isMobile: false,
    };
  },
  methods: {
    //初始化mapbox控件的方法
    initMapbox() {
      loadMap("mapbox");
      map.setCenter([119.14, 31.37]); //修改地图中心点
      map.setZoom(5.5); //设置缩放级别
    },
    //echarts的方法，包括了初始化和渲染，只需要传入数据和需要放置图表的位置即可
    initChart(chartData, dom) {
      let myChart = echarts.init(document.getElementById(dom));
      myChart.setOption({});
      myChart.setOption(chartData);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    //绘制主页所有图标的方法
    drawChart(num) {
      this.initChart(getAnnualScore(this.DBdate), "bars");
      // this.initChart(getMultiPieDataNew(this.DBdate), "pie");
      // for (let i = 1; i <= 8; i++) {
      //   this.initChart(getMultiPieData(this.DBdate, i), `pie-item${i}`);
      // }
      this.initChart(
        getMultiPieData(this.DBdate, this.selectedCity),
        "single-pie-chart"
      );
      // this.initChart(getMultiPieData(this.DBdate, "legend"), "pie-item-legend");
    },
    //监听单选框的变化，这个动态页面的命脉方法
    handleRadioChange(value) {
      updateMap(value);
      this.initChart(getAnnualScore(this.DBdate, value), "bars");
      if (value == "5") {
        this.showPie = true;
        this.$nextTick(() => {
          this.initChart(
            getMultiPieData(this.DBdate, this.selectedCity),
            "single-pie-chart"
          );
        });
      } else {
        this.showPie = false;
        this.$nextTick(() => {
          this.initChart(getMultiBarData(this.DBdate, value), "bars2");
        });
      }
    },
    handleCityChange(city) {
      this.selectedCity = city; // 更新选中城市
      if (this.radio == "5") {
        // 如果是“综合评价”
        this.initChart(
          getMultiPieData(this.DBdate, this.selectedCity),
          "single-pie-chart"
        );
      }
    },
    checkScreenSize() {
      this.isMobile = window.matchMedia("(max-width: 1000px)").matches;
    },
  },
  async mounted() {
    // 检测屏幕宽度
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    const imageUrl = await import("/dataExplorer.jpg");
    this.backgroundUrl = imageUrl.default; // 将图片 URL 赋值给 items.url
    //挂载mapbox
    this.initMapbox();
    //添加矢量图层
    addGeoJson();
    //读取数据库数据
    getDBData().then((res) => {
      this.DBdate = res;
      //绘制图表
      this.drawChart();
    });
  },
  beforeUnmount() {
    this.myChart && this.myChart.destroy();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>
