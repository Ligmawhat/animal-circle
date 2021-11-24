import { ADD_NEW_POINT, GET_ALL_POINTS } from "../../types/mapType";

const mapReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_POINT:
      return [...state, action.payload];
      case GET_ALL_POINTS: 
      return action.payload
    default:
      return state;
  }
};

export default mapReducer;
