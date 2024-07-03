<template>
  <div class="container">
    <div class="sectionContent">
      <span class="title"> Report </span>
      <span class="description">
        Yangtze River Delta High-Quality Development (2023) Evaluation Research
        Report
      </span>
      <br />
      <!-- <el-divider>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
      </el-divider> -->
    </div>
    <el-tabs v-model="activeName" class="tabContent">
      <el-tab-pane label="Online Viewing" name="first" class="ranking">
        <pdfViewer />
      </el-tab-pane>
      <el-tab-pane label="View Chapters" name="second" class="ranking">
        <el-row class="chapters" :gutter="0">
          <el-col
            :span="12"
            v-for="chapter in chapters"
            :key="chapter.id"
            class="chapter-col"
            justify="center"
          >
            <el-card :class="chapter.class" @click="goTo(chapter.target)">
              <div class="card-image-container">
                <img
                  src="/chaptersCovers/coverall.png"
                  alt="Chapter Image"
                  class="card-image"
                />
              </div>

              <div class="card-header">{{ chapter.title }}</div>
              <div class="card-content">
                <p
                  style="
                    white-space: pre-line;
                    overflow: hidden;
                    font-size: small;
                  "
                >
                  {{ chapter.description }}
                </p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import pdfViewer from "../../components/pdfviewer.vue";

interface Chapter {
  id: number;
  title: string;
  description: string;
  image: string;
  target: string;
  class: string;
}

const activeName = ref("first");

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Preface",
    class: "chapter-card",
    description:
      "In recent years, President Xi Jinping has successively emphasised 'high-quality development', suggesting that high-quality development is the primary task of building a modern socialist country in an all-round way",
    image: "/chaptersCovers/prefaceCover.png",
    target: "chapters/preface",
  },
  {
    id: 2,
    title:
      "Yangtze River Delta High-Quality Development Evaluation Index System",
    class: "chapter-card chapter-right",
    description:
      "This report is based on policy interpretation, supplemented by large language models and text theme mining technology, and integrates multi-source data to revise and improve the index system",
    image: "/chaptersCovers/chapter1Cover.png",
    target: "chapters/chapter2",
  },
  {
    id: 3,
    title:
      "Results of the Evaluation of the High Quality Development of the Yangtze River Delta (2023)",
    class: "chapter-card",
    description:
      "The evaluation results show that the average score of the Yangtze River Delta's high-quality development (2023) is 55.38, with a high level of overall development and a multi-dimensional synergistic high-quality development trend.",
    image: "/chaptersCovers/chapter2Cover.png",
    target: "chapters/chapter3",
  },
  {
    id: 4,
    title:
      "High Quality Development in the Yangtze River Delta (2023) Characteristics and Issues",
    class: "chapter-card chapter-right",
    description:
      "Issues such as the dynamics of high-quality development in the YRD and the differences in development within the YRD have been of great concern, and this report has identified a number of key features and issues",
    image: "/chaptersCovers/chapter3Cover.png",
    target: "chapters/chapter4",
  },
  {
    id: 5,
    title: "appendix",
    class: "chapter-card-last",
    description:
      "(i) Sub-dimension scores of each city \n (ii) Evaluation of high-quality development in the Yangtze River Delta County Exploration",
    image: "/chaptersCovers/appendixCover.png",
    target: "chapters/appendix",
  },
];

import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (page: string) => {
  let route = "/" + page;
  router.push(route);
};
</script>




<style lang="scss" scoped>
:deep(.el-tabs__item) {
  width: 25vw; /* 设置宽度为200px */
  font-size: 1.8vh;
  font-weight: bold;
}
// .pdfView {
//   // margin-left: 10%;
// }
.tabContent {
  margin: 1.5% 25% 0.5% 25%;
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  // overflow: visible;
  .description {
    color: rgb(142, 142, 142);
    font-size: 1.5vh;
    font-weight: 300;
    margin-top: 1.2%;
  }
  // .ranking {
  //   // height: 150vh;
  //   // overflow: auto;

  // }
  .dataTable {
    margin: 0.5% 0;
    width: 49.5vw;
    // border:1px black solid;
    .description {
      padding-bottom: 2%;
      line-height: 1.5vh;
      // color: rgb(142, 142, 142);
      font-size: 1.2vh;
      font-weight: 400;
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
    line-height: 2.3vh;
    margin-top: 1.2%;
  }
}

.chapters {
  display: flex;
  flex-wrap: wrap;
  // margin: 0 25%; /* 居中排列 */
}

.chapter-col {
  display: flex;
  justify-content: center;
}

.chapter-card {
  padding: 0px;
  width: 70vw;
  height: 400px;
  margin-bottom: 20px;
  margin-right: 20px;
  // margin-left: 5vw;
  transition: background-color 0.35s;
  cursor: pointer;
  // overflow: auto;
}

.chapter-right {
  margin-right: 0;
}

.chapter-card-last {
  padding: 0px;
  width: 70vw;
  height: 360px;
  margin-bottom: 20px;
  margin-right: 20px;
  // margin-left: 5vw;
  transition: background-color 0.35s;
  cursor: pointer;
  overflow: auto;
}

.chapter-card-last .card-content {
  // white-space: pre-line;
  text-indent: 0;
}

.chapter-card:hover {
  background-color: rgba(
    0,
    0,
    0,
    0.05
  ); /* 设置鼠标悬停时的背景颜色为稍暗的黑色 */
}

.card-image-container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 200px;
  // display: flex; //关掉这个即可
  // justify-content: center;
  overflow: hidden; /* 裁剪超出部分 */
  .card-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.card-header {
  font-size: 17px;
  font-weight: bold;
  margin-top: 5px;
}

.card-content {
  // padding: 0 10px;
  line-height: 1.3;
}

.card-footer {
  text-align: right;
  align-self: flex-end;
}

@media (max-width: 1000px) {
  :deep(.el-tabs__item) {
    width: 47.5vw; /* 设置宽度为200px */
    font-size: 2.5vw;
    font-weight: bold;
  }

  .tabContent {
    margin: 1.5% 2.5% 0.5% 2.5%;
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
    // overflow: visible;
    .description {
      color: rgb(142, 142, 142);
      font-size: 1.5vh;
      font-weight: 300;
      margin-top: 1.2%;
    }
    .dataTable {
      margin: 0.5% 0;
      height: 100vh;
      width: 95vw;
      // border:1px black solid;
      .description {
        padding-bottom: 2%;
        line-height: 1.5vh;
        // color: rgb(142, 142, 142);
        font-size: 1.2vh;
        font-weight: 400;
      }
    }
  }
  .sectionContent {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1.5% 0% 0.5% 5%;
    .title {
      font-size: 5vw;
      font-weight: bold;
    }
    .description {
      color: rgb(142, 142, 142);
      font-size: 1.6vw;
      font-weight: 500;
      line-height: 1.5;
      margin-top: 1.2%;
    }
  }

  .chapters {
    display: flex;
    flex-wrap: wrap;
    // margin: 0 25%; /* 居中排列 */
  }

  .chapter-col {
    display: flex;
    justify-content: center;
  }

  .chapter-card {
    padding: 0px;
    width: 70vw;
    height: 400px;
    margin-bottom: 20px;
    margin-right: 20px;
    // margin-left: 5vw;
    transition: background-color 0.35s;
    cursor: pointer;
    // overflow: auto;
  }

  .chapter-right {
    margin-right: 0;
  }

  .chapter-card-last {
    padding: 0px;
    width: 70vw;
    height: 360px;
    margin-bottom: 20px;
    margin-right: 20px;
    // margin-left: 5vw;
    transition: background-color 0.35s;
    cursor: pointer;
    overflow: auto;
  }

  .chapter-card-last .card-content {
    // white-space: pre-line;
    text-indent: 0;
  }

  .chapter-card:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.05
    ); /* 设置鼠标悬停时的背景颜色为稍暗的黑色 */
  }

  .card-image-container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 200px;
    // display: flex; //关掉这个即可
    // justify-content: center;
    overflow: hidden; /* 裁剪超出部分 */
    .card-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-header {
    font-size: 17px;
    font-weight: bold;
    margin-top: 5px;
  }

  .card-content {
    // padding: 0 10px;
    line-height: 1.3;
  }

  .card-footer {
    text-align: right;
    align-self: flex-end;
  }
}
</style>
