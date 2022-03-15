import { SET_ALL_CATEGORIES } from "../../types/goodType";

const categoriesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_CATEGORIES:
      return payload;
    default: {
      return state;
    }
  }
};

export default categoriesReducer;
