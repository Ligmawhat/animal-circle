import { ADD_NEW_POINT } from "../types/mapType"



export function addNewPoint (point, title, desc, url) {
  return async (dispatch) => {
    dispatch(addPoint(point[0], point[1], title, desc, url))
  }
}



export const addPoint = (point1, point2, title, desc, url) => ({
  type: ADD_NEW_POINT,
  payload: {point1, point2, title, desc, url}
})