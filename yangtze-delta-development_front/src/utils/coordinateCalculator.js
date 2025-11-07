// 计算用户修改变量后，归一化分值的*增量*
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();

import Api from "@/api/score"
const api = new Api()

// import si2023 from "/src/assets/json/2023/secondaryIndicators.json"
// import si2024 from "/src/assets/json/2024/secondaryIndicators.json"
// import si2025 from "/src/assets/json/2025/secondaryIndicators.json"

export async function coordinate(city, secondaryIndicator, data) {
  const year = yearStore.year
  // let origin
  // switch (year) {
  //   case 2023:
  //     origin = si2023['协调发展']
  //     break
  //   case 2024:
  //     origin = si2024['协调发展']
  //     break
  //   case 2025:
  //     origin = si2025['协调发展']
  //     break
  // }
  const secondaryIndicators = await api.getNormalizeIndicators(year)
  const origin = secondaryIndicators['协调发展']
  // console.log(origin)
  const index = origin['names'].findIndex((name) => name === city)
  try {
    let result = 0
    switch (secondaryIndicator) {
      case "城乡居民收入比":
        result = coordinate1(data)
        break
      case "常住人口城镇化率":
        result = coordinate2(data)
        break
      case "服务业占比":
        result = coordinate3(data)
        break
      case "区域人均GDP质量指数":
        result = coordinate4(data)
        break
      case "常住人口增长率":
        result = coordinate5(data)
        break
      case "GDP增长协同指数":
        result = coordinate6(data)
        break
    }
    const weight = 10 / 3
    console.log(result)
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

const coordinate1 = (data) => {
  if (!data['城镇常住居民人均可支配收入'] || !data['农村常住居民人均可支配收入']) {
    return -9999
  }
  const baseRes = data['城镇常住居民人均可支配收入'] / data['农村常住居民人均可支配收入']
  const normalization = 1.75
  console.log(baseRes)
  if (baseRes <= normalization) {
    return 1
  } else if (baseRes <= 3*normalization) {
    return 1.5 - (baseRes / (2 * normalization))
  } else {
    return 0
  }
}

const coordinate2 = (data) => {
  if (!data['城镇人口'] || !data['总人口']) {
    return -9999
  }
  const baseRes = data['城镇人口'] / data['总人口'] * 100
  const normalization = 80
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const coordinate3 = (data) => {
  if (!data['第三产业'] || !data['地区生产总值']) {
    return -9999
  }
  const baseRes = data['第三产业'] / data['地区生产总值'] * 100
  const normalization = 73.3
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const coordinate4 = (data) => {
  if (!data['人均GDP变异系数'] || !data['人均GDP']) {
    return -9999
  }
  const baseRes = (1-data['人均GDP变异系数'] )* data['人均GDP']
  const normalization = 110915.897624643
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const coordinate5 = (data) => {
  if (!data['本年常住人口'] || !data['上一年常住人口']) {
    return -9999
  }
  const baseRes = (data['本年常住人口'] - data['上一年常住人口']) / data['上一年常住人口'] * 100
  const normalization = 1.2
  const normalizationRes = baseRes / normalization
  return normalizationRes
}

const coordinate6 = (data) => {
  if (!data['GDP增长率'] || !data['长三角GDP增长率']) {
    return -9999
  }
  const baseRes = data['GDP增长率']  / data['长三角GDP增长率']
  const normalization = 1
  // const normalizationRes = baseRes / normalization
  // return normalizationRes
  if (baseRes < 0) {
    return 0
  } else if (baseRes <= 1) {
    return baseRes / normalization
  } else {
    return (2 - baseRes) / normalization
  }
}