<template>
  <div class="container">
    <div class="head">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> 资源下载 </span>
      <span class="description">
        下载《长江三角洲高质量发展评价研究报告》及相关数据与资料
      </span>
      <br />
      <el-divider>
        <div class="dividerTitle">区域规划、报告</div>
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
        <div class="dividerTitle">本报告相关数据下载</div>
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
        <div class="dividerTitle">更多数据与模型平台探索</div>
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
  import("/download/report0.png"),
  import("/download/report1.png"),
  import("/download/report15.png"),
  import("/download/report16.png"),
  import("/download/report14.png"),

  import("/download/report2.png"),
  import("/download/report4.png"),
  import("/download/report5.png"),
  import("/download/report6.png"),
  import("/download/report3.png"),

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
    reportName: "长江三角洲高质量发展评价研究报告（2024年编制）",
    url: "http://221.224.35.86:38083/data/8880dcc6-1fcd-4783-881e-d7172545cad9", // 美化版本pdf
  },
  {
    reportName: "长江三角洲高质量发展评价研究报告（2023年编制）",
    url: "http://221.224.35.86:38083/data/84278a06-1391-4d36-b14b-65cba82d3ba5", // 美化版本pdf
  },
  {
    reportName: "长三角城市跨城通勤年度报告（2023）",
    url: "http://221.224.35.86:38083/data/577b6337-0362-4282-b4e0-24efa490bb58",
  },
  {
    reportName: "长三角区域协同创新指数报告（2023）",
    url: "http://221.224.35.86:38083/data/802aa97b-827b-4ac7-890c-1ea7a62f098e",
  },
  {
    reportName: "长三角生态绿色一体化发展示范区生态环境质量报告（2022）",
    url: "http://221.224.35.86:38083/data/d0c9b059-d40c-49dc-a7ef-4d73eca46019",
  },
  {
    reportName: "“一带一路”倡议下的全球城市（2022）",
    url: "http://221.224.35.86:38083/data/574de5c5-33b4-4124-adf3-c9a232c88671",
  },
  {
    reportName: "长三角区域协同创新指数（2022简版）",
    url: "http://221.224.35.86:38083/data/4e7fc096-c82b-4c8a-9895-f91151495788",
  },
  {
    reportName: "中国城市繁荣活力评估报告（2022）",
    url: "http://221.224.35.86:38083/data/f2b346f8-bf6c-4d76-b9e5-85066bd5929b",
  },
  {
    reportName: "长江经济带高质量发展评估研究报告（2022）",
    url: "http://221.224.35.86:38083/data/cac0e6b6-2b11-4fba-b9b8-54508cc6766d",
  },
  {
    reportName: "长三角政府数据开放一体化报告（2020）",
    url: "http://221.224.35.86:38083/data/d50ac3ba-e40a-4de8-993e-a9f0659b899e",
  },
  {
    reportName: "长三角高质量发展指数报告（2020）",
    url: "http://221.224.35.86:38083/data/c68fd275-7ea5-4cdf-8673-2af6bd63af6a",
  },
  // {
  //   reportName: "中国城市繁荣活力2020报告",
  //   url: "http://221.224.35.86:38083/data/12f04d66-07b2-497a-a5ab-50f8fa3e2ba7",
  // },
  {
    reportName: "科技部关于印发《长三角科技创新共同体建设发展规划》的通知",
    url: "http://221.224.35.86:38083/data/7b565098-83c9-4ffa-8072-6b55866be1fd",
  },
  {
    // reportName: "长江三角洲城市群发展规划（2015-2030）",
    reportName: "长江三角洲城市群发展规划",
    url: "http://221.224.35.86:38083/data/efef5a2d-b014-45ba-9f66-ddce1129ae47",
  },
  {
    reportName: "长江三角洲区域一体化发展规划纲要",
    url: "http://221.224.35.86:38083/data/241e0c4e-45db-4f22-b643-094f7f8e68de",
  },
  {
    reportName: "长三角生态绿色一体化发展示范区国土空间总体规划（2021—2035年）",
    url: "http://221.224.35.86:38083/data/3076fe15-1947-465f-8968-64a0e0808f94",
  },
  {
    // reportName: "长三角生态绿色一体化发展示范区总体方案（2019年）",
    reportName: "长三角生态绿色一体化发展示范区总体方案",
    url: "http://221.224.35.86:38083/data/f965468c-b51b-44b1-9389-d0dd634beb18",
  },
]);

const urlData = ref([
  {
    dataName: "长三角高质量发展评价指标体系评价数据下载",
    url: "http://nnu.geodata.cn/data/datadetails.html?dataguid=111663293898121&docid=0",
  },
]);

const urlWeb = ref([
  {
    webName: "探索-->OpenGMS开放式地理建模与模拟平台",
    url: "https://geomodeling.njnu.edu.cn/home",
  },
  {
    webName: "探索-->长三角数据中心",
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
  z-index: 99; /* 可选，设置层级，确保在其他内容之上 */
}
.head {
  width: 100%;
  background-color: white;
  height: 5.5vh;
  width: 100%;
  z-index: 99;
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