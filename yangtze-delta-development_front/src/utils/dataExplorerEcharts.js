// import axios from "axios";
// import "../../../../src/mock/mockServe.js"
import * as echarts from "echarts";
import detailUnformatted from "@/assets/json/scoreDetail.json";
import rankingUnformatted from "@/assets/json/scoreRanking.json";
import Indicators from "@/assets/json/secondaryIndicators.json";
import { scoreFormat } from "@/utils/format.ts";

const ranking = scoreFormat(rankingUnformatted);
const detail = scoreFormat(detailUnformatted);
export let cityNames = [...new Set(ranking.map((item) => item.cityName))];

// 整合数据
export const getDBData = async () => {
  let dataset = { ranking, detail, Indicators };
  return dataset;
};

//获取左边综合得分柱状图数据的方法
function handleAnnualScore(dataset, value) {
  let dataAxis = [];
  let data = [];
  let optionDate = [];
  let propertiesSelect = "";
  switch (value) {
    case 0:
      propertiesSelect = "创新发展";
      break;
    case 1:
      propertiesSelect = "协调发展";
      break;
    case 2:
      propertiesSelect = "绿色发展";
      break;
    case 3:
      propertiesSelect = "开放发展";
      break;
    case 4:
      propertiesSelect = "共享发展";
      break;
    case 5:
      propertiesSelect = "score";
      break;
    default:
      propertiesSelect = "score";
      break;
  }
  for (let i = 0; i < dataset.detail.length; i++) {
    dataAxis.push(dataset.detail[i].cityName);
    data.push(dataset.detail[i][propertiesSelect]);
  }
  optionDate = [dataAxis, data];
  return optionDate;
}

//得到左边柱状图配置项的方法
export const getAnnualScore = (dataset, value) => {
  let AnnualScore = handleAnnualScore(dataset, value);
  let dataAxis = AnnualScore[0];
  let data = AnnualScore[1];
  dataAxis.reverse();
  data.reverse();
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  let option = {
    title: {
      // text: '特性示例：渐变色 阴影 点击缩放',
      subtext: "tips：滑动鼠标滚轮或拖动右边滚动条可查看更多",
    },
    xAxis: {
      type: "value", // 设置为类目轴
      position: "top",
      axisLabel: {
        color: "#999",
      },
      axisTick: {
        show: false,
      },
      axisPointer: {
        type: "shadow", // 使用阴影指示器
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      type: "category",
      data: dataAxis,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        position: "insideLeft",
        rotate: 40,
        color: "#777",
      },
      // grid:{
      //   left:'10%'
      // }
    },
    dataZoom: [
      {
        type: "slider",
        start: 50,
        end: 100,
        yAxisIndex: 0,
      },
      {
        type: "inside",
        yAxisIndex: 0,
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow", // 在悬浮时显示阴影指示器
      },
    },
    series: [
      {
        type: "bar",
        orient: "horizontal", // 设置柱状图方向为纵向
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: data,
      },
    ],
  };
  return option;
};

//获取右边八个玫瑰图数据的方法
function handlePieData(dataset) {
  let singlePie = {};
  let value = [];
  let name = "";
  let barName = ["创新发展", "协调发展", "绿色发展", "开放发展", "共享发展"];
  // let keyName = ['innovation','coordinate','green','open','share'];
  let optionData = [];
  // let topCity=[];
  // for(let i = 0 ; i < 8 ; i++){
  //     topCity.push(dataset.ranking[i].cityName);
  // }
  for (let i = 0; i < dataset.detail.length; i++) {
    name = dataset.detail[i].cityName;
    for (let j = 0; j < 5; j++) {
      value.push(dataset.detail[i][barName[j]]);
    }
    singlePie.value = value;
    singlePie.name = name;
    if (i === 0) {
      singlePie.barName = barName;
    }
    optionData.push(singlePie);
    singlePie = {};
    value = [];
  }
  console.log(optionData);
  return optionData;
}

//绘制右下角玫瑰图的方法
export const getMultiPieData = (dataset, num) => {
  var multiPieData = handlePieData(dataset);
  // console.log(multiPieData[1].name);
  // let radius = ["35%","100%"];
  let name = multiPieData[0].barName;
  let legendData = name.map((n) => {
    return { name: n };
  });
  //   原定数饼图配置项设置
  let singlePieData = {};

  if (num == "legend") {
    return {
      legend: {
        left: "center",
        top: "bottom",
        data: name,
        textStyle: {
          color: "#d2d2d2",
        },
      },
      series: [
        {
          name: name,
          type: "pie",
          data: legendData,
        },
      ],
    };
  } else {
    for (let i = 0; i <= multiPieData.length; i++) {
      console.log(multiPieData[i].name);
      if (num == multiPieData[i].name) {
        singlePieData = multiPieData[i];
        break;
      }
    }
  }
  let optionData = name.map((n, i) => ({
    value: singlePieData.value[i],
    name: n,
  }));
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: "bottom",
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    title: {
      text: singlePieData.name,
      left: "center",
      top: "center",
      textStyle: {
        // color:"rgba(255,255,255,.6)",
        color: "black",
        fontWeight: "normal",
        fontSize: 16,
      },
    },
    series: [
      {
        name: singlePieData.name,
        type: "pie",
        radius: ["25%", "60%"],
        center: "center",
        // top:"3%",
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
          //   normal: {
          // label: {
          //     show: true,
          //   },
          //   },
        },
        label: {
          show: true,
        },
        emphasis: {
          borderRadius: 5,
          label: {
            show: true,
          },
          labelLine: {
            show: true,
          },
        },
        data: optionData,
      },
    ],
  };
  return option;
};

