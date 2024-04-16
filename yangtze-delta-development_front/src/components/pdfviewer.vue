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
      <div class="page-tool-item" @click="lastPage">上一页</div>
      <div class="page-tool-item" @click="nextPage">下一页</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">放 大</div>
      <div class="page-tool-item" @click="pageZoomIn">缩 小</div>
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
    // height: "80vh",
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

onMounted(() => {
  //   const loadingTask = createLoadingTask(state.source);
  //   loadingTask.promise.then((pdf: { numPages: number }) => {
  //     state.numPages = pdf.numPages;
  //   });
});
</script>
    
<style lang="scss" scoped>
.page-tool {
  //   position: absolute;
  //   bottom: 35px;
  //   padding-left: 15px;
  //   padding-right: 15px;
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
  //   cursor: pointer;
  //   margin-left: 25%;
  //   transform: translateX(-50%);
  //   border: white solid;
}
.page-tool-item {
  padding: 8px 15px;
  padding-left: 10px;
  cursor: pointer;
}
.pdf-wrap {
  //   border: 1px solid black;
  display: flex;
  justify-content: center;
  //   height: 100vh;
  //   overflow-y: auto;
}
.pdf-preview {
  //   position: relative;
  //   height: 100vh;

  width: 50vw;
  //   padding: 0px 0;
  //   box-sizing: border-box;

  //   margin: 0 25%;
  //   background: rgb(66, 66, 66);
}
.vue-pdf-embed {
  //   border: 1px solid black;

  text-align: center;
  //   width: 50%;
  //   height: 60vh;
  //   margin: 0 10%;
  box-sizing: border-box;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);
  //   transform: scale(0.72);
}
</style>