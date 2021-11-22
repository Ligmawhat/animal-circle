import { ADD_NEW_POINT } from "../types/mapType";

const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_POINT:
      return action.payload;
    default:
      return state;
  }
};

export default mapReducer;
