import { SET_ALL_MY_GOODS, ADD_NEW_GOOD, DELETE_GOOD } from "../../types/goodType";

const myGoodsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_MY_GOODS:
      return payload;
    case ADD_NEW_GOOD:
      return payload;
    case DELETE_GOOD:
      state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default myGoodsReducer;
