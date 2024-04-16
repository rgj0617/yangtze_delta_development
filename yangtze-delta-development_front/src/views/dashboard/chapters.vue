<template>
  <div class="container">
    <div class="head" style="height: 5.5vh; width: 100%">
      <homeHeader />
    </div>
    <router-view> </router-view>
  </div>
</template>
  
  
<script setup lang="ts">
// @ts-ignore
import homeHeader from "../../components/header.vue";
</script>
  
  
<style lang="scss" scoped>
.homeHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 可选，设置层级，确保在其他内容之上 */
}
</style>
  