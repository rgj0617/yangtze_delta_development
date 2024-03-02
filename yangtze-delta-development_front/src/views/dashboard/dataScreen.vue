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
  height: 5%;
  text-align: center;
  font-size: 16px;
  /* line-height: 5%;  */
  background-color: #666;
  padding-top: 0.5%;
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
  height: 85%;
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
.pie-item {
  width: 6.8vw;
  height: 6.8vw;
  position: relative;
}
.pieItems {
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  width: 90%;
  height: 90%;
  margin: 0 5%;
  position: relative;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  overflow: auto;
  li {
    margin-bottom: 25px; /* 调整行间距 */
  }
  ul {
    font-size: 1.5rem; /* 设置字体大小为 18 像素 */
  }
}

.pieCard li {
  margin-bottom: 25px; /* 调整行间距 */
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
  overflow: hidden;
}
.mapboxBorder {
  height: 98%;
  width: 98%;
  margin: 1%;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.15);
  // border: #475669 1px solid;
  border-radius: 8px;
}
:deep(.echarts-legend .zr-text) {
  display: none;
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
          <el-col :span="6">
            <div class="charts mapBorder">
              <div class="title">长三角高质量发展评价排名</div>
              <div class="bars" id="bars"></div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="charts mapBorder">
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
          <el-col :span="8">
            <div class="charts mapBorder">
              <!-- <div class="title">
                  介绍内容
                </div> -->
              <div class="title">长三角高质量发展评价详情</div>
              <div class="introduce">
                <img
                  :src="backgroundUrl"
                  class="pieBackgroundImage"
                  alt="Background Image"
                />
                <el-card class="pieCard">
                  <ul>
                    <li>
                      上海拥有区域最强的开放经济和普适面最广的民生服务，但协调发展维度得分较低。
                    </li>
                    <li>
                      南京各维度得分差距较小，与上海相比，在协调发展和绿色发展方面表现更优。
                    </li>
                    <li>杭州与南京表现旗鼓相当，在创新发展方面优势显著。</li>
                    <li>
                      与上海、南京和杭州相比，合肥在创新发展、协调发展和绿色发展三个维度上表现出较强的竞争力，但在开放发展和共享发展两个方面仍需发力。
                    </li>
                  </ul>
                </el-card>
                <!-- 原先的走马灯显示 -->
                <!-- <el-carousel :interval="4000" type="card" style="height:90%;margin-top:5%">
                    <el-carousel-item v-for="item in items" :key="item.url" style="display: flex; align-items: center; justify-content: center;">
                      <img :src="item.url" style="width: 100%; height: 100%;object-fit: cover;"/>
                    </el-carousel-item>
                  </el-carousel> -->
              </div>
              <div class="piesOrBar">
                <div v-if="showPie" class="charts">
                  <!-- <div id="pie" style="width: 100%; height: 100%"></div> -->
                  <div class="title">高质量发展水平Top8</div>
                  <div class="pieItems">
                    <div
                      v-for="i in 8"
                      :key="i"
                      :id="'pie-item' + i"
                      :class="'pie-item' + i + ' pie-item'"
                    ></div>
                  </div>
                  <div id="pie-item-legend" class="pieLegend"></div>
                </div>
                <div v-else id="bars2" style="width: 100%; height: 100%"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-footer class="foot">
        Copyright © 2023-2024 南京师范大学-OpenGMS. All Rights Reserved.
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
      option: {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      },
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
      for (let i = 1; i <= 8; i++) {
        this.initChart(getMultiPieData(this.DBdate, i), `pie-item${i}`);
      }
      this.initChart(getMultiPieData(this.DBdate, "legend"), "pie-item-legend");
    },
    //监听单选框的变化，这个动态页面的命脉方法
    handleRadioChange(value) {
      console.log(value, "RadioChange");
      updateMap(value);
      this.initChart(getAnnualScore(this.DBdate, value), "bars");
      if (value == "5") {
        this.showPie = true;
        this.$nextTick(() => {
          for (let i = 1; i <= 8; i++) {
            this.initChart(getMultiPieData(this.DBdate, i), `pie-item${i}`);
          }
          this.initChart(
            getMultiPieData(this.DBdate, "legend"),
            "pie-item-legend"
          );

          // this.initChart(getMultiPieDataNew(this.DBdate), "pie");
        });
      } else {
        this.showPie = false;
        this.$nextTick(() => {
          this.initChart(getMultiBarData(this.DBdate, value), "bars2");
        });
      }
    },
  },
  async mounted() {
    const imageUrl = await import("@/assets/pic/dataExplorer.jpg");
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
};
</script>
