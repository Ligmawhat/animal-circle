import { ADD_NEW_POINT } from "../types/mapType";
import axios from "axios";

export function addNewPoint(cords, title, desc, url, id) {
  return async (dispatch) => {
    const response = await axios.post("/map/new", { cords, title, desc, url, id });
    const result = response.data;
    console.log(result);
    dispatch(addPoint(result));
  };
}

export const addPoint = (data) => ({
  type: ADD_NEW_POINT,
  payload: data,
});
