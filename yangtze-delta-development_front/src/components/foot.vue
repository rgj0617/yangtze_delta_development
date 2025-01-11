<template>
  <div class="mainFoot">
    <span class="description">
      南京师范大学地理科学学院 开放式地理建模与模拟团队（OpenGMS）
      邮箱：opengms@126.com 长三角数据中心办公室 邮箱 geodata@njnu.edu.cn
    </span>
    <div class="counter">
      <!-- 第三方服务更多信息请查阅：https://www.tracemyip.org/   https://s01.flagcounter.com/index.html -->
      <a href="https://info.flagcounter.com/CDkW"
        ><img
          src="https://s11.flagcounter.com/mini/CDkW/bg_4378B4/txt_FFFFFF/border_CCCCCC/flags_0/"
          alt="Flag Counter"
          border="0"
      /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.mainFoot {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4vh;
  background: rgba(67, 120, 180, 0.8);
  z-index: 2;
  box-sizing: border-box;
  // text-align: center;
  .description {
    color: white;
    line-height: 4vh;
    font-size: 1.6vh;
  }
  .counter {
    margin: auto 1vw;
  }
}

@media (max-width: 1000px) {
  .mainFoot {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3vh;
    background: rgba(67, 120, 180, 0.8);
    z-index: 2;
    box-sizing: border-box;
    .description {
      color: white;
      line-height: 3vh;
      font-size: 1.1vw;
    }
    .counter {
      margin-top: 0.9vh;
      margin-left: 1vw;
    }
  }
}
</style>