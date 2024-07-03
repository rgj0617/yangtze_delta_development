<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> Resource Download </span>
      <span class="description">
        Download the "Yangtze River Delta High-Quality Development (2023)
        Evaluation Research Report" along with related data and materials.
      </span>
      <br />
      <el-divider>
        <div class="dividerTitle">Regional Planning, Reports</div>
      </el-divider>
    </div>
    <div class="download">
      <el-row class="row" :gutter="0">
        <el-col
          v-for="(item, i) in urlReport"
          :span="6"
          class="chapter-col"
          justify="center"
          :key="i"
        >
          <div class="singleDownload" @click="downloadByUrl(item.url)">
            <div class="card-image-container">
              <img :src="reportPic[i]" class="card-image" />
            </div>
            <div class="description">
              {{ item.reportName }}
            </div>
          </div>
        </el-col>
      </el-row>
      <br />
      <el-divider class="divider">
        <div class="dividerTitle">Download data related to this report</div>
      </el-divider>
      <br />
      <el-row class="row" :gutter="0">
        <el-col
          v-for="(item, i) in urlData"
          :span="12"
          class="chapter-col"
          justify="center"
          :key="i"
        >
          <div class="singleDownload">
            <a :href="item.url" target="_blank">
              <div class="card-image-container webContainer">
                <img src="/download/data1.png" class="card-image" />
              </div>
              <div class="description">
                {{ item.dataName }}
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
      <br />
      <el-divider class="divider">
        <div class="dividerTitle">Explore more data and model platforms</div>
      </el-divider>
      <br />
      <el-row class="row" :gutter="0">
        <el-col
          v-for="(item, i) in urlWeb"
          :span="12"
          class="chapter-col"
          justify="center"
          :key="i"
        >
          <div class="singleDownload">
            <a :href="item.url" target="_blank">
              <div class="card-image-container webContainer">
                <img :src="webPic[i]" class="card-image" />
              </div>
              <div class="description">
                {{ item.webName }}
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import homeHeader from "@/components/header.vue";
import { ref } from "vue";

// 图片存放路径
const webPic = ref([]);
const reportPic = ref([]);

// 异步加载图片
Promise.all([import("/download/web1.png"), import("/download/web2.png")]).then(
  (images) => {
    webPic.value = images.map((image) => image.default);
  }
);
Promise.all([
  import("/download/report1.png"),
  import("/download/report2.png"),
  import("/download/report3.png"),
  import("/download/report4.png"),
  import("/download/report5.png"),
  import("/download/report6.png"),
  import("/download/report7.png"),
  // import("/download/report8.png"),
  import("/download/report9.png"),
  import("/download/report10.png"),
  import("/download/report11.png"),
  import("/download/report12.png"),
  import("/download/report13.png"),
]).then((images) => {
  reportPic.value = images.map((image) => image.default);
});

// 原文下载路径
const urlReport = ref([
  {
    reportName:
      "Yangtze River Delta High-Quality Development Evaluation Study Report (2023)",
    url: "http://112.4.132.6:8083/data/bfabefd3-a8ce-4bd0-adb6-f7e55b6588a4", // Beautified version PDF
  },
  {
    reportName: "Global Cities under the 'Belt and Road' Initiative (2022)",
    url: "http://112.4.132.6:8083/data/574de5c5-33b4-4124-adf3-c9a232c88671",
  },
  {
    reportName:
      "Yangtze River Delta Government Data Open Integration Report (2020)",
    url: "http://112.4.132.6:8083/data/d50ac3ba-e40a-4de8-993e-a9f0659b899e",
  },
  {
    reportName:
      "Yangtze River Delta Regional Collaborative Innovation Index (2022 Simplified)",
    url: "http://112.4.132.6:8083/data/4e7fc096-c82b-4c8a-9895-f91151495788",
  },
  {
    reportName: "China Urban Prosperity and Vitality Assessment Report (2022)",
    url: "http://112.4.132.6:8083/data/f2b346f8-bf6c-4d76-b9e5-85066bd5929b",
  },
  {
    reportName:
      "Yangtze River Economic Belt High-Quality Development Evaluation Study Report (2022)",
    url: "http://112.4.132.6:8083/data/cac0e6b6-2b11-4fba-b9b8-54508cc6766d",
  },
  {
    reportName:
      "Yangtze River Delta High-Quality Development Index Report (2020)",
    url: "http://112.4.132.6:8083/data/c68fd275-7ea5-4cdf-8673-2af6bd63af6a",
  },
  {
    reportName:
      "Ministry of Science and Technology Notification on Issuing 'Development Plan for the Yangtze River Delta Science and Technology Innovation Community'",
    url: "http://112.4.132.6:8083/data/7b565098-83c9-4ffa-8072-6b55866be1fd",
  },
  {
    reportName: "Yangtze River Delta Urban Agglomeration Development Plan",
    url: "http://112.4.132.6:8083/data/efef5a2d-b014-45ba-9f66-ddce1129ae47",
  },
  {
    reportName:
      "Outline of the Regional Integration Development Plan of the Yangtze River Delta",
    url: "http://112.4.132.6:8083/data/241e0c4e-45db-4f22-b643-094f7f8e68de",
  },
  {
    reportName:
      "Yangtze River Delta Ecological and Green Integrated Development Demonstration Zone National Territory Spatial Master Plan (2021–2035)",
    url: "http://112.4.132.6:8083/data/3076fe15-1947-465f-8968-64a0e0808f94",
  },
  {
    reportName:
      "General Plan for the Yangtze River Delta Ecological and Green Integrated Development Demonstration Zone",
    url: "http://112.4.132.6:8083/data/f965468c-b51b-44b1-9389-d0dd634beb18",
  },
]);

const urlData = ref([
  {
    dataName:
      "Yangtze River Delta High-Quality Development Evaluation Indicator System Data Download",
    url: "http://nnu.geodata.cn/data/datadetails.html?dataguid=111663293898121&docid=0",
  },
]);

const urlWeb = ref([
  {
    webName:
      "Explore -> OpenGMS Open Geospatial Modeling and Simulation Platform",
    url: "https://geomodeling.njnu.edu.cn/home",
  },
  {
    webName: "Explore -> Yangtze River Delta Data Center",
    url: "http://nnu.geodata.cn/data/dataresource.html",
  },
]);
const downloadByUrl = (url) => {
  try {
    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } catch (error) {
    console.error("下载文件时出错：", error);
  }
};
</script>

<style scoped lang="scss">
.divider {
  margin-top: 10vh;
}
.dividerTitle {
  font-weight: bold;
  font-size: 1vw;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.homeHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 可选，设置层级，确保在其他内容之上 */
}
.head {
  width: 100%;
  background-color: white;
  height: 5.5vh;
  width: 100%;
}
.download {
  margin: 0.5% 25%;
  // min-height: 100vh;
  .chapter-col {
    :hover {
      background: #ebebeb;
      transition: background-color 0.8s;
    }
    .singleDownload {
      width: 96%;
      height: 96%;
      margin: 2%;
      cursor: pointer;
      padding-top: 10%;
      a {
        color: black;
        text-decoration: none;
      }

      .description {
        font-size: 1.5vh;
        margin-top: 10%;
        text-align: center;
      }
      .card-image-container {
        padding: 0px;
        margin-left: 25%;
        width: 50%;
        box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.2);
        height: auto;
        display: flex;
        justify-content: center;
        overflow: visible;
        // border: white 1px solid;
        :hover {
          transform: scale(1.25);
          transition: transform 0.6s;
        }
        .card-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .webContainer {
        :hover {
          transform: scale(1.6);
          transition: transform 0.8s;
        }
      }
    }
  }
}
.sectionContent {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1.5% 25% 0.5% 25%;
  .title {
    font-size: 5vh;
    font-weight: bold;
  }
  .description {
    color: rgb(142, 142, 142);
    font-size: 1.5vh;
    font-weight: 300;
    margin-top: 1.2%;
  }
}

@media (max-width: 1000px) {
  .divider {
    margin-top: 5vh;
  }
  .download {
    margin: 0.5% 0;
    // min-height: 100vh;
    .chapter-col {
      :hover {
        background: #ebebeb;
        transition: background-color 0.8s;
      }
      .singleDownload {
        width: 96%;
        height: 96%;
        margin: 2%;
        cursor: pointer;
        padding-top: 10%;
        a {
          color: black;
          text-decoration: none;
        }

        .description {
          font-size: 1.5vh;
          margin-top: 10%;
          text-align: center;
        }
        .card-image-container {
          padding: 0px;
          width: 50%;
          box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.2);
          height: auto;
          display: flex;
          justify-content: center;
          overflow: visible;
          // border: white 1px solid;
          :hover {
            transform: scale(1.25);
            transition: transform 0.6s;
          }
          .card-image {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .webContainer {
          :hover {
            transform: scale(1.6);
            transition: transform 0.8s;
          }
        }
      }
    }
  }
  .sectionContent {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1.5% 0 0.5% 5%;
    .title {
      font-size: 5vw;
      font-weight: bold;
    }
    .description {
      color: rgb(142, 142, 142);
      font-size: 1.6vw;
      font-weight: 500;
      margin-top: 1.2%;
    }
  }
  .head {
    width: 100%;
    background-color: white;
    height: 5vh;
    width: 100%;
  }
}
</style>
