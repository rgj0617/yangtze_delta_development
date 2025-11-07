// 计算用户修改变量后，归一化分值的*增量*
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

import Api from "@/api/score"
const api = new Api()

// import si2023 from "/src/assets/json/2023/secondaryIndicators.json"
// import si2024 from "/src/assets/json/2024/secondaryIndicators.json"
// import si2025 from "/src/assets/json/2025/secondaryIndicators.json"

export async function green(city, secondaryIndicator, data) {
  const year = yearStore.year
  // let origin
  // switch (year) {
  //   case 2023:
  //     origin = si2023['绿色发展']
  //     break
  //   case 2024:
  //     origin = si2024['绿色发展']
  //     break
  //   case 2025:
  //     origin = si2025['绿色发展']
  //     break
  // }
  const secondaryIndicators = await api.getNormalizeIndicators(year)
  const origin = secondaryIndicators['绿色发展']
  const index = origin['names'].findIndex((name) => name === city)
  try {
    let result = 0
    switch (secondaryIndicator) {
      case "单位GDP耗水":
        result = green1(data)
        break
      case "单位GDP建设用地占用面积":
        result = green2(data)
        break
      case "空气质量优良天数比率":
        result = green3(data)
        break
      case "生态空间占比":
        result = green4(data)
        break
      case "单位生产总值电耗":
        result = green5(data)
        break
      case "生活垃圾无害化处理率":
        result = green6(data)
        break
      default:
        console.error('未知的二级指标:', secondaryIndicator)
        return -9999
    }
    const weight = 10 / 3
    // console.log(result)
    if (result > 1) result = 1
    else if (result < 0) result = 0
    // console.log(result, origin[secondaryIndicator])
    result = (result - origin[secondaryIndicator][index]) * weight
    if (Number.isFinite(result)) return result
    else return -9999
    
  } catch (e) {
    console.log(e);
    return -9999
  }
}

const green1 = (data) => {
  const baseRes = data['总用水量'] / data['市区GDP']
  const normalization = 5.5
  if (baseRes <= normalization) {
    return 1
  } else if (baseRes <= 3*normalization) {
    return 1.5 - (baseRes / (2 * normalization))
  } else {
    return 0
  }
}

const green2 = (data) => {
  const baseRes = data['建设用地面积'] / data['GDP']
  // console.log(baseRes)
  const normalization = 0.08
  if (baseRes <= normalization) {
    return 1
  } else if (baseRes <= 3*normalization) {
    return 1.5 - (baseRes / (2 * normalization))
  } else {
    return 0
  }
}

const green3 = (data) => {
  const baseRes = data['空气质量优良天数'] / 365 * 100
  const normalization = 100
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const green4 = (data) => {
  const baseRes = data['生态空间面积（林地+草地+水体+湿地）']  / data['总面积'] * 100
  const normalization = 25
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const green5 = (data) => {
  const baseRes = data['全社会用电量'] / data['国内地区生产总值'] * 10000
  const normalization = 315.77
  // console.log(baseRes)
  if (baseRes <= normalization) {
    return 1
  } else if (baseRes <= 3*normalization) {
    return 1.5 - (baseRes / (2 * normalization))
  } else {
    return 0
  }
}

const green6 = (data) => {
  const baseRes = data['生活垃圾无害化处理量'] / data['生活垃圾产生总量'] * 100
  const normalization = 100
  const normalizationRes = baseRes / normalization
  return normalizationRes
}