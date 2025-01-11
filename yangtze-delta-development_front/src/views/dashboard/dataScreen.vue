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
  height: 6%;
  // border: 1px solid #666;
  color: #2f89cf;
  letter-spacing: 2px;
  font-size: 2.2vh;
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
  height: 40%;
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
.carousel {
  width: 100%;
  height: 95%;
}
.carouselItem {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; /* 设置每个轮播项的宽度 */
  height: 100%; /* 设置每个轮播项的高度 */
}
.carouselImg {
  // width: 100%;
  height: 100%;
  object-fit: cover;
}
:deep(.el-carousel__container) {
  height: 100%;
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
    margin-bottom: 0.6vh;
  }
  ul {
    font-size: 1.7vh;
  }
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
              <div class="title">长三角高质量发展评价排名</div>
              <div class="bars" id="bars"></div>
            </div>
          </el-col>

          <el-col :span="isMobile ? 24 : 10">
            <div class="charts mapBorder middleMap">
              <div class="title">长三角高质量发展空间分布</div>
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
                  <el-radio :label="5" class="radio-item">综合评价</el-radio>
                  <el-radio :label="0" class="radio-item">创新</el-radio>
                  <el-radio :label="1" class="radio-item">协调</el-radio>
                  <el-radio :label="2" class="radio-item">绿色</el-radio>
                  <el-radio :label="3" class="radio-item">开放</el-radio>
                  <el-radio :label="4" class="radio-item">共享</el-radio>
                </el-radio-group>
              </div>
            </div>
          </el-col>

          <el-col :span="isMobile ? 24 : 8">
            <div class="charts mapBorder rightPie">
              <!-- <div class="title">
                  介绍内容
                </div> -->
              <div class="title">长三角高质量发展评价详情</div>
              <div class="introduce" v-if="year == 2023">
                <img
                  :src="backgroundUrl"
                  class="pieBackgroundImage"
                  alt="Background Image"
                />
                <!-- 综合 -->
                <el-card class="pieCard" v-if="radio == 5">
                  <ul>
                    <li>
                      上海是长三角城市高质量发展的核心，拥有区域最强的开放经济和普适面最广的民生服务，但由于其绝对性优地位，协调发展得分相对较低。
                    </li>
                    <li>
                      南京同样呈现相对均衡的高质量发展水平，各维度评价结果均较高，与上海相比，在协调发展和绿色发展方面表现更优。
                    </li>
                    <li>
                      杭州与南京表现旗鼓相当，同样呈现相对均衡的高质量发展水平，对创新发展、绿色发展、协调发展维度有所侧重。
                    </li>
                    <li>
                      合肥在创新发展、协调发展和绿色发展三个维度上表现出较强的竞争力，但在开放发展和共享发展两个方面仍需发力。
                    </li>
                  </ul>
                </el-card>
                <!-- 创新 -->
                <el-card class="pieCard" v-if="radio == 0">
                  <ul>
                    <li>
                      长三角各城市创新发展水平差异明显，高创新发展水平城市主要集中于少数区域核心城市。
                    </li>
                    <li>
                      从空间分布来看，高分城市主要集中于上海和周边城市，以及各省省会城市，同样呈现“雁阵”轴带分布。
                    </li>
                    <li>
                      杭州、上海、苏州、南京、合肥评分明显高于其他城市，属于第一梯队，是长三角主要创新发展引擎；宁波、芜湖、无锡、常州属于第二梯队;
                    </li>
                    <li>
                      其余32个城市分属第三、四至五梯队，创新发展水平相对较低。
                    </li>
                  </ul>
                </el-card>
                <!-- 协调 -->
                <el-card class="pieCard" v-if="radio == 1">
                  <ul>
                    <li>
                      区域内多数城市整体呈现较高协调发展水平。从空间分布来看，高协调发展水平城市主要集中于浙江省北部、江苏省南部城市，呈片状连绵分布。
                    </li>
                    <li>
                      长三角协调发展城市TOP10依次是常州、南京、杭州、苏州、宁波、嘉兴、合肥、绍兴、湖州，其中，浙江省城市占据1/2，表现出浙江省具有较高的协调发展水平。
                    </li>
                    <li>
                      从内部差距来看，城市协调发展水平得分梯度分布较缓，常州、南京、杭州、苏州、宁波、嘉兴、合肥、绍兴、湖州属于第一梯队，湖州、无锡、舟山、扬州、金华、镇江、温州、上海属于第二梯队，其余25个城市分属第三、四至五梯队。
                    </li>
                  </ul>
                </el-card>
                <!-- 绿色 -->
                <el-card class="pieCard" v-if="radio == 2">
                  <ul>
                    <li>
                      长三角各城市绿色发展水平差异较小，其内部差距在五个维度中最小。从空间分布来看，高绿色发展水平城市分布广泛，于各省市区域内块状分布。
                    </li>
                    <li>
                      其中，长三角绿色发展城市TOP10依次是杭州、黄山、舟山、无锡、南京、合肥、宁波、芜湖、上海，在长三角整体绿色发展水平较高的背景下，这些城市具有更为优越的绿色发展实力。
                    </li>
                    <li>
                      区域内梯度变化较小。杭州、黄山、舟山、无锡、南京、合肥、宁波属于第一梯队，芜湖、上海、扬州、苏州、常州、温州属于第二梯队，其余28个城市分属第三、四至五梯队，各梯度间以及梯度内绿色发展水平评分变化较小，呈现整体较高的绿色发展水平。
                    </li>
                  </ul>
                </el-card>
                <!-- 开放 -->
                <el-card class="pieCard" v-if="radio == 3">
                  <ul>
                    <li>
                      长三角各城市开放发展水平差异显著，高分城市集中于上海、南京、杭州、苏州等核心城市。从空间分布来看，高分城市集中于长三角东部，以上海为主要开放核心向内周边延伸。
                    </li>
                    <li>
                      其中，长三角开放发展城市TOP10依次是上海、南京、杭州、苏州、宁波、无锡、嘉兴、常州、舟山，上海的开放水平显著高于其他城市，得分达到满分；除少数核心城市外，其他城市的开放发展水平依然相对较低。
                    </li>
                    <li>
                      整体来看，各城市开放发展水平得分梯度分异显著，且呈现明显的两极分化现象：上海、南京、杭州、苏州属于第一梯队；宁波、无锡、嘉兴、常州、舟山、合肥、南通、徐州属于第二梯队；其余29个城市分属第三、四至五梯队，得分均未达到第一梯队的二分之一。
                    </li>
                  </ul>
                </el-card>
                <!-- 共享 -->
                <el-card class="pieCard" v-if="radio == 4">
                  <ul>
                    <li>
                      长三角各城市共享发展水平存在一定差异，且上海共享发展水平明显高于其他城市。从空间分布来看，高分城市集中于上海及其周边城市，包括苏南和浙北，呈现片状连绵分布特征。
                    </li>
                    <li>
                      其中，长三角共享发展城市TOP10依次是上海、无锡、苏州、宁波、南京、嘉兴、杭州、常州、南通，江苏省城市占据1/2，表现出江苏省具有较高的共享发展水平。
                    </li>
                    <li>
                      各城市共享发展水平梯度分异明显，上海、无锡、苏州属于第一梯队，宁波、南京、嘉兴、杭州、常州、南通属于第二梯队，其余32个城市分属第三、四至五梯队。尽管排序较后的城市得分差距较小，但与排序前列的梯队差距显著，共享发展水平内部差距相对较大。
                    </li>
                  </ul>
                </el-card>
              </div>
              <div class="introduce" v-if="year == 2024">
                <el-carousel :interval="4000" type="card" class="carousel">
                  <el-carousel-item
                    v-for="item in 6"
                    :key="item"
                    class="carouselItem"
                  >
                    <img
                      :src="getImageSrc(item)"
                      alt="innovation1"
                      class="carouselImg"
                    />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="piesOrBar">
                <div v-if="showPie" class="charts">
                  <div class="flex-container">
                    <div class="title">
                      {{ selectedCity }}高质量发展各维度评价
                    </div>
                    <!-- 打开下拉框后直接打字搜索 -->
                    <el-select
                      class="pieSelect"
                      placeholder="请选择城市"
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
                <div v-else id="bars2" style="width: 100%; height: 79%"></div>
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
import { useYearStore } from "@/store/year.js";
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
      selectedCity: "上海市",
      cityNames: cityNames,
      isMobile: false,
      imgSrc: {},
    };
  },
  watch: {
    async year(newVal, oldVal) {
      await this.initMapbox();

      getDBData().then((res) => {
        this.DBdate = res;
        //绘制图表
        this.handleRadioChange(this.radio);
      });
    },
  },
  computed: {
    // 从 Pinia 中读取状态
    year() {
      const yearStore = useYearStore();
      return yearStore.year;
    },
  },
  methods: {
    getImageSrc(item) {
      let imageNamePrefix;
      switch (this.radio) {
        case 0:
          imageNamePrefix = "innovation";
          break;
        case 1:
          imageNamePrefix = "coordinate";
          break;
        case 2:
          imageNamePrefix = "green";
          break;
        case 3:
          imageNamePrefix = "open";
          break;
        case 4:
          imageNamePrefix = "share";
          break;
        case 5:
          imageNamePrefix = "whole";
          if (item > 3) {
            item -= 3;
          }
          break;
      }
      if (item >= 1 && item <= 6) {
        return `${
          import.meta.env.BASE_URL
        }dataScreen/2024/${imageNamePrefix}${item}.jpg`;
      }
      return ""; // 如果超出范围，返回空字符串或其他默认图片路径
    },
    //初始化mapbox控件的方法
    async initMapbox() {
      await loadMap("mapbox");
      map.setCenter([119.14, 31.37]); //修改地图中心点
      map.setZoom(5.5); //设置缩放级别
      map.on("styledata", async () => {
        await addGeoJson();
        // updateMap(this.radio);
      });
    },
    //echarts的方法，包括了初始化和渲染，只需要传入数据和需要放置图表的位置即可
    initChart(chartData, dom) {
      let oldChart = echarts.getInstanceByDom(document.getElementById(dom));

      // 如果存在实例，则销毁它
      if (oldChart) {
        oldChart.dispose();
      }
      let myChart = echarts.init(document.getElementById(dom));
      myChart.setOption({});
      myChart.setOption(chartData);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    //绘制主页所有图表的方法
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
      console.log(this.isMobile, "check over");
    },
    // imgPromise() {
    //   Promise.all([
    //     import("/download/report1.png"),
    //     import("/download/report2.png"),
    //     import("/download/report3.png"),
    //     import("/download/report4.png"),
    //     import("/download/report5.png"),
    //     import("/download/report6.png"),
    //   ]).then((images) => {
    //     this.imgSrc = images.map((image) => image.default);
    //   });
    // },
  },
  async mounted() {
    // 检测屏幕宽度
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    const imageUrl = await import("/dataExplorer.jpg");
    this.backgroundUrl = imageUrl.default; // 将图片 URL 赋值给 items.url
    //挂载mapbox
    await this.initMapbox();
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
