<template>
  <div class="mainFoot">
    <span class="description">
      南京师范大学地理科学学院 长三角数据中心办公室 邮箱 geodata@njnu.edu.cn
    </span>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.mainFoot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4vh;
  background: rgba(67, 120, 180, 0.8);
  z-index: 2;
  box-sizing: border-box;
  text-align: center;
  .description {
    color: white;
    line-height: 4vh;
    font-size: 1.5vh;
  }
}
</style>