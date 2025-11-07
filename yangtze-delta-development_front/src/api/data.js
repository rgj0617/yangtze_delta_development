import { get, post } from "./index"

export default class {
  getCityBasicData(cityName, year) {
    return get(`/data/${cityName}/${year}`)
  }

  getCityDecisionData(cityName, year) {
    return get(`/data/decision/${cityName}/${year}`)
  }
}