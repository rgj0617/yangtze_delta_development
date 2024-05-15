<template>
  <div class="container">
    <div class="head">
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
.head {
  height: 5.5vh;
  width: 100%;
}

@media (max-width: 1000px) {
  .head {
    height: 5vh;
    width: 100%;
  }
}
</style>
  