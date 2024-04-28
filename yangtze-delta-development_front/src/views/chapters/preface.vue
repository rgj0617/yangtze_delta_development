<template>
  <div class="container">
    <chaptersHeader
      :chapterTitle="chapterTitle"
      :chapterDescription="chapterDescription"
    />

    <el-card class="mainContext">
      <p class="para">
        2017年，中国共产党第十九次全国代表大会首次提出“高质量发展”的表述，表明中国经济由高速增长阶段转向高质量发展阶段。2018年国务院政府工作报告中提出“按照高质量发展的要求，统筹推进‘五位一体’总体布局和协调推进‘四个全面’战略布局，坚持以供给侧结构性改革为主线，统筹推进稳增长、促改革、调结构、惠民生、防风险各项工作”。近年来，习近平总书记接连强调“高质量发展”，提出高质量发展是全面建设社会主义现代化国家的首要任务。<strong>高质量发展，</strong>是一种新的发展理念，是以质量和效益为价值取向的发展，是<strong>创新、协调、绿色、开放、共享新发展理念的高度聚合</strong>，是创新成为第一动力、协调成为内生特点、绿色成为普遍形态、开放成为必由之路、共享成为根本目的的发展。
      </p>
      <p class="para">
        长江三角洲地区（后文简称长三角地区）位于中国长江的下游地区，濒临黄海与东海，地处江、海交汇之地，包括上海市、江苏省、浙江省、安徽省三省一市全域，区域面积35.8万平方千米。长三角地区地理区位优越，自然条件优渥，有良好的经济基础，以近4%的国土面积，集聚了我国16.7%的常住人口，创造出我国约1/4的经济总量，其所有设区市的经济体量均达到了千亿以上，是我国经济发展最活跃、开放程度最高、创新能力最强的区域之一，在国家现代化建设大局和全方位开放格局中具有举足轻重的战略地位。<strong
          >在我国经济高速增长阶段，长三角地区作为改革开放的先行区和主力军，积累了雄厚的经济实力，同时，也导致传统产业转型、产业结构调整等问题迫在眉睫，生态环境保护、社会民生普惠等问题普遍存在。为实现中国式现代化，长三角地区亟待率先做出变革，形成高质量发展区域集群。</strong
        >
      </p>
      <p class="para">
        党中央将长三角地区定位为全国发展强劲活跃增长极、全国高质量发展样板区、率先基本实现现代化引领区、区域一体化发展示范区、新时代改革开放新高地。自长三角一体化发展战略实施以来，长三角高质量发展结出丰硕成果：经济保持引领，占全国比重稳定在24%；对外开放持续升级，规模不断扩大，层次日益丰富；协同创新步伐加快，研发投入强度高达3.01%，超过全国平均水平近三成；统一市场有序形成；生态环境指标显著向好。长三角三省一市紧扣“一体化”和“高质量”两个关键词，探索形成了很多可复制可推广的宝贵经验，为我国高质量发展的制度体系和路径模式提供了重要启示。党的二十大报告对推进长三角一体化高质量发展作出了部署，在政策的“滋养”下，必将推动长三角一体化高质量发展实现更大作为、取得新的更大进展。
      </p>
      <p class="para">
        定量评价和追踪高质量发展进程是发现问题和解决问题的重要支撑。近年来，各高校和科研院所从多视角、多维度对长三角地区发展近况进行了科学评估。上海华夏经济发展研究院从创新发展、协调发展、绿色发展、开放发展和共享发展五个维度构建高质量发展综合指数，发布了《长三角高质量发展指数报告（2020）》；中国城市规划设计研究院从产业融合、设施联通、生态共保、民生服务和协同开放五大维度构建了一体化发展指数，持续发布了《长三角一体化发展指数报告（2021）》和《长三角一体化发展指数报告（2022）》；沪苏浙皖长三角区域协同创新指数研究联合课题组构建了包括资源共享、创新合作、成果共用、产业联动和环境支撑5项一级指标以及20项二级指标的指标体系，评估了2011—2021年长三角区域协同创新指数得分情况；中科院南京地湖所研究员团队与推动长三角一体化领导小组办公室共同构建了长三角一体化高质量发展评价指标体系，对2018-2020年长三角一体化高质量发展状态进行了评估。上述研究针对长三角“高质量”和“一体化”发展评价，除此以外，部分研究机构针对“协同”、“生态”、“人才”和“数字”等新时期发展关键词构建了评价指标体系，如浙江省科技信息研究院、上海市科学学研究所、江苏省科技情报研究所和安徽省科技情报研究所共同编制了《长三角区域协同创新指数》，复旦大学发布了《长三角生态绿色一体化发展示范区人才一体化指数》，阿里研究院发布了《2019数字长三角一体化发展报告：打造全球数字经济高地》等。同时，诸多机构发布了面向长江经济带范围或全国范围的高质量评价研究，涵盖了长三角地区（具体如表1所示）。
      </p>

      <div class="tableContainer">
        <p class="tableTitle" align="center">表1 相关指标体系与评价报告详情</p>

        <el-table class="table" :data="tableData" stripe border>
          <el-table-column
            prop="index"
            label="序号"
            width="60"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="报告名称"
            width="150"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="publisher"
            label="发布单位"
            width="200"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="time"
            label="发布时间"
            width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="dimension"
            label="评价维度"
            max-width="500"
            align="center"
          ></el-table-column>
        </el-table>
      </div>

      <p class="para">
        上文中涉及到长三角范围的指标体系达到十余个，整理和统计具体指标发现（见图1），共包含超过205个指标。其中，单位GDP能耗、R&D经费支出占GDP比重、专利合作数量、直接利用外资投资等少量指标被频繁使用，即具有较高的认可度；而78%的指标呈现出针对性和特殊性，仅被使用1-2次，其选择的依据是基于专家主观判断；部分指标是研究机构的一手非共享数据，开源性有限，也影响着指标体系的持续使用。可以看出，仅针对“评价长三角高质量发展”这一命题，几乎形成了“一人一套”的指标体系。
      </p>

      <div class="fig-container">
        <img class="fig" src="./chaptersImgs/prefaceFig1.png" alt="" />
        <p class="figTitle" align="center">图1 相关指标被使用频次统计</p>
        <p class="figTitle" align="center">
          （注：受图表显示限制，横坐标仅标注了部分指标全称，同时，有近150个使用频次为1次的指标未在图中显示，用“…”标识）'
        </p>
      </div>

      <p class="para">
        长三角地区高质量发展既是现实背景亟需，又必须是可持续的、可复制的发展模式，需要配套形成科学合理、可持续使用、可复制对比的定量评价体系。本报告面向国家和地区对长三角的发展定位与要求，采用<strong>“自上而下”基于专家经验的政策解读法</strong>，辅以<strong>“自下而上”基于大语言模型的文本主题挖掘技术</strong>生成一套借助“众力”、更具公信力的高质量发展评价指标体系，并对评价结果进行解读。
      </p>

      <p class="para">
        报告由南京师范大学地理科学学院编制，虚拟地理环境教育部重点实验室、国家地球系统科学数据中心长江三角洲分中心、可持续发展大数据国际研究中心南京师范大学节点(培育)共同提供数据与技术支撑。未来，我们将持续追踪长三角高质量发展进程。
      </p>
    </el-card>
  </div>
</template>


<script setup lang="ts">
// @ts-ignore
import chaptersHeader from "./chaptersHeader.vue";
import { ref } from "vue";

interface TableDataRow {
  index: string;
  name: string;
  publisher: string;
  time: string;
  dimension: string;
}

const tableData: TableDataRow[] = [
  {
    index: "1",
    name: "长江经济带城市协同发展能力指数研究报告",
    publisher: "华东师范大学城市发展研究院",
    time: "2015-2023年持续发布",
    dimension: "经济发展、科技创新、交流服务和生态之城",
  },
  {
    index: "2",
    name: "长三角高质量发展指数报告（2020）",
    publisher: "上海华夏经济发展研究院",
    time: "2018-2020年持续发布",
    dimension: "创新发展、协调发展、绿色发展、开放发展和共享发展",
  },
  {
    index: "3",
    name: "长三角一体化发展指数报告",
    publisher: "中国经济信息社、中国城市规划设计研究院",
    time: "2021-2023年持续发布",
    dimension: "产业融合、设施联通、生态共保、民生服务和协同开放",
  },
  {
    index: "4",
    name: "长江经济带绿色发展报告（2017）",
    publisher: "湖南省社会科学院绿色发展研究团队",
    time: "2018",
    dimension: "绿色增长度、绿色承载力和绿色保障力",
  },
  {
    index: "5",
    name: "长三角地区26个城市创新活力排行榜",
    publisher: "华略智库·上海城市创新经济研究中心课题组",
    time: "2019",
    dimension:
      "创新要素集聚、创新资源配置、科创环境质量、科创产出绩效和创新创业活力",
  },
  {
    index: "6",
    name: "2019数字长三角一体化发展报告",
    publisher: "阿里研究院",
    time: "2019",
    dimension: "数字基础设施、数字商业、数字产业、数字政务和数字民生服务",
  },
  {
    index: "7",
    name: "2019长三角城市创新力排行榜",
    publisher: "中国城市规划设计研究院上海分院",
    time: "2019",
    dimension:
      "工程师指数、知识创新指数、产业创新指数、政府引导指数、高新区指数、合伙人指数、创新热线指数、企业成长指数、新经济指数、新空间指数",
  },
  {
    index: "8",
    name: "长三角生态绿色一体化发展示范区人才一体化指数",
    publisher: "复旦大学全球科创人才发展研究中心",
    time: "2022",
    dimension: "人才集聚力、经济支撑力、创新驱动力、环境吸引力和共治协同力",
  },
  {
    index: "9",
    name: "长江经济带高质量发展评估研究报告",
    publisher:
      "中科院南京地理与湖泊研究所、南京农业大学中国资源环境与发展研究院",
    time: "2022",
    dimension: "绿色发展、协调发展、开放发展、创新发展、共享发展和安全发展",
  },
  {
    index: "10",
    name: "长三角一体化高质量发展：内涵、现状及对策",
    publisher: "中科院南京地理与湖泊研究所、中国科学院大学资源与环境学院",
    time: "2022",
    dimension: "创新发展、协调发展、绿色发展、开放发展和共享发展",
  },
  {
    index: "11",
    name: "长三角区域协同创新指数2022",
    publisher:
      "安徽省科技情报研究所、上海市科学学研究所、江苏省科技情报研究所、浙江省科技信息研究院",
    time: "2023",
    dimension: "资源共享、创新合作、成果公用、产业联动和环境支撑",
  },
  {
    index: "12",
    name: "中国科技创新中心100强",
    publisher: "华东师范大学全球创新与发展研究院",
    time: "2023",
    dimension:
      "创新要素集聚、科学研究引领、技术创新策源、产业变革驱动和创新生态营造",
  },
];

const chapterTitle = ref("一、前言");
const chapterDescription = ref(
  "近年来，习近平总书记接连强调“高质量发展”，提出高质量发展是全面建设社会主义现代化国家的首要任务。高质量发展，是一种新的发展理念，是以质量和效益为价值取向的发展，是创新、协调、绿色、开放、共享新发展理念的高度聚合，是创新成为第一动力、协调成为内生特点、绿色成为普遍形态、开放成为必由之路、共享成为根本目的的发展。"
);
</script>


<style lang="scss" scoped>
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
</style>
