<template>
  <div class="indicatorContainer">
    <indicator v-for="item in indicators" :indicator="item" @transmit-data="transmitData"/>
  </div>
</template>
<script setup>
import indicator from './indicator.vue';

const props = defineProps({
  indicators: Array,
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
</style>