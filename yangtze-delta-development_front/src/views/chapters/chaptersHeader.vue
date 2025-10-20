<template>
  <div class="container">
    <div class="sectionContent">
      <span class="title"> {{ props.chapterTitle }} </span>
      <span class="description">
        {{ props.chapterDescription }}
      </span>
      <br />
    </div>
    <el-divider>
      <!-- <el-icon><star-filled /></el-icon>
      <el-icon><star-filled /></el-icon>
      <el-icon><star-filled /></el-icon> -->
    </el-divider>
  </div>
</template>

<script setup>
const props = defineProps({
  chapterTitle: String,
  chapterDescription: String,
});
</script>

<style scoped lang="scss">
.container {
  background-color: rgb(0, 90, 134);
  border: #4378b4 1px solid;
}
.sectionContent {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1.5% 25% 0.5% 25%;
  .title {
    margin-top: 2vh;
    font-size: 5vh;
    font-weight: bold;
    color: white;
  }
  .description {
    color: #bfd6e1;
    font-size: 1.5vh;
    font-weight: 300;
    margin-top: 1.2%;
    font-weight: 500;
    line-height: 1.5;
  }
}

// 中等高分辨率显示 (1441px-1919px)
@media (min-width: 1441px) and (max-width: 1900px) {
  .sectionContent {
    margin: 1.2% 3% 0.5% 3%;
    .title {
      font-size: 4.5vw;
    }
    .description {
      font-size: 1.4vw;
      line-height: 1.5;
    }
  }
}

@media (max-width: 1440px) {
  .sectionContent {
    margin: 1.5% 5% 0.5% 5%;
    .title {
      font-size: 5vw;
    }
    .description {
      font-size: 1.6vw;
      line-height: 1.5;
    }
  }
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
    background-color: rgb(0, 90, 134);
    border: #4378b4 1px solid;
  }
  .sectionContent {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1.5% 5% 0.5% 5%;
    .title {
      font-size: 5vw;
      font-weight: bold;
      color: white;
    }
    .description {
      color: #bfd6e1;
      font-size: 1.6vw;
      margin-top: 1.2%;
      font-weight: 500;
      line-height: 1.5;
    }
  }
}
</style>