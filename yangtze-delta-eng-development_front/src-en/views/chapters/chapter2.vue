<template>
  <div class="container">
    <chaptersHeader
      :chapterTitle="chapterTitle"
      :chapterDescription="chapterDescription"
    />

    <el-card class="mainContext">
      <p class="para" style="font-weight: bold">（一）指标体系构建思路</p>

      <p class="para">
        本报告基于政策解读，构建指标主体框架，并辅以大语言模型文本主题挖掘技术，通过集成多源资料对指标体系进行修正与完善，最终由“一人一套”发展为借助“众力”、更具公信力的评价指标体系。构建过程主要有如下四步（图2）：
      </p>

      <div class="fig-container">
        <img class="fig" src="./chaptersImgs/chapter2Fig1.png" alt="" />
        <p class="figTitle" align="center">图2 指标体系构建思路图</p>
      </div>

      <p class="paraBold">
        第一步：“自上而下”——基于政策解读构建一级指标及其内容
      </p>

      <p class="para">
        专家解读《长三角区域一体化发展规划纲要》（以下简称《纲要》），根据《纲要》中提出的“坚持创新共建、坚持协调共进、坚持绿色共保、坚持开放共赢、坚持民生共享”五大基本原则，确定构建“创新发展”、“协调发展”、“绿色发展”、“开放发展”和“共享发展”五个维度，形成一级指标；通过《纲要》主要内容，明确五个维度重点落实的具体方面。
      </p>

      <p class="paraBold">第二步：“自下而上”——基于大语言模型修正解读结果</p>

      <p class="para">
        大语言模型是经过大量文本语料训练的深度学习模型，具备类似人类的“思考”能力，能够理解自然语言，进行文本生成、推理问答、对话、文档摘要等工作。在大语言模型基础上，本报告使用长三角相关规划文件、政府报告和现有文献等文本对其进行知识扩充，强调资料的时效性，确保结果能够与当前发展策略和实际情况相吻合。经过理解与学习，使得大语言模型能够自动识别和提取资料中的关键主题和信息点。
      </p>

      <p class="para">
        进一步地，将大模型结果和专家解读结果进行对比，识别出步骤一未覆盖的关键信息，同时，发现潜在偏差并校正。通过与专家不断对话，持续迭代学习，修正完善一级指标对应的具体方面，确保解读结果更加全面、科学。
      </p>

      <p class="paraBold">
        第三步：“自下而上”——基于文本主题挖掘技术提供备选二级指标
      </p>

      <p class="para">
        在修正基础上，运用语义关联性分析和频率统计分析，从资料集中生成二级指标，每个一级指标维度生成7-10个最为关键和代表性的二级指标，该过程需确保所选指标在量化分析中能够提供最大的信息增益，并避免冗余。
      </p>

      <p class="para">
        这一过程包括“语义关联性分析”和“词频分析”两个关键技术环节。语义关联性分析是指应用关联规则学习方法识别文件资料与潜在指标之间的内在语义联系，确定哪些指标与文本最为相关。具体步骤为：首先，采用标点符号、语义停顿词等语言特征作为分割标志，对文件资料的内容进行句子级别分割，从而得到保留基本语义信息的文本段落单元，在维护文本上下文完整性的同时确保了主题和关键信息提取（文本分割样例如图3所示）。其次，依据确定的一级指标（即五个维度，分别为创新发展、协调发展、绿色发展、开放发展和共享发展）以及它们的内涵定义，基于预训练模型的先验知识，通过迁移学习的方式引入更多外部信息，采用少样本学习（Few-Shot
        Learning，FSL）方法，利用有限数量的监督信息训练机器学习模型，对文本分割后的句子进行一级指标分类（过程如图4示意）。最后，确定每个文本段落单元相关的二级指标。利用词嵌入模型将每个文本段落单元转化为词向量表示，以捕捉其语义信息和内容特征；同样的，将二级指标的名称转化为词向量表示，以便与文本段落词向量进行比较；使用欧式距离相似性度量方法，为每个文本段落单元找到与之最相关的若干个二级指标（匹配样例如图5所示）；将这些最相关的二级指标视为文本段落单元的二级分类标签。
      </p>

      <div class="fig-container">
        <img class="fig" src="./chaptersImgs/chapter2Fig2.png" alt="" />
        <p class="figTitle" align="center">图3 文本分割样例</p>
      </div>

      <div class="fig-container">
        <img class="fig" src="./chaptersImgs/chapter2Fig3.png" alt="" />
        <p class="figTitle" align="center">图4 少样本提示学习示意图</p>
      </div>

      <div class="fig-container">
        <img class="fig" src="./chaptersImgs/chapter2Fig4.png" alt="" />
        <p class="figTitle" align="center">图5 基于词向量的二级指标匹配样例</p>
      </div>

      <p class="para">
        词频分析是指通过频率统计得到在文本数据中出现频率较高的主题、关键词及其度量指标，识别出政府文件和研究文献中的聚焦点和常用的指标。我们将指标的出现频率由高至低进行排序，每个维度下选择7-10个排序前列的指标定位备选二级指标。
      </p>

      <p class="paraBold">第四步：“自上而下”——基于专家经验确定二级指标</p>

      <p class="para">
        专家基于指标的代表性、非重复性和可持续获取性原则，对第三步大模型给出的备选二级指标进行严选，每个一级指标维度下确定6个二级指标；若某些指标可获取性受限，则由专家拟定可替代指标。
      </p>

      <p class="paraBold">（二）指标体系</p>

      <p class="para">
        根据上述步骤，通过专家团队和机器学习的不断配合与完善，本报告构建出一套长三角高质量发展评价指标体系（表2）。该指标体系包括5个一级指标和30个二级指标。
      </p>

      <p class="para">
        创新发展注重长三角发展动力问题，高质量的发展离不开创新驱动。要瞄准世界科技前沿，实现前瞻性基础研究、引领性原创成果重大突破。具体选择科技拨款占财政拨款的比重、R&D经费占GDP比重、万人发明专利数、高新技术产值占比、受高等教育人数占比和每万人发表科研论文数来进行表征。
      </p>

      <p class="para">
        协调发展注重长三角内部发展不平衡问题，协调发展是高质量发展的重要特征。需要重视区域整体谋划，要求坚持区域协同、城乡融合发展。具体选择城乡居民收入比、常住人口城镇化率、服务业占比、区域人均GDP质量指数、常住人口增长率、GDP增长协同指数来衡量。
      </p>

      <p class="para">
        绿色发展注重长三角人与自然可持续发展问题，以人与自然和谐为价值取向，以绿色低碳循环为主要原则，以生态文明建设为基本抓手。需要重视生态环境保护、低碳的生产方式和优美的生活环境，实现生态、生产和生活绿色发展。具体选择单位GDP耗水、单位GDP建设用地占用面积、空气质量优良天数比率、生态空间占比、单位GDP电耗、生活垃圾无害化处理率来表征。
      </p>

      <p class="para">
        开放发展注重长三角发展内外联动问题，目标是提高对外开放质量、发展更高层次的开放型经济。需要重视人、货、资金和信息等各类要素的自由、高效流通，培育竞争新优势。具体选择进出口总额占GDP比重、金融机构外币存款余额、实际利用外资金额、旅游外汇收入占旅游总收入的比重、高铁航空班次数量和货运量来表征。
      </p>

      <p class="para">
        共享发展注重长三角民生服务问题，着眼于医疗、教育、养老、交通等基础设施服务的覆盖力度和水平，推动区域逐步实现共同富裕。具体选择公共文体设施15分钟生活圈覆盖率、一级以上医院15分钟医疗圈覆盖率、中小学师生比、每千名老人拥有养老床位数、人均一般公共预算支出、路网密度来表征。
      </p>

      <div class="tableContainer">
        <p class="tableTitle" align="center">
          表2 长江三角洲高质量发展评价体系
        </p>

        <el-table
          class="table"
          :data="tableData"
          border
          :span-method="objectSpanMethod"
        >
          <el-table-column
            prop="dimension"
            label="维度"
            width="150"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="index"
            label="二级指标"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="attribute"
            label="指标属性"
            width="150"
            align="center"
          ></el-table-column>
        </el-table>
      </div>

      <p class="para" style="font-weight: bold">（三）数据来源与权重设定</p>

      <p class="para">
        本报告的评估对象为长三角设区市单元，共包括41个评价对象数据主要来源于《中国统计年鉴》、《中国城市统计年鉴》、各省市统计年鉴与统计公报、第七次人口普查数据、各类国家/地方机构公布的名单名录，全国10m分辨率士地覆盖数据以及知网、web
        of science、高德地图等网站。
      </p>

      <p class="para">
        本报告采用“逐级等权法”进行权数的分配，即各维度的权数均为1/5；在某一维度内，指标对所属维度的权重为1/n
        (n为该维度下指标的个数)；因此，指标最终权数为1/5n。
      </p>
    </el-card>
  </div>
