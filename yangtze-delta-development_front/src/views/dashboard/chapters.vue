<template>
  <div class="container">
    <div class="head" style="height: 5.5vh; width: 100%">
      <homeHeader />
    </div>

    <div class="sectionContent">
      <span class="title"> Chapters </span>
      <span class="description"> Chapters demo page </span>
      <br />
      <el-divider>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
        <el-icon><star-filled /></el-icon>
      </el-divider>
    </div>

    <el-row class="chapters" :gutter="0">
      <el-col
        :span="12"
        v-for="chapter in chapters"
        :key="chapter.id"
        class="chapter-col"
        justify="center"
      >
        <el-card class="chapter-card" @click="goTo(chapter.target)">
          <div class="card-image-container">
            <!-- <el-image :src="chapter.image" alt="Chapter Image" class="card-image" /> -->
            <el-image
              :src="chapter.image"
              alt="Chapter Image"
              class="card-image"
            ></el-image>
          </div>

          <div slot="header" class="card-header">{{ chapter.title }}</div>
          <div class="card-content">
            <p>{{ chapter.description }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
  
  
<script setup lang="ts">
import homeHeader from "../../components/header.vue";

interface Chapter {
  id: number;
  title: string;
  description: string;
  image: string;
  target: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1",
    description:
      "Cities are ranked by their overall score. The overall score measures the total progress towards achieving all high-quality development goals. The score can be interpreted as a percentage of high-quality development goal achievement. A score of 100 indicates that all high-quality development goals have been achieved.",
    image: "/OGMSlogo.png",
    target: "chapters_1",
  }, 
  {
    id: 2,
    title: "Chapter 2",
    description:
      "Cities are ranked by their overall score. The overall score measures the total progress towards achieving all high-quality development goals. The score can be interpreted as a percentage of high-quality development goal achievement. A score of 100 indicates that all high-quality development goals have been achieved.",
    image: "/dataExplorer.jpg",
    target: "rankings",
  },
  {
    id: 3,
    title: "Chapter 3",
    description: "this is demo 3",
    image: "/background.jpg",
    target: "chapters_1",
  },
  {
    id: 4,
    title: "Chapter 4",
    description: "this is demo 4",
    image: "/background2.jpg",
    target: "chapters_1",
  },
  {
    id: 4,
    title: "Chapter 4",
    description: "this is demo 4",
    image: "/background2.jpg",
    target: "chapters_1",
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
.sectionContent {
  display: flex;
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

.chapters {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-evenly; /* 调整为两列间间距平均分布 */
  margin: 0 25%; /* 居中排列 */
}

.chapter-col {
  display: flex;
  justify-content: center;
}

.chapter-card {
  padding: 0px;
  width: 40vw;
  height: 50vh;
  margin-bottom: 20px;
  margin-right: 20px;
  // margin-left: 5vw;
  transition: background-color 0.35s; /* 添加背景颜色变化的过渡效果 */
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
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden; /* 裁剪超出部分 */
}

.card-image {
  width: auto; /* 图片宽度自动调整 */
  height: auto; /* 图片高度填满容器的高度 */
  min-width: 100%; /* 最小宽度为容器的100%，避免图片太短时出现的空隙 */
  max-height: 30%;
  object-fit: cover;
  // aspect-ratio: 5 / 1.5;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.card-content {
  padding: 10px;
  line-height: 1.5;
}

.card-footer {
  text-align: right;
  align-self: flex-end;
}
</style>
  