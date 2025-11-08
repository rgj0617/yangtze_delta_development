import { get, post } from "./index"

export default class {
  getGeometry(geometryType) {
    return get(`/geometry/${geometryType}`)
  }
}