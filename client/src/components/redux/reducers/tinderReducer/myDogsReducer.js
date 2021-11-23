import { SET_ALL_MY_DOGS, ADD_NEW_DOG } from "../../types/tinderType";

const myDogsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_MY_DOGS:
      return payload;
    case ADD_NEW_DOG:
      return payload;
    default:
      return state;
  }
};

export default myDogsReducer;
