import { ADD_USER_INFO, SET_USER_INFO } from "../../types/userInfoTypes";

const userInfoReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_INFO:
      return payload;
    case SET_USER_INFO:
      return payload;
    default:
      return state;
  }
};

export default userInfoReducer;
