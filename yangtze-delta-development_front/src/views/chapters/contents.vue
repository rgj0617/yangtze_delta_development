<template>
  <div class="container">
    <div class="sectionContent">
      <span class="title"> 评价报告 </span>
      <span class="description">
        长江三角洲高质量发展（2023）评价研究报告
      </span>
      <br />
      <!-- <el-divider>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
      </el-divider> -->
    </div>
    <el-tabs v-model="activeName" class="tabContent">
      <el-tab-pane label="在线阅览" name="first" class="ranking">
        <pdfViewer class="pdfView" />
      </el-tab-pane>
      <el-tab-pane label="查看章节" name="second" class="ranking">
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
    title: "一、前言",
    class: "chapter-card",
    description:
      "近年来，习近平总书记接连强调“高质量发展”，提出高质量发展是全面建设社会主义现代化国家的首要任务。高质量发展，是一种新的发展理念，是以质量和效益为价值取向的发展，是创新、协调、绿色、开放、共享新发展理念的高度聚合，是创新成为第一动力、协调成为内生特点、绿色成为普遍形态、开放成为必由之路、共享成为根本目的的发展。",
    image: "/chaptersCovers/prefaceCover.png",
    target: "chapters/preface",
  },
  {
    id: 2,
    title: "二、长江三角洲高质量发展评价指标体系",
    class: "chapter-card chapter-right",
    description:
      "本报告基于政策解读，辅以大语言模型和文本主题挖掘技术，集成多源资料对指标体系进行修正与完善，通过自上而下构建一级指标及其内容、自下而上修正解读结果、自下而上提供备选二级指标，以及自上而下基于专家经验确定二级指标四个步骤，构建了一个更具公信力的长三角高质量发展评价指标体系。",
    image: "/chaptersCovers/chapter1Cover.png",
    target: "chapters/chapter2",
  },
  {
    id: 3,
    title: "三、长三角高质量发展(2023)评价结果",
    class: "chapter-card",
    description:
      "评价结果表明长三角高质量发展（2023）平均得分为55.38，总体发展水平较高，呈现多维度协同的高质量发展态势，体现了长三角城市群作为我国经济最具活力、开放程度最高、创新能力最强、吸纳外来人口最多的区域之一，在国家现代化建设大局和全方位开放格局中具有举足轻重的地位。",
    image: "/chaptersCovers/chapter2Cover.png",
    target: "chapters/chapter3",
  },
  {
    id: 4,
    title: "四、长三角高质量发展(2023)特征与问题",
    class: "chapter-card chapter-right",
    description:
      "长三角高质量发展态势和内部发展差异等问题一直备受关注，本报告得出以下主要特征与问题：\n  ①综合得分呈梯度分布，各梯度间有明显落差；\n  ②五个维度发展不同步，落后城市需补齐短板；\n  ③重点城市各维度分化，全面发展仍任重道远。",
    image: "/chaptersCovers/chapter3Cover.png",
    target: "chapters/chapter4",
  },
  {
    id: 5,
    title: "附录",
    class: "chapter-card-last",
    description:
      "（一）各城市分维度得分 \n （二）长江三角洲高质量发展评价县域探索",
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
  .ranking {
    height: 150vh;
    // overflow: auto;
  }
  .dataTable {
    margin: 0.5% 0;
    height: 100vh;
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
</style>