</template>
  
  
  <script setup lang="ts">
// @ts-ignore
import chaptersHeader from "./chaptersHeader.vue";
import { ref } from "vue";

interface TableDataRow {
  dimension: string;
  index: string;
  attribute: string;
}

const tableData: TableDataRow[] = [
  {
    dimension: "创新发展",
    index: "科技拨款占财政拨款的比重",
    attribute: "正向指标",
  },
  {
    dimension: "创新发展",
    index: "R&D 经费占 GDP 比重",
    attribute: "正向指标",
  },
  {
    dimension: "创新发展",
    index: "万人发明专利数",
    attribute: "正向指标",
  },
  {
    dimension: "创新发展",
    index: "高新技术产值占比",
    attribute: "正向指标",
  },
  {
    dimension: "创新发展",
    index: "受高等教育人数占比",
    attribute: "正向指标",
  },
  {
    dimension: "创新发展",
    index: "每万人发表科研论文数",
    attribute: "正向指标",
  },
  {
    dimension: "协调发展",
    index: "城乡居民收入比",
    attribute: "负向指标",
  },
  {
    dimension: "协调发展",
    index: "常住人口城镇化率",
    attribute: "正向指标",
  },
  {
    dimension: "协调发展",
    index: "服务业占比",
    attribute: "正向指标",
  },
  {
    dimension: "协调发展",
    index: "区域人均 GDP 质量指数",
    attribute: "正向指标",
  },
  {
    dimension: "协调发展",
    index: "常住人口增长率",
    attribute: "正向指标",
  },
  {
    dimension: "协调发展",
    index: "GDP 增长协同指数",
    attribute: "双向指标",
  },

  {
    dimension: "绿色发展",
    index: "单位 GDP 耗水",
    attribute: "负向指标",
  },
  {
    dimension: "绿色发展",
    index: "单位 GDP 建设用地占用面积",
    attribute: "负向指标",
  },
  {
    dimension: "绿色发展",
    index: "空气质量优良天数比率",
    attribute: "正向指标",
  },
  {
    dimension: "绿色发展",
    index: "生态空间占比",
    attribute: "正向指标",
  },
  {
    dimension: "绿色发展",
    index: "单位 GDP 电耗",
    attribute: "负向指标",
  },
  {
    dimension: "绿色发展",
    index: "生活垃圾无害化处理率",
    attribute: "正向指标",
  },

  {
    dimension: "开放发展",
    index: "进出口总额占 GDP 比重",
    attribute: "正向指标",
  },
  {
    dimension: "开放发展",
    index: "金融机构外币存款余额",
    attribute: "正向指标",
  },
  {
    dimension: "开放发展",
    index: "实际利用外资金额",
    attribute: "正向指标",
  },
  {
    dimension: "开放发展",
    index: "旅游外汇收入占旅游总收入的比重",
    attribute: "正向指标",
  },
  {
    dimension: "开放发展",
    index: "高铁航空班次数量",
    attribute: "正向指标",
  },
  {
    dimension: "开放发展",
    index: "货运量",
    attribute: "正向指标",
  },

  {
    dimension: "共享发展",
    index: "公共文体设施15分钟生活圈覆盖率",
    attribute: "正向指标",
  },
  {
    dimension: "共享发展",
    index: "一级以上医院15分钟医疗圈覆盖率",
    attribute: "正向指标",
  },
  {
    dimension: "共享发展",
    index: "中小学师生比",
    attribute: "正向指标",
  },
  {
    dimension: "共享发展",
    index: "每千名老人拥有养老床位数",
    attribute: "正向指标",
  },
  {
    dimension: "共享发展",
    index: "人均一般公共预算支出",
    attribute: "正向指标",
  },
  {
    dimension: "共享发展",
    index: "路网密度",
    attribute: "正向指标",
  },
];

const objectSpanMethod = ({ row, rowIndex, columnIndex }: any) => {
  if (columnIndex === 0) {
    // 判断当前单元格与上一行单元格是否相同，如果相同则跳过渲染
    if (rowIndex > 0 && row.dimension === tableData[rowIndex - 1].dimension) {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }

    // 计算当前维度的连续重复次数
    let rowspan = 1;
    for (let i = rowIndex + 1; i < tableData.length; i++) {
      if (row.dimension === tableData[i].dimension) {
        rowspan++;
      } else {
        break;
      }
    }

    return {
      rowspan,
      colspan: 1,
    };
  }
};

const chapterTitle = ref("二、长江三角洲高质量发展评价指标体系");
const chapterDescription = ref(
  "本报告基于政策解读，辅以大语言模型和文本主题挖掘技术，集成多源资料对指标体系进行修正与完善，通过自上而下构建一级指标及其内容、自下而上修正解读结果、自下而上提供备选二级指标，以及自上而下基于专家经验确定二级指标四个步骤，构建了一个更具公信力的长三角高质量发展评价指标体系，在衡量创新发展、协调发展、绿色发展、开放发展和共享发展等方面都起到关键作用。"
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
    width: 70%;
    margin-left: 15%;
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
  