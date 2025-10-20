<template>
  <div class="indicatorContainer">
    <indicator v-for="item in indicators" :key="item.name" :indicator="item" :dimension="dimension" @transmit-data="transmitData"/>
  </div>
  <!-- <div class="coordinateContainer">
    <indicator v-for="item in coordinates" :key="item.name" :indicator="item" :dimension="dimension" @transmit-data="transmitData"/>
  </div>
  <div class="shareContainer">
    <indicator v-for="item in shares" :key="item.name" :indicator="item" :dimension="dimension" @transmit-data="transmitData"/>
  </div>
  <div class="openContainer">
    <indicator v-for="item in opens" :key="item.name" :indicator="item" :dimension="dimension" @transmit-data="transmitData"/>
  </div>
  <div class="greenContainer">
    <indicator v-for="item in greens" :key="item.name" :indicator="item" :dimension="dimension" @transmit-data="transmitData"/>
  </div> -->
</template>
<script setup>
import indicator from './indicator.vue';

const props = defineProps({
  indicators: Array,
  // coordinates: Array,
  // shares: Array,
  // opens: Array,
  // greens: Array,
  dimension: String, // 添加dimension属性
});

// 向父组件传递子组件的数据
const emit = defineEmits(['updateScore'])
const transmitData = (data) => {
  emit('updateScore', data)
}
</script>
<style scoped lang="scss">
.indicatorContainer {
  display: grid;
}
.coordinateContainer {
  display: grid;
}
</style>