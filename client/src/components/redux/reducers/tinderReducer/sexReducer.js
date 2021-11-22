import { SET_ALL_SEX } from "../../types/tinderType";

const sexReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_SEX:
      return payload;
    default: {
      return state;
    }
  }
};

export default sexReducer;
