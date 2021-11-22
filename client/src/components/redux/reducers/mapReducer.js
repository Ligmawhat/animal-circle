import { ADD_NEW_POINT } from "../types/mapType";

const mapReducer = (state = {}, action) => {
  console.log(state);
  console.log(action.payload);

  switch (action.type) {
    case ADD_NEW_POINT:
      return action.payload;
    default:
      return state;
  }
};

export default mapReducer;
