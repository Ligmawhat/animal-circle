import { SET_ALL_MY_GOODS, ADD_NEW_GOOD } from "../../types/goodType";

const myGoodsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_MY_GOODS:
      return payload;
    case ADD_NEW_GOOD:
      return payload;
    default:
      return state;
  }
};

export default myGoodsReducer;
