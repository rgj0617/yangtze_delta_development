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
        <div ref="referenceRef" style="font-size: .9rem;">{{ indicator.name }}</div>
      </template>
      <div class="popover-contanier" v-show="indicator.formula != ''">
        <div class="formula">
          {{ indicator.formula }}
        </div>
        <div class="variable-container">
          <div class="variable" v-for="(item, index) in indicator.variables" :key="index">
            <div>{{ item.name }}</div>
            <el-input-number v-model="variables[item.name]" :precision="item.precision" :min="item.min" :max="item.max" :step="item.step">
              <template #suffix>
                <span>{{ item.unit }}</span>
              </template>
            </el-input-number>
          </div>
        </div>
        <div class="button-group">
          <el-tooltip
            content="请先选择地级市"
            :disabled="!buttonDisabled"
          >
            <el-button @click="updateIndicator()" type="primary" :disabled="buttonDisabled">应用</el-button>
          </el-tooltip>
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
import { innovation } from "@/utils/innovationCalculator.js";
import { coordinate } from "@/utils/coordinateCalculator.js";
import { green } from "@/utils/greenCalculator.js";
import { open } from "@/utils/openCalculator.js";
import { share } from "@/utils/shareCalculator.js";
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
  dimension: String, // 添加dimension属性
})
// console.log(props.indicator.formula);

const popoverWidth = ref(350); // popover min width
const formulaLength = props.indicator.formula.length;
const CCLength = countChineseCharacters(props.indicator.formula)
popoverWidth.value = Math.max(popoverWidth.value, CCLength * 16 + (formulaLength - CCLength) / 2 * 16);

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
  if(selectedCityStore.get().value === '未选择'){
    props.indicator.variables.forEach(element => {
      // 将变量初始化为其最小值，确保在有效范围内
      variables[element.name] = element.min || 0
    });
  }
  else {
    const city = selectedCityStore.get().value
    props.indicator.variables.forEach(element => {
      if('initial' in element) {
        variables[element.name] = element.initial[city]
      }
    })
  }
}

// 监听选择的城市变化，初始化变量为对应的值
watch(
  () => selectedCityStore.get().value,
  (newValue, oldValue) => {
    // console.log("监听到了变化")
    initializeVariables()
  }
)

const emit = defineEmits(['transmitData'])

// 根据用户输入的变量值更新指标结果
const updateIndicator = () => {
  const city = selectedCityStore.get().value
  const indicatorName = props.indicator.name
  let delta = -9999

  // 数据验证
  if (!city || city === '未选择') {
    ElMessage.warning('请先选择城市！')
    return
  }

  if (!props.dimension) {
    ElMessage.error('维度信息缺失！')
    return
  }

  if (!indicatorName) {
    ElMessage.error('指标名称缺失！')
    return
  }

  // 验证变量输入
  const hasInvalidInput = props.indicator.variables.some(variable => {
    const value = variables[variable.name]
    if (value === undefined || value === null) {
      ElMessage.warning(`请输入${variable.name}的值！`)
      return true
    }
    // 检查数值是否为有效数字
    if (isNaN(value)) {
      ElMessage.warning(`${variable.name}必须是有效数字！`)
      return true
    }
    // 检查范围，但对初始值给予宽松处理
    if (value < variable.min || value > variable.max) {
      // 如果值等于初始化的最小值，则允许通过
      if (value === (variable.min || 0)) {
        return false
      }
      ElMessage.warning(`${variable.name}的值应在${variable.min}-${variable.max}之间！`)
      return true
    }
    return false
  })

  if (hasInvalidInput) {
    return
  }

  // console.log('更新指标:', {
  //   city,
  //   indicatorName,
  //   dimension: props.dimension,
  //   variables
  // })

  try {
    // 根据维度选择对应的计算函数
    switch (props.dimension) {
      case "创新发展":
        delta = innovation(city, indicatorName, variables)
        break
      case "协调发展":
        delta = coordinate(city, indicatorName, variables)
        break
      case "绿色发展":
        delta = green(city, indicatorName, variables)
        break
      case "开放发展":
        delta = open(city, indicatorName, variables)
        break
      case "共享发展":
        delta = share(city, indicatorName, variables)
        break
      default:
        console.error('未知的发展维度:', props.dimension)
        ElMessage.error(`未知的发展维度: ${props.dimension}`)
        return
    }

    // console.log('计算结果:', delta)
    
    // 只有明确的错误值才认为计算失败
    if (delta === -9999 || delta === undefined || delta === null || !Number.isFinite(delta)) {
      // console.log(delta)
      ElMessage.error('计算失败，请检查输入参数是否正确！')
      return
    }

    // 成功计算
    const data = {
      city, // 修改的城市
      dimension: props.dimension, // 修改的维度
      indicator: indicatorName, // 修改的指标
      delta // 修改造成的分数变化
    }
    
    emit('transmitData', data)
    ElMessage.success(`${indicatorName}计算成功！变化值: ${delta.toFixed(4)}`)
    toggleVisible()
    
  } catch (error) {
    console.error('计算过程中发生错误:', error)
    ElMessage.error(`计算过程中发生错误: ${error.message || '未知错误'}`)
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
::v-deep(.el-input-number) {
  width: 170px;
}
</style>