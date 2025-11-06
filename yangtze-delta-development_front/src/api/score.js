import { get, post } from "./index"

export default class {
  getScoreRanking(year) {
    return get(`/score/ranking/${year}`)
  }

  getDimensionScore(year) {
    return get(`/score/dimensions/${year}`)
  }

  getNormalizeIndicators(year) {
    return get(`/score/indicators/${year}`)
  }
}
