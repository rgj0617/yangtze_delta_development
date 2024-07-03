<template>
  <homeHeader />
  <chaptersHeader
    ref="chaptersHeaderRef"
    :chapterTitle="chapterTitle"
    :chapterDescription="chapterDescription"
    class="chaptersHead"
  />
  <div class="ours" ref="oursRef">
    <div class="container">
      <div class="title">
        Open Geographical Modeling and Simulation Team (OpenGMS)
      </div>
      <el-divider></el-divider>

      <div class="content">
        The Open Geographical Modeling and Simulation Team (OpenGMS) is
        dedicated to advancing the development and application of geographical
        modeling technology, and building an open research platform that
        integrates model development, sharing, and application. The team members
        have rich theoretical and practical experience, focusing on the
        integration of theoretical research and practical application, exploring
        the use of models in fields such as climate change, urban planning, and
        environmental protection.
      </div>
      <div class="content">
        The team achieves the coupling integration of model resources through an
        open network environment, promoting smart sharing and open
        collaboration, continuously enhancing the accuracy and reliability of
        models, and providing support for related fields. At the same time, it
        actively promotes the development of domestic geographical modeling
        software, builds an independent model ecosystem, enhances international
        influence, and promotes the international application of domestic models
        through training and international cooperation, contributing Chinese
        wisdom and solutions.
      </div>
      <div class="info">
        phone：(025)85891347<br />
        email：opengms@126.com<br />
        address： Wenyuan Road, Qixia District, Nanjing, Jiangsu Province,
        School of Geographic Sciences, Nanjing Normal University
      </div>
    </div>

    <div class="container">
      <div class="title">
        Yangtze River Delta Sub-center, National Earth System Science Data
        Center
      </div>
      <el-divider></el-divider>
      <div class="content">
        The Yangtze River Delta Sub-center of the National Earth System Science
        Data Center was established based on Nanjing Normal University. It is
        managed by the Key Laboratory of Virtual Geographic Environment of the
        Ministry of Education and the Jiangsu Provincial Key Laboratory of
        Geographic Information Science. The goal is to build a long-term,
        stable, and resource-rich data service website platform. This center
        focuses on tracking hot issues, developing governance projects and
        engineering efforts in the Yangtze River Delta region. It actively
        provides online data services and integrates multi-disciplinary data
        resources in geology, geography, atmospheric science, environmental
        science, and marine science. These resources include climate,
        atmospheric environment, water resources, soil resources, and ecological
        environments. The center aims to train a cadre of specialists skilled in
        data integration, data services, and data sharing, and to promote the
        sustainable, stable, and healthy development of sharing projects.
      </div>
      <div class="info">
        phone：(025)85891253<br />
        email：geodata@njnu.edu.cn<br />
        address： Wenyuan Road, Qixia District, Nanjing, Jiangsu Province,
        School of Geographic Sciences, Nanjing Normal University
      </div>
    </div>

    <div class="container">
      <div class="title">
        The CBAS-Nanjing Normal University Node (Sustainable Development
        Collaborative Trade-offs and Integrated Forecasting Science and
        Education Node)
      </div>
      <el-divider></el-divider>
      <div class="content">
        The Nanjing Normal University node center is committed to fully
        leveraging the comprehensive research strengths of the university's
        geography department. It focuses on multi-indicator cross-integration
        modeling of SDGs as the entry point, with sustainable development
        dynamic simulation and scenario analysis at its core, and aims to build
        an open scenario prediction and decision-support platform for
        sustainable development digital governance. Leveraging Nanjing Normal
        University's excellent educational resources, the center cultivates
        talents in various SDGs-related fields at multiple levels, enhances
        academic exchanges and visits both domestically and internationally,
        conducts education and training on relevant theories and model
        applications, and promotes the transformation of data into knowledge.
      </div>
      <div class="info">
        phone：(025)85891347<br />
        email：caomin@njnu.edu.cn<br />
        address：Wenyuan Road, Qixia District, Nanjing, Jiangsu Province, School
        of Geographic Sciences, Nanjing Normal University
      </div>
      <!-- 这个是添加了一个相对复杂丰富的统计方式 -->
      <!-- <a href="https://info.flagcounter.com/zpxi"
        ><img
          src="https://s01.flagcounter.com/count2/zpxi/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_20/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
          alt="Flag Counter"
          border="0"
      /></a> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import homeHeader from "@/components/header.vue";
// @ts-ignore
import chaptersHeader from "../chapters/chaptersHeader.vue";
import { ref } from "vue";

const chapterTitle = ref("About us");
const chapterDescription = ref(
  "School of Geographic Sciences, Nanjing Normal University, Open Geographical Modeling and Simulation Team (OpenGMS), Yangtze River Delta Data Center Office, CBAS-Nanjing Normal University Node"
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
.chaptersHead {
  margin-top: 5.5vh;
}
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
@media (max-width: 1000px) {
  .chaptersHead {
    margin-top: 3vh;
  }
  .ours {
    //   width: 100vw;
    //   height: 100vh;
    background-color: #f2f4f9;

    .container {
      background-color: #fff;
      width: 80vw;
      margin: 0 0%;
      height: 100%;
      padding: 10vw;
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
}
</style>
