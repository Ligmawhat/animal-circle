import { ADD_NEW_POINT } from "../types/mapType";
import axios from "axios";



export function addNewPoint (cords, title, desc, url, file) {
  return async (dispatch) => {
    
    console.log(cords, title, desc, url, file, 'IMAGE AC MAP')
    const response = await axios.post('/map/new', {cords, title, desc, url, file})
    const result = response.data
    console.log(result)
    dispatch(addPoint(result))
  }

}

export const addPoint = (data) => ({
  type: ADD_NEW_POINT,
  payload: data,
});
