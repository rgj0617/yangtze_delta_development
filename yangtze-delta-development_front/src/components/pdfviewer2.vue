<template>
  <div class="main">
    123dasdsadasdsaddsaddsasdsd
    <div class="pdf-preview">
      <div class="pdf-wrap">
        <vue-pdf-embed
          :source="state.source"
          class="vue-pdf-embed"
          :page="state.pageNum"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import jsPdf from "./altimate.pdf";
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs/esm"; // 获得总页数

const state = reactive({
  source: jsPdf,
  pageNum: 1,
  scale: 1, // 缩放比例
  numPages: 0, // 总页数
});

onMounted(() => {
  const loadingTask = createLoadingTask(state.source);
  loadingTask.promise.then((pdf: { numPages: number }) => {
    state.numPages = pdf.numPages;
  });
});
</script>

<style lang="scss" scoped>
.main {
  width: 50vh;
  height: 100%;
  border: 1px black solid;
}
.pdf-preview {
  position: relative;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
  background: rgb(66, 66, 66);
}
.vue-pdf-embed {
  text-align: center;
  width: 515px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>