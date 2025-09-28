<template>
  <div class="container" :class="{ active: visible }"  @click="toggleVisible()">
    <el-popover
      :visible="visible"
      placement="right"
      
      :width="popoverWidth"
      :popper-class="popperClass"
      ref="popoverRef"
    >
      <template #reference>
        <div ref="referenceRef">{{ indicator.name }}</div>
      </template>
      <div class="popover-contanier" v-show="indicator.formula != ''">
        <div class="formula">
          {{ indicator.formula }}
        </div>
        <div class="variable-container">
          <div class="variable" v-for="(item, index) in indicator.variables" :key="index">
            <div>{{ item.name }}</div>
            <el-input-number v-model="variables[item.name]" :min="item.min" :max="item.max" :step="item.step">
              <template #suffix>
                <span>{{ item.unit }}</span>
              </template>
            </el-input-number>
          </div>
        </div>
        <div class="button-group">
          <el-button @click="updateIndicator()" type="primary" :disabled="buttonDisabled">应用</el-button>
          <el-button @click="toggleVisible()">取消</el-button>
        </div>
      </div>
      <div v-show="indicator.formula == ''" style="font-weight: bold; text-align: center;">
        该指标暂不支持自定义修改
      </div>
    </el-popover>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch, reactive, computed } from 'vue';
import { useSelectedCityStore } from "@/store/selectedCity.js"
const selectedCityStore = useSelectedCityStore();
import { innovation } from "@/utils/indicatorCalculator.js";
import { ElMessage } from 'element-plus';
/*
指标的tips相关内容
*/
const visible = ref(false);
const popoverRef = ref(null);
const referenceRef = ref(null);
// 生成唯一的类名
const popperClass = `custom-popover-${Math.random().toString(36).substr(2, 9)}`;
const toggleVisible = () => {
  visible.value = !visible.value;
}
// 处理点击事件
const handleClickOutside = (event) => {
  if (!visible.value) return;
  const target = event.target;
  // 检查是否点击在触发元素上
  if (referenceRef.value && referenceRef.value.contains(target)) {
    return;
  }
  // 检查是否点击在当前 popover 内容上（使用唯一类名）
  const currentPopover = document.querySelector(`.${popperClass}`)
  if (currentPopover && currentPopover.contains(target)) {
    return;
  }
  // 如果都不是，则关闭 popover
  visible.value = false;
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  initializeVariables() // 初始化所有基础变量
})
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
})
/*--------------------------------------------------*/

/*
父组件传递的文本信息
*/
const props = defineProps({
  indicator: Object,
})
// console.log(props.indicator.formula);

const popoverWidth = ref(330);
const formulaLength = props.indicator.formula.length;
const CCLength = countChineseCharacters(props.indicator.formula)
popoverWidth.value = Math.max(popoverWidth.value, CCLength * 14 + (formulaLength - CCLength) / 2 * 16);

// 这是一个计算字符串中汉字数量的工具
function countChineseCharacters(str) {
   const chineseCharRegex = /[\u4E00-\u9FA5]/g;
   const matches = str.match(chineseCharRegex);
   return matches ? matches.length : 0;
}
/*--------------------------------------------------*/

/*
用户对变量的修改
*/
// 初始化所有基础变量
const variables = reactive({})
const initializeVariables = () => {
  props.indicator.variables.forEach(element => {
    variables[element.name] = 0
  });
} 

const emit = defineEmits(['transmitData'])

// 根据用户输入的变量值更新指标结果
const updateIndicator = () => {
  const city = selectedCityStore.get().value
  const dimension = props.indicator.parent
  const indicatorName = props.indicator.name
  const delta = innovation(city, indicatorName, variables)
  console.log(delta)
  if(delta === -9999) {
    ElMessage.error('输入错误，请检查输入！')
  }
  else {
    const data = {
      city,
      dimension,
      delta
    }
    emit('transmitData', data)
    toggleVisible()
  }
}


const buttonDisabled = computed(() => {
  if(selectedCityStore.get().value === '未选择') return true
  else return false
})
</script>
<style scoped lang="scss">
.container {
  padding: 10px 0px 10px 16px;
  cursor: pointer;
  :hover {
    color: #409EFF;
  }
  .active {
    color: #409EFF;
    background-color: #409EFF1A;
    border-radius: 12px;
  }
}
.popover-contanier {
  display: grid;
  row-gap: 12px;
  .formula {
    padding: 6px 0 6px 0;
    font-weight: bold;
  }
  .variable-container {
    display: grid;
    row-gap: 8px;
    .variable {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .button-group {
    display: flex;
    justify-content: space-evenly;
  }
}

</style>