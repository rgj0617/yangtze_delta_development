<template>
  <div class="container">
    <chaptersHeader
      :chapterTitle="chapterTitle"
      :chapterDescription="chapterDescription"
    />

    <el-card class="mainContext">
      <p class="para">
        自长三角一体化战略上升为国家级战略已经五年，其整体高质量发展态势和内部发展差异等问题一直备受关注。通过上述长三角高质量发展得分情况，本报告得出以下三点主要特征与问题：
      </p>

      <p class="paraBold">（一）综合得分呈梯度分布，各梯度间有明显落差</p>

      <p class="para">
        长三角高质量发展水平平均得分为55.38，总体发展水平较高。根据得分情况，可划分为五个梯队，上海、杭州、南京、苏州等核心城市组成第一梯队，而宿迁、丽水、宣城、安庆、蚌埠、六安、池州、淮北、阜阳、淮南、宿州、亳州等12个城市构成第五梯队；高质量发展水平呈现东高西低的分布格局，且以上海为中心的集聚特征明显，由上海至苏锡常、杭嘉宁等城市向外逐步降低，呈“雁阵”向长三角内部延伸。其中，上海高质量发展水平最高，得分达87.82，而第五梯队中的淮南、宿州和亳州得分仅为37.92、37.28和37.25。由此可见，长三角内部高质量发展差距较大，核心城市在构建自身竞争力的同时需加大合作帮扶、加快带动边缘地区发展，推动长三角地区走向共同富裕。
      </p>

      <p class="paraBold">（二）五个维度发展不同步，落后城市需补齐短板</p>

      <p class="para">
        从分维度评价结果来看，长三角高质量发展的五个维度呈现不同态势，平均得分依次为9.56、14.08、14.07、6.89和10.77。各维度差距明显，其中，协调发展和绿色发展处于高位水平，且发展水平相当，而开放发展水平提升空间较大。具体而言：①创新发展：龙头城市创新带动能力有待进一步增强，城市间企业与产业创新衔接不够紧密；部分城市创新发展能力不足，城市发展传统增长路径依赖严重；②协调发展：距共同富裕仍有差距，区域内部差异仍显著存在，部分城市依然存在城乡发展差距相对较大等问题；③绿色发展：区域核心城市整体生态环境质量较好，但是，部分城市依然存在发展耗能相对较高、生态空间面积较小等问题，亟待通过创新驱动引领绿色转型发展；④开放发展：城市间差距明显，除上海外，诸多城市开放优势尚未完全发挥，有待进一步深化对外经贸关系，拓展开放合作空间；安徽省开放发展水平亟待提升，部分城市面临对外交流途径较少、金融外资可用有限、对外贸易数量不足等问题；⑤共享发展：部分城市流动人口比重高，医疗、教育等公共资源供给与人口快速集聚的需求不匹配，公共服务供需紧张的局面依然存在，特别是优质资源供给欠缺；此外公共文体设施差距明显，公共文化资源配置不合理问题依然存在。
      </p>

      <p class="paraBold">（三）重点城市各维度分化，全面发展仍任重道远</p>

      <p class="para">
        上海、南京、杭州、合肥，作为长三角高质量发展的核心带动城市，尽管其在创新发展、协调发展、绿色发展、开放发展、共享发展等五个维度上均表现出较高水平，但各城市内部在各维度评分上仍出现较大分化。上海开放发展水平最高，达到满分，而协调发展水平仅有14.64分，上海在不断突破自身经济发展的同时，要探索创新各类合作模式，各地市也需进一步拉近与上海联系，形成良性互动，提升上海对区域的辐射带动效应；南京作为江苏省省会城市，需在创新发展维度发力，借助雄厚的高等教育和科研机构资源，力求在全球科技前沿领域有所突破；共享发展是杭州市目前的短板，得分仅为13.35分，相较于上海、南京等核心城市来说，在医疗和养老服务设施建设方面有较大的提升空间；合肥在创新发展方面突破显著，在协调发展和绿色发展维度也表现较优，但是开放发展和共享发展维度仍然与上海、南京和杭州存在差距，有待加快开放型经济发展和基础设施服务水平建设。以重点城市为鉴，区域内整体高质量发展仍有很长的路要走，应不断加强核心-核心城市、核心-边缘城市间的联动协同发展，依据城市自身情况在各维度上寻求突破，实现高质量发展新跨越。
      </p>
    </el-card>
  </div>
</template>
  
  


  <script setup lang="ts">
// @ts-ignore
import chaptersHeader from "./chaptersHeader.vue";
import { ref } from "vue";

const chapterTitle = ref("四、长三角高质量发展特征与问题");
const chapterDescription = ref(
  "长三角高质量发展态势和内部发展差异等问题一直备受关注，本报告得出以下主要特征与问题：①综合得分呈梯度分布，各梯度间有明显落差；②五个维度发展不同步，落后城市需补齐短板； ③重点城市各维度分化，全面发展仍任重道远。"
);
</script>
  
  
<style lang="scss" scoped>
.sectionContent {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1.5% 30% 0.5% 30%;
  .title {
    font-size: 5vh;
    font-weight: bold;
  }
  .description {
    color: rgb(142, 142, 142);
    font-size: 1.5vh;
    font-weight: 300;
    margin-top: 0.5%;
    text-indent: 2em;
  }
}

.mainContext {
  display: block;
  width: 50vw;
  word-wrap: break-word; /* 自动换行 */
  margin: 0 auto;
  margin-bottom: 15vh;
  // font-family: '仿宋', 'Times New Roman', Times, serif;
  font-size: 20px;
  margin-top: 5px;
  //正文段落
  .para {
    font-size: 20px;
    white-space: normal;
    text-indent: 2em;
    margin-bottom: 3%;
    line-height: 40px;
  }

  .paraBold {
    font-size: 20px;
    white-space: normal;
    text-indent: 2em;
    margin-bottom: 3%;
    line-height: 40px;
    font-weight: bold;
  }

  //表格
  .tableContainer {
    width: auto;
    margin-bottom: 3%;

    .tableTitle {
      font-size: 15px;
      margin-bottom: 3%;
      font-weight: bold;
      white-space: pre-line;
    }

    .table {
      font-size: 15px;
    }
  }

  //图片
  .fig-container {
    padding: 0px;
    margin: 0 20%;
    width: 60%;
    height: auto;
    overflow: hidden;
    margin-bottom: 3%;

    .fig {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0;
      margin: 0;
    }

    .figTitle {
      font-size: 15px;
      font-weight: bold;
      white-space: pre-line;
    }
  }
}

@media (max-width: 1000px) {
  .mainContext {
    display: block;
    width: 100vw;
    word-wrap: break-word; /* 自动换行 */
    margin: 0 auto;
    // font-family: '仿宋', 'Times New Roman', Times, serif;
    font-size: 20px;
    margin-top: 5px;
  }
}
</style>
  