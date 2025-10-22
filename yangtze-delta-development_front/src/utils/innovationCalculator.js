// 计算用户修改变量后，归一化分值的*增量*
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

import si2023 from "/src/assets/json/2023/secondaryIndicators.json"
import si2024 from "/src/assets/json/2024/secondaryIndicators.json"
import si2025 from "/src/assets/json/2025/secondaryIndicators.json"

export function innovation(city, secondaryIndicator, data) {
  const year = yearStore.year
  let origin
  switch (year) {
    case 2023:
      origin = si2023['创新发展']
      break
    case 2024:
      origin = si2024['创新发展']
      break
    case 2025:
      origin = si2025['创新发展']
      break
  }
  const index = origin['names'].findIndex((name) => name === city)
  try {
    let result = 0
    switch (secondaryIndicator) {
      case "科技拨款占财政拨款的比重":
        result = innovation1(data)
        break
      case "R&D经费占GDP比重":
        result = innovation2(data)
        break
      case "万人发明专利数":
        result = innovation3(data)
        break
      case "单位GDP高新技术企业数量":
        result = innovation4(data)
        break
      case "受高等教育人数占比":
        result = innovation5(data)
        break
      case "每万人发表科研论文数":
        result = innovation6(data)
        break
    }
    const weight = 10 / 3
    if (result > 1) result = 1
    else if (result < 0) result = 0
    console.log(result)
    result = (result - origin[secondaryIndicator][index]) * weight
    if (Number.isFinite(result)) return result
    else return -9999
    
  } catch (e) {
    console.log(e);
    return -9999
  }
}

const innovation1 = (data) => {
  const baseRes = data['科学技术支出'] / data['一般公共预算支出'] * 100
  const normalization = 8.06
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const innovation2 = (data) => {
  const baseRes = data['R&D经费支出'] / data['GDP'] * 100
  const normalization = 6.53
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const innovation3 = (data) => {
  const baseRes = data['发明专利申请授权量'] / 10000
  const normalization = 3.286
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const innovation4 = (data) => {
  const baseRes = data['近3年高新技术产业数量'] / data['GDP']
  const normalization = 0.46
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const innovation5 = (data) => {
  const baseRes = data['大学本科及以上人口数'] / data['总人口']
  const normalization = 10
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const innovation6 = (data) => {
  const baseRes = (data['知网中文文献数'] + data['WOS英文文献数']) / 10000
  const normalization = 1
  const normalizationRes = baseRes / normalization
  return normalizationRes
}
