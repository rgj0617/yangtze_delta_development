// 计算用户修改变量后，归一化分值的*增量*
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

import si2023 from "/src/assets/json/2023/secondaryIndicators.json"
import si2024 from "/src/assets/json/2024/secondaryIndicators.json"
import si2025 from "/src/assets/json/2025/secondaryIndicators.json"

export function open(city, secondaryIndicator, data) {
  const year = yearStore.year
  let origin
  switch (year) {
    case 2023:
      origin = si2023['开放发展']
      break
    case 2024:
      origin = si2024['开放发展']
      break
    case 2025:
      origin = si2025['开放发展']
      break
  }
  const index = origin['names'].findIndex((name) => name === city)
  try {
    let result = 0
    switch (secondaryIndicator) {
      case "进出口总额占GDP比重":
        result = open1(data)
        break
      case "金融机构外币存款余额":
        result = open2(data)
        break
      case "实际利用外资金额":
        result = open3(data)
        break
      case "旅游外汇收入占旅游总收入的比重":
        result = open4(data)
        break
      case "日均高铁航空班次数量":
        result = open5(data)
        break
      case "人均货运量":
        result = open6(data)
        break
      default:
        console.error('未知的二级指标:', secondaryIndicator)
        return -9999
    }
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

const open1 = (data) => {
  const baseRes = data['进出口总额'] / data['GDP'] * 100
  const normalization = 93.8
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const open2 = (data) => {
  const baseRes = data['外币存款余额'] / data['GDP'] * 100
  const normalization = 1184.4
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const open3 = (data) => {
  const baseRes = data['外商直接投资额'] / data['GDP'] * 100
  const normalization = 50.14
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const open4 = (data) => {
  const baseRes = data['旅游外汇收入'] / data['旅游总收入'] * 100
  const normalization = 0.361806209292816
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const open5 = (data) => {
  const baseRes = (data['日均高铁班次'] + data['日均飞机班次']) / 10000
  const normalization = 2648
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const open6 = (data) => {
  const baseRes = (data['铁路货运量']+data['公路货运量']+data['水运货运量']+data['航空货运量']+data['管道货运量'])/ data['总人口']
  const normalization = 4.9342
  const normalizationRes = baseRes / normalization
  return normalizationRes
}