<template>
  <div class="container">
    <div class="head" style="height: 5.5vh; width: 100%">
      <homeHeader />
    </div>
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>
        <strong>
          --------------------------------------公开的可下载资源--------------------------------------
        </strong>
      </h1>
    </div>
  </div>
</template>
    
  <script setup>
import homeHeader from "@/components/header.vue";
</script>
    
<style scoped lang="scss">
.homeHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 可选，设置层级，确保在其他内容之上 */
}
.head {
  width: 100%;
  background-color: white;
}
</style>