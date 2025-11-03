import { get, post } from "index.js"

export default class {
  getScoreRanking(year) {
    get(`/score/ranking/${year}`)
  }

  getDimensionScore(year) {
    get(`/score/dimension/${year}`)
  }

  getNormalizeIndicators(year) {
    get(`/score/indicators/${year}`)
  }
}
