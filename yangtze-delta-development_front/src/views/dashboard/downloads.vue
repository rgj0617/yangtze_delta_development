<template>
  <div class="container">
    <div class="head" style="height: 5.5vh; width: 100%">
      <homeHeader />
    </div>
    <div class="sectionContent">
      <span class="title"> Download & Materials </span>
      <span class="description">
        Download the "Evaluation and Research Report on High Quality Development
        of the Yangtze River Delta (2023)" and supplementary materials
      </span>
      <br />
      <el-divider>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
      </el-divider>
    </div>
    <div class="download">
      <el-row class="row" :gutter="0">
        <el-col :span="6" class="chapter-col" justify="center">
          <el-card class="singleDownload" @click="downloadData">
            <div class="card-image-container">
              <img src="/test.jpg" class="card-image" />
            </div>
            <div class="description">
              This a description about the demo data
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="chapter-col" justify="center">
          <el-card class="singleDownload" @click="downloadData">
            <div class="card-image-container">
              <img src="/test.jpg" class="card-image" />
            </div>
            <div class="description">
              This a description about the demo data
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="chapter-col" justify="center">
          <el-card class="singleDownload" @click="downloadData">
            <div class="card-image-container">
              <img src="/test.jpg" class="card-image" />
            </div>
            <div class="description">
              This a description about the demo data
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="chapter-col" justify="center">
          <el-card class="singleDownload" @click="downloadData">
            <div class="card-image-container">
              <img src="/test.jpg" class="card-image" />
            </div>
            <div class="description">
              This a description about the demo data
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="chapter-col" justify="center">
          <el-card class="singleDownload" @click="downloadData">
            <div class="card-image-container">
              <img src="/test.jpg" class="card-image" />
            </div>
            <div class="description">
              This a description about the demo data
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
    
<script setup>
import homeHeader from "@/components/header.vue";

const downloadData = () => {
  const url ="http://112.4.132.6:8083/data/d7212e4c-1e5f-49ce-bd2b-6dd3c5d80387"; // 替换成您想要下载的文件的链接

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
}
.download {
  margin: 0.5% 25%;
  min-height: 70vh;
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

      .description {
        font-size: small;
        margin-top: 10%;
        text-align: center;
      }
      .card-image-container {
        padding: 0px;
        margin-left: 25%;
        width: 50%;

        height: 25%;
        display: flex; //关掉这个即可
        justify-content: center;
        overflow: hidden; /* 裁剪超出部分 */
        .card-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
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
</style>