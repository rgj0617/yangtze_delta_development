import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import CityData from "@/assets/json/standardCityBoundary.json";
import ranking from "@/assets/json/scoreDetail.json";
import { scoreFormat } from "@/utils/format.ts";
import cityPoint from "@/assets/json/cityCenterPoint.json";

const rankingFormatted = scoreFormat(ranking);
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hlbmdjaGFvODg2NiIsImEiOiJjbGhzcWowMHUwYTNyM2VwNXZhaXhjd3Q4In0.FEh2q7sEW88Z1B5GcK_TDg"; //去mapbox官⽹申请

const colorRanges = [
  { min: 0, max: 45, color: "#E31A1C" },
  { min: 45, max: 55, color: "#FEB24C" },
  { min: 55, max: 70, color: "#FFEDA0" },
  { min: 70, max: 100, color: "#90EE90" },
];
const colorRangesSingle = [
  { min: 0, max: 5, color: "#E31A1C" },
  { min: 5, max: 10, color: "#FEB24C" },
  { min: 10, max: 15, color: "#FFEDA0" },
  { min: 15, max: 20, color: "#90EE90" },
];

// 将天地图作为底图
const vecUrl =
  "http://t0.tianditu.com/vec_w/wmts?tk=037bbd6475f6b83dc821829e43f9b45e";
const cvaUrl =
  "http://t0.tianditu.com/cva_w/wmts?tk=037bbd6475f6b83dc821829e43f9b45e";
//实例化source对象
var tdtVec = {
  //类型为栅格瓦片
  type: "raster",
  tiles: [
    //请求地址
    vecUrl +
      "&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles",
  ],
  //分辨率
  tileSize: 256,
};
var tdtCva = {
  type: "raster",
  tiles: [
    cvaUrl +
      "&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles",
  ],
  tileSize: 256,
};
var style = {
  //设置版本号，一定要设置
  version: 8,
  //添加来源
  sources: {
    tdtVec: tdtVec,
    tdtCva: tdtCva,
  },
  layers: [
    {
      //图层id，要保证唯一性
      id: "tdtVec",
      //图层类型
      type: "raster",
      //数据源
      source: "tdtVec",
      //图层最小缩放级数
      minzoom: 0,
      //图层最大缩放级数
      maxzoom: 17,
    },
    {
      id: "tdtCva",
      type: "raster",
      source: "tdtCva",
      minzoom: 0,
      maxzoom: 17,
    },
  ],
  glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
};

export let map = null; // 导出 map 对象

export function loadMap(box) {
  map = new mapboxgl.Map({
    container: box,
    // style: 'mapbox://styles/mapbox/streets-v11',
    // style: 'mapbox://styles/examples/cjgioozof002u2sr5k7t14dim',
    style: style,
    preserveDrawingBuffer: true,
    center: [114, 30],
    zoom: 4,
  });

  // 设置汉化
  // map.addControl(new MapboxLanguage({
  //     defaultLanguage: 'zh-Hans'
  // }));
}

export function addGeoJson() {
  map.on("style.load", () => {
    // 加载 GeoJSON 数据源
    map.addSource("geojsonSource", {
      type: "geojson",
      data: CityData,
    });
    map.addSource("pointGeojsonSource", {
      // 注意：这里使用的是不同的ID
      type: "geojson",
      data: cityPoint,
    });

    //初始化上色
    paintMap();
    //绑定地图事件
    bindMapInteractions();
    // 添加图层来显示行政区划的边界
    map.addLayer({
      id: "lineLayer",
      type: "line",
      source: "geojsonSource",
      paint: {
        "line-color": "#FFF",
        "line-width": 1.5,
      },
    });
    // 添加symbol图层以显示文本
    map.addLayer({
      id: "pointLabel",
      type: "symbol",
      source: "pointGeojsonSource",
      layout: {
        "text-field": ["get", "name"], // 使用get表达式来获取"title"属性
        "text-size": 14,
        "text-variable-anchor": ["top", "bottom", "left", "right"],
        "text-radial-offset": 0.5,
        "text-justify": "auto",
      },
      paint: {
        "text-color": "#000", // 文本颜色
        "text-halo-color": "#FFF", // 文本描边颜色
        "text-halo-width": 1, // 文本描边宽度
      },
    });
    // 添加地级市名称的文本图层
    // map.addLayer({
    //   id: "cityNameLayer",
    //   type: "symbol",
    //   source: "geojsonSource",
    //   layout: {
    //     "text-field": [
    //       "match",
    //       ["get", "is_island"],
    //       "true",
    //       "", // 如果是群岛城市，不显示名字
    //       ["get", "name"], // 如果不是群岛城市，显示名字
    //     ],
    //     "text-size": 14,
    //     "text-variable-anchor": ["top", "bottom", "left", "right"],
    //     "text-radial-offset": 0.5,
    //     "text-justify": "auto",
    //     "text-allow-overlap": false, // 不允许文本标签重叠
    //   },
    //   paint: {
    //     "text-color": "#000", // 文本颜色
    //     "text-halo-color": "#FFF", // 文本描边颜色
    //     "text-halo-width": 1, // 文本描边宽度
    //   },
    // });
  });
}

// 根据value值上色
export function paintMap() {
  // 添加图层来上色
  map.addLayer({
    id: "geojsonLayer",
    type: "fill", // 根据你的数据类型设置合适的图层类型，比如 'fill'、'circle'、'line' 等
    source: "geojsonSource",
    paint: {
      "fill-color": [
        "match",
        //在geojson中获取name属性
        ["get", "name"],
        //将geojson中的name属性与cityValueData进行匹配，得到正确的综合得分，并根据colorRanges的情况上色
        ...rankingFormatted.reduce((acc, data) => {
          return [...acc, data.cityName, getColor2(data.score)];
        }, []),
        "#000000", // 默认颜色
      ],
      "fill-opacity": 1, // 填充透明度
    },
  });
}

// 切换数据更新地图上色
export function updateMap(value) {
  // 根据新的 value 更新绘制属性
  let propertiesSelect = "";
  switch (parseInt(value)) {
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
      break;
  }
  map.setPaintProperty("geojsonLayer", "fill-color", [
    "match",
    ["get", "name"],
    ...rankingFormatted.reduce((acc, data) => {
      return [
        ...acc,
        data.cityName,
        getColor2(data[propertiesSelect], parseInt(value)),
      ];
    }, []),
    "#000000", // 默认颜色
  ]);
  bindMapInteractions(value);
}

// 设置颜色范围
// const colorRange = ['#ADD8E6','#00008B'];
const colorRange = ["#DBEEF6", "#36869A"];
const colorRangeMin = ["#E2F0D9", "#385723"];

const innovation = ["#fff4f8", "#dc7d61"];
const operation = ["#e0e5e9", "#73a9d7"];
const green = ["#e9f0e8", "#80c67d"];
const share = ["#fff8eb", "#f6bb81"];
const open = ["#eaebff", "#b67ebd"];

// 创建颜色插值函数(综合得分)
const colorInterpolate = chroma.scale(colorRange).domain([37, 90]);
// 创建颜色插值函数(单指标得分)
const colorInterpolateMin = chroma.scale(colorRangeMin).domain([1.5, 20]);

const colorInnovation = chroma.scale(innovation).domain([4.1, 17.4]);
const colorOperation = chroma.scale(operation).domain([9.4, 18.7]);
const colorGreen = chroma.scale(green).domain([9.2, 18]);
const colorOpen = chroma.scale(open).domain([1.6, 20]);
const colorShare = chroma.scale(share).domain([7.5, 20]);

// 根据城市值获取对应颜色
function getColor2(value, type) {
  if (value > 20) {
    return colorInterpolate(value).hex();
  } else {
    switch (type) {
      case 0:
        return colorInnovation(value).hex();
      case 1:
        return colorOperation(value).hex();
      case 2:
        return colorGreen(value).hex();
      case 3:
        return colorShare(value).hex();
      case 4:
        return colorOpen(value).hex();
      default:
        break;
    }
    // return colorInterpolateMin(value).hex();
  }
}

// 悬浮地图上时，获取该城市的值
function getCityValue(cityName, value) {
  const cityData = rankingFormatted.find((data) => data.cityName === cityName);
  switch (parseInt(value)) {
    case 0:
      return cityData ? cityData["创新发展"] : "N/A";
    case 1:
      return cityData ? cityData["协调发展"] : "N/A";
    case 2:
      return cityData ? cityData["绿色发展"] : "N/A";
    case 3:
      return cityData ? cityData["开放发展"] : "N/A";
    case 4:
      return cityData ? cityData["共享发展"] : "N/A";
    case 5:
      return cityData ? cityData.score : "N/A";
    default:
      return cityData ? cityData.score : "N/A";
  }
}

// 在鼠标移动到地图上显示信息
let popup = null;

function showPopup(e, value) {
  const features = e.features;

  if (features.length > 0) {
    map.getCanvas().style.cursor = "pointer";
    const cityName = features[0].properties.name; // 城市名称
    const cityValue = getCityValue(cityName, value); // 获取对应的值

    if (popup) {
      popup.remove();
    }

    // 在页面上显示浮动信息
    popup = new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`<strong>${cityName}</strong><br>评分为: ${cityValue}`)
      .addTo(map);
  } else {
    map.getCanvas().style.cursor = "";
  }
}

// 在鼠标移出时移除浮动信息
function removePopup() {
  if (popup) {
    popup.remove();
  }
  map.getCanvas().style.cursor = "";
}

// 绑定地图交互事件，鼠标悬浮和移出事件
function bindMapInteractions(value) {
  map.off("mousemove", "geojsonLayer", showPopup);
  map.on("mousemove", "geojsonLayer", (e) => showPopup(e, value));

  map.off("mouseout", "geojsonLayer", removePopup);
  map.on("mouseout", "geojsonLayer", removePopup);
}
