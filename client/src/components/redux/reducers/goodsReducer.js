import { SET_ALL_GOODS, DEL_ONE_GOOD, ADD_ONE_GOOD } from "../types/goodType";

const goodsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_GOODS:
      return payload;
    case DEL_ONE_GOOD:
      return state.filter((el) => el.id !== payload);
    case ADD_ONE_GOOD:
      return [...state, payload];
    default: {
      return state;
    }
  }
};

export default goodsReducer;