//绘制规范的南丁格尔玫瑰图
export const getMultiPieDataNew = (dataset) => {
  var multiPieData = handlePieData(dataset);
  // let radius = ["35%","100%"];
  let name = multiPieData[0].barName;
  let radius = [12.5, 62.5];
  //   原定数饼图配置项设置
  let handledMultiPieData = [
    [
      { value: 40, name: "rose 1" },
      { value: 78, name: "rose 2" },
      { value: 32, name: "rose 3" },
      { value: 60, name: "rose 4" },
      { value: 28, name: "rose 5" },
      { value: 56, name: "rose 6" },
      { value: 22, name: "rose 7" },
      { value: 38, name: "rose 8" },
    ],
    [
      { value: 40, name: "rose 1" },
      { value: 78, name: "rose 2" },
      { value: 32, name: "rose 3" },
      { value: 60, name: "rose 4" },
      { value: 28, name: "rose 5" },
      { value: 56, name: "rose 6" },
      { value: 22, name: "rose 7" },
      { value: 38, name: "rose 8" },
    ],
  ];
  let option = {
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
        name: "南京",
        type: "pie",
        radius: radius,
        center: ["25%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        label: {
          show: false,
        },
        emphasis: {
          borderRadius: 5,
          label: {
            show: true,
          },
          labelLine: {
            show: false,
          },
        },
        data: handledMultiPieData[0],
      },
      {
        name: "南京",
        type: "pie",
        radius: radius,
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: handledMultiPieData[1],
      },
      {
        name: "南京",
        type: "pie",
        radius: radius,
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: handledMultiPieData[1],
      },
    ],
  };
  return option;
};

//获取详细数据柱状图数据的方法
function handleMultiBarData(dataset, value) {
  let propertiesSelect = "";
  let selectedData = {};
  switch (value) {
    case 0:
      propertiesSelect = "创新发展";
      break;
    case 1:
      propertiesSelect = "协调发展";
      break;
    case 2:
      propertiesSelect = "绿色发展";
      break;
    case 3:
      propertiesSelect = "开放发展";
      break;
    case 4:
      propertiesSelect = "共享发展";
      break;
    default:
      break;
  }
  selectedData = dataset["Indicators"][propertiesSelect];
  selectedData.keyName = dataset["Indicators"]["keyName"][propertiesSelect];
  return selectedData;
}

//绘制右下角二级指标的详细数据柱状图
export const getMultiBarData = (dataset, value) => {
  let multiBarData = handleMultiBarData(dataset, value);
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
        },
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        // restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    legend: {
      //完整的图例视图
      data: [
        "Growth",
        multiBarData.keyName[0],
        multiBarData.keyName[1],
        multiBarData.keyName[2],
        "",
        multiBarData.keyName[3],
        multiBarData.keyName[4],
        multiBarData.keyName[5],
      ],
      itemGap: 5,
      left: "left",
    },
    grid: {
      top: "20%",
      left: "1%",
      right: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: multiBarData.names,
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "归一化值",
        // axisLabel: {
        //   formatter: function (a) {
        //     a = +a;
        //     return isFinite(a) ? echarts.format.addCommas(+a / 1000) : '';
        //   }
        // }
      },
    ],
    dataZoom: [
      {
        show: true,
        start: 0,
        end: 20,
      },
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        show: true,
        yAxisIndex: 0,
        filterMode: "empty",
        width: 30,
        height: "80%",
        showDataShadow: false,
        left: "93%",
      },
    ],
    series: [
      {
        name: multiBarData.keyName[0],
        type: "bar",
        data: multiBarData[multiBarData.keyName[0]],
      },
      {
        name: multiBarData.keyName[1],
        type: "bar",
        data: multiBarData[multiBarData.keyName[1]],
      },
      {
        name: multiBarData.keyName[2],
        type: "bar",
        data: multiBarData[multiBarData.keyName[2]],
      },
      {
        name: multiBarData.keyName[3],
        type: "bar",
        data: multiBarData[multiBarData.keyName[3]],
      },
      {
        name: multiBarData.keyName[4],
        type: "bar",
        data: multiBarData[multiBarData.keyName[4]],
      },
      {
        name: multiBarData.keyName[5],
        type: "bar",
        data: multiBarData[multiBarData.keyName[5]],
      },
    ],
  };
  return option;
};
