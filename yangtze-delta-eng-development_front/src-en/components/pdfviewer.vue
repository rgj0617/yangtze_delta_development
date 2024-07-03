<template>
  <div class="pdf-preview">
    <div class="pdf-wrap">
      <vue-pdf-embed
        :source="state.source"
        :style="scaleFun"
        class="vue-pdf-embed"
        :page="state.pageNum"
      />
    </div>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage">Previous Page</div>
      <div class="page-tool-item" @click="nextPage">Next Page</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">Enlarge</div>
      <div class="page-tool-item" @click="pageZoomIn">Shrink</div>
    </div>
  </div>
</template>
    
<script lang="ts" setup>
import { reactive, onMounted, computed } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import { ElMessage } from "element-plus";
// import { createLoadingTask } from "vue3-pdfjs"; // 获得总页数
import pdfurl from "@/assets/altimate.pdf";

const state = reactive({
  source: pdfurl, //预览pdf文件地址
  pageNum: 1, //当前页面
  scale: 1, // 缩放比例
  numPages: 44, // 总页数
});

const scaleFun = computed(() => {
  return {
    width: "70vh", //按照pdf大约7：10的宽高比，对应80vh的高度，直接设置高度不生效

    transform: `scale(${state.scale})`,
  };
});
function lastPage() {
  if (state.pageNum > 1) {
    state.pageNum -= 1;
  }
}
function nextPage() {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1;
  }
}
function pageZoomOut() {
  if (state.scale < 1) {
    state.scale += 0.1;
  } else {
    ElMessage({
      message: "已经放大到最大了",
      type: "warning",
    });
  }
}
function pageZoomIn() {
  if (state.scale > 0.6) {
    state.scale -= 0.1;
  } else {
    ElMessage({
      message: "已经缩放到最小了",
      type: "warning",
    });
  }
}

onMounted(() => {});
</script>
    
<style lang="scss" scoped>
// 桌面端显示
// 桌面端显示
// 桌面端显示
.pdf-preview {
  width: 50vw;

  .pdf-wrap {
    display: flex;
    justify-content: center;

    .vue-pdf-embed {
      text-align: center;

      box-sizing: border-box;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);
    }
  }
  .page-tool {
    width: 25vw;
    margin: 5px 25%;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
    background: rgb(66, 66, 66);
    color: white;
    border-radius: 19px;
    z-index: 100;

    .page-tool-item {
      padding: 8px 15px;
      padding-left: 10px;
      cursor: pointer;
    }
  }
}

@media (max-width: 1000px) {
  .pdf-preview {
    width: 95vw;

    .pdf-wrap {
      display: flex;
      justify-content: center;
      .vue-pdf-embed {
        box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);
      }
    }

    .page-tool {
      width: 40vw;
      margin: 5px 30%;
      display: flex;
      justify-content: center;
      display: flex;
      align-items: center;
      background: rgb(66, 66, 66);
      color: white;
      border-radius: 19px;
      z-index: 100;
      .page-tool-item {
        padding: 8px 15px;
        padding-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>