// 计算用户修改变量后，归一化分值的*增量*
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

import Api from "@/api/score"
const api = new Api()

// import si2023 from "/src/assets/json/2023/secondaryIndicators.json"
// import si2024 from "/src/assets/json/2024/secondaryIndicators.json"
// import si2025 from "/src/assets/json/2025/secondaryIndicators.json"

export async function share(city, secondaryIndicator, data) {
  const year = yearStore.year
  // let origin
  // switch (year) {
  //   case 2023:
  //     origin = si2023['共享发展']
  //     break
  //   case 2024:
  //     origin = si2024['共享发展']
  //     break
  //   case 2025:
  //     origin = si2025['共享发展']
  //     break
  // }
  const secondaryIndicators = await api.getNormalizeIndicators(year)
  const origin = secondaryIndicators['共享发展']
  const index = origin['names'].findIndex((name) => name === city)
  try {
    let result = 0
    switch (secondaryIndicator) {
      case "公共文体设施15分钟生活圈覆盖率":
        result = share1(data)
        break
      case "一级以上医院15分钟医疗圈覆盖率":
        result = share2(data)
        break
      case "中小学师生比":
        result = share3(data)
        break
      case "每千名老人拥有养老床位数":
        result = share4(data)
        break
      case "人均一般公共预算支出":
        result = share5(data)
        break
      case "路网密度":
        result = share6(data)
        break
      default:
        console.error('未知的二级指标:', secondaryIndicator)
        return -9999
    }
    // console.log(result)
    const weight = 10 / 3
    if (result > 1) result = 1
    else if (result < 0) result = 0
    result = (result - origin[secondaryIndicator][index]) * weight
    
    if (Number.isFinite(result)) return result
    else return -9999
    
  } catch (e) {
    console.log(e);
    return -9999
  }
}

const share1 = (data) => {
  const baseRes = data['居民可支配收入']
  const normalization = 28.3
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const share2 = (data) => {
  const baseRes = data['城镇居民收入'] / data['农村居民收入']
  const normalization = 41.3
  const normalizationRes = 1 - (baseRes - 1) / normalization
  return normalizationRes
}

const share3 = (data) => {
  const baseRes = data['中小学教师数'] / data['中小学学生数'] * 100
  const normalization = 8.4
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const share4 = (data) => {
  const baseRes = data['养老机构床位总数'] / data['65岁及以上人口数'] * 1000
  const normalization = 36.1189346932042
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const share5 = (data) => {
  const baseRes = data['执业医师数'] / data['总人口'] * 1000
  const normalization = 2392.04
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const share6 = (data) => {
  const baseRes = data['公路长度'] / data['城市面积']
  const normalization = 2.07
  const normalizationRes = baseRes / normalization
  return normalizationRes
}