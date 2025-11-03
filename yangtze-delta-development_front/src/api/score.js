import { get, post } from "index.js"

const getScoreRanking = function(year) {
  get(`/score/ranking/${year}`)
}

const getDimensionScore = function(year) {
  get(`/score/dimension/${year}`)
}

const getNormalizeIndicators = function(year) {
  get(`/score/indicators/${year}`)
}

export { getScoreRanking, getDimensionScore, getNormalizeIndicators }