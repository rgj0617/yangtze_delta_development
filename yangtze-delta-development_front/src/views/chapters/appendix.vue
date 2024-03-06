<template>
  <div class="container">
    <chaptersHeader
      :chapterTitle="chapterTitle"
      :chapterDescription="chapterDescription"
    />

    <el-card class="mainContext">
      <p class="para"><strong>（一）各城市分维度得分</strong></p>
      <div class="tableContainer" style="width: 70%">
        <el-table
          class="table"
          :data="tableData"
          :cell-style="columnStyle"
          border
          :header-cell-style="rowClass"
        >
          <el-table-column
            prop="cityName"
            label="城市"
            min-width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="score" label="综合得分" align="center">
          </el-table-column>
          <el-table-column prop="创新发展" label="创新发展" align="center">
          </el-table-column>
          <el-table-column prop="协调发展" label="协调发展" align="center">
          </el-table-column>
          <el-table-column prop="绿色发展" label="绿色发展" align="center">
          </el-table-column>
          <el-table-column prop="开放发展" label="开放发展" align="center">
          </el-table-column>
          <el-table-column prop="共享发展" label="共享发展" align="center">
          </el-table-column>
        </el-table>
      </div>
      <p class="para">
        <strong>（二）长江三角洲高质量发展评价县域探索</strong>
      </p>
      <p class="para">
        县域是支撑经济社会发展的重要单元，也是实现新型城镇化发展的重点和难点区域。以县域为单元力求高质量发展符合新时代新经济发展理念，推动县域经济高质量发展意义重大，任务紧迫。本报告在前文构建的以城市为评价单元的指标体系基础上，结合县域尺度特征，重新梳理、把握县域高质量发展的基本内涵，尝试构建面向县域单元的高质量发展评价指标体系。但目前，该部分研究尚处于起步阶段。本报告将目前五大维度已经搜集的部分指标数据呈现如下（见图14）：包括创新发展维度的受高等教育人数占比，协调发展维度的GDP增长协同指数，绿色发展维度的生态空间占比，共享发展维度的公共文体设施15分钟生活圈覆盖率和一级以上医院15分钟医疗圈覆盖率。我们将加快适时推进长三角高质量发展的县域单元评价工作，客观分析长三角高质量一体化发展现状。
      </p>
      <div class="fig-container">
        <img class="fig" src="./chaptersImgs/appendix1.png" alt="" />
        <img class="fig" src="./chaptersImgs/appendix2.png" alt="" />
        <img class="fig" src="./chaptersImgs/appendix3.png" style="width:50%;margin-left: 25%;" alt="" />
        <p class="figTitle" align="center">图14 长三角高质量发展（2023）县域指标空间分布图</p>
      </div>
    </el-card>
  </div>
</template>
  
  
<script setup lang="ts">
// @ts-ignore
import detailData from "@/assets/json/scoreDetail.json";
// @ts-ignore
import chaptersHeader from "./chaptersHeader.vue";
import { ref } from 'vue';

interface TableDataRow {
  cityName: string;
  score: number;
  创新发展: number;
  协调发展: number;
  绿色发展: number;
  开放发展: number;
  共享发展: number;
}

//将得分四舍五入
const tableData: TableDataRow[] = detailData.map((item: any) => ({
  cityName: item.cityName,
  score: parseFloat(item.score).toFixed(2),
  创新发展: parseFloat(item["创新发展"]).toFixed(2),
  协调发展: parseFloat(item["协调发展"]).toFixed(2),
  绿色发展: parseFloat(item["绿色发展"]).toFixed(2),
  开放发展: parseFloat(item["开放发展"]).toFixed(2),
  共享发展: parseFloat(item["共享发展"]).toFixed(2),
}));

// 修改每一列的颜色
const columnStyle = ({
  columnIndex,
}: {
  row: any;
  column: any;
  rowIndex: number;
  columnIndex: number;
}) => {
  if (columnIndex === 1) {
    return { backgroundColor: "#e7e6e6" };
  } else if (columnIndex === 2) {
    return { backgroundColor: "#fbe4d5" };
  } else if (columnIndex === 3) {
    return { backgroundColor: "#d9e2f3" };
  } else if (columnIndex === 4) {
    return { backgroundColor: "#c5e0b3" };
  } else if (columnIndex === 5) {
    return { backgroundColor: "#ffe599" };
  } else if (columnIndex === 6) {
    return { backgroundColor: "#cc99ff" };
  }
};

// 修改表头颜色
const rowClass = ({
  rowIndex,
  columnIndex,
}: {
  rowIndex: number;
  columnIndex: number;
}) => {
  if (rowIndex === 0) {
    if (columnIndex === 1) {
      return { backgroundColor: "#e7e6e6" };
    } else if (columnIndex === 2) {
      return { backgroundColor: "#fbe4d5" };
    } else if (columnIndex === 3) {
      return { backgroundColor: "#d9e2f3" };
    } else if (columnIndex === 4) {
      return { backgroundColor: "#c5e0b3" };
    } else if (columnIndex === 5) {
      return { backgroundColor: "#ffe599" };
    } else if (columnIndex === 6) {
      return { backgroundColor: "#cc99ff" };
    }
  }
};


const chapterTitle = ref("附录")
const chapterDescription = ref("各城市分维度得分及长江三角洲高质量发展评价县域探索图表")

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
  margin-top: 5px;
  margin-bottom: 15vh;
  // font-family: '仿宋', 'Times New Roman', Times, serif;
  font-size: 20px;

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
    display: flex;
    width: auto;
    margin-bottom: 3%;
    margin-left: 15%;
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
    margin: 0px;
    width: auto;
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
  