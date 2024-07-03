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