<template>
  <homeHeader />
  <chaptersHeader
    ref="chaptersHeaderRef"
    :chapterTitle="chapterTitle"
    :chapterDescription="chapterDescription"
    style="margin-top: 5.5vh"
  />
  <div class="ours" ref="oursRef">
    <div class="container">
      <div class="title">开放式地理建模与模拟团队（OpenGMS）</div>
      <el-divider></el-divider>

      <div class="content">
        开放式地理建模与模拟团队（OpenGMS）致力于推动地理建模技术的发展和应用，打造一个集模型开发、共享、应用于一体的开放科研平台。团队成员具有丰富的理论和实践经验，专注于理论研究与应用实践的结合，探索模型在气候变化、城市规划、环境保护等领域的应用。
      </div>
      <div class="content">
        团队通过开放网络环境实现模型资源的耦合集成，促进智慧共享和开放协作，不断提升模型的精度和可靠性，为相关领域提供支持。同时积极推动国产地理建模软件的发展，构建自主模型生态圈，提升国际影响力，并通过培训、国际合作等促进国产模型的国际化应用，贡献中国智慧和方案。
      </div>
      <div class="info">
        电话：(025)85891347<br />
        邮箱：opengms@126.com<br />
        地址：江苏省南京市栖霞区文苑路1号 南京师范大学地理科学学院
      </div>
    </div>

    <div class="container">
      <div class="title">国家地球系统科学数据中心 长江三角洲分中心</div>
      <el-divider></el-divider>
      <div class="content">
        国家地球系统科学数据中心-长江三角洲分中心依托南京师范大学而建立，由虚拟地理环境教育部重点实验室与地理信息科学江苏省重点实验室负责建设。目标是构建一个长期稳定运行、资源丰富的数据服务网站平台，跟踪长江三角洲地区热点问题、开发治理项目与工程，主动提供在线的数据服务，挖掘、抢救、整理、整合气候资源与大气环境、水资源与水环境、土壤资源与土壤环境、生物资源与生态环境等地质学、地理学、大气科学、环境科学、海洋科学等多学科的数据资源，服务于地球科学研究。培养一批不同层次的数据融合、数据服务与数据共享的技术和管理的专门人才，推动共享工程持续、稳定健康发展。
      </div>
      <div class="info">
        电话：(025)85891253<br />
        邮箱：geodata@njnu.edu.cn<br />
        地址：江苏省南京市栖霞区文苑路1号 南京师范大学地理科学学院501
      </div>
    </div>

    <div class="container">
      <div class="title">
        CBAS-南京师范大学节点(可持续发展协同权衡与综合预测科教节点)培育
      </div>
      <el-divider></el-divider>
      <div class="content">
        南师大节点中心致力于充分发挥南京师范大学地理学综合研究的优势，以SDGs多指标交叉综合建模为切入点，以可持续发展动态模拟与情景分析为核心，以面向可持续发展数字治理的开放式情景预测及决策支持平台构建为出口。基于南师大优秀教育资源，多层次培养SDGs相关方向人才，增进国内外学术交流互访，开展相关理论及模型应用的教育培训，促进数据向知识的转化。
      </div>
      <div class="info">
        电话：(025)85891347<br />
        邮箱：caomin@njnu.edu.cn<br />
        地址：江苏省南京市栖霞区文苑路1号 南京师范大学地理科学学院
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import homeHeader from "@/components/header.vue";
// @ts-ignore
import chaptersHeader from "../chapters/chaptersHeader.vue";
import { ref } from "vue";

const chapterTitle = ref("关于我们");
const chapterDescription = ref(
  "南京师范大学地理科学学院  开放式地理建模与模拟团队（OpenGMS）  长三角数据中心办公室  CBAS-南京师范大学节点"
);

// const oursRef = ref<HTMLElement | null>(null);
// const chaptersHeaderRef = ref<HTMLElement | null>(null);
// // 动态计算chaptersHeader的高度
// const updateMinHeight = () => {
//   const windowHeight = window.innerHeight;
//   console.log(windowHeight, "111");
//   const homeHeaderHeight = (5.5 * windowHeight) / 100; // Convert vh to pixels
//   console.log(homeHeaderHeight, "222");
//   console.log(chaptersHeaderRef, "000");
//   const chaptersHeaderHeight = chaptersHeaderRef.value?.clientHeight || 0;
//   console.log(chaptersHeaderHeight, "333");

//   const minHeight = windowHeight - homeHeaderHeight - chaptersHeaderHeight;
//   oursRef.value!.style.minHeight = `${minHeight}px`;
// };
// onMounted(() => {
//   updateMinHeight();
// });
</script>

<style scoped lang="scss">
.ours {
  //   width: 100vw;
  //   height: 100vh;
  background-color: #f2f4f9;
  .container {
    background-color: #fff;
    width: 50vw;
    margin: 0 25%;
    height: 100%;
    padding: 5vh;
    .title {
      color: #005a86;
      font-weight: bold;
      font-size: x-large;
      margin: 3vh 0;
    }
    .info {
      color: #005a86;
      font-weight: bold;
      line-height: 3vh;
      margin: 1vh 0;
    }
    .content {
      text-indent: 2em;
      margin: 1vh 0;
      line-height: 2.5vh;
    }
  }
}
</style>