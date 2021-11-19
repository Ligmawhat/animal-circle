import { SET_ALL_GOODS_FOR_ONE_CATEGORY } from "../types/itemType";

const goodsForOneCategoriesReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_GOODS_FOR_ONE_CATEGORY: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default goodsForOneCategoriesReducer;
