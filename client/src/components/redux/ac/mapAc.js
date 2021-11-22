import { ADD_NEW_POINT } from "../types/mapType"
import axios from 'axios'


export function addNewPoint (cords, title, desc, url) {
  return async (dispatch) => {
    const response = await axios.post('/map/new')
    
    dispatch(addPoint(cords, title, desc, url))
  }
}



export const addPoint = (cords, title, desc, url) => ({
  type: ADD_NEW_POINT,
  payload: {...cords, title, desc, url}
})