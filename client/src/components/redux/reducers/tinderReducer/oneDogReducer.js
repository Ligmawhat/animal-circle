import { SET_ONE_DOG } from "../../types/tinderType";

const oneDogReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE_DOG: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default oneDogReducer;
