import {CHANGE_DOG, SET_ONE_DOG} from "../../types/tinderType";

const oneDogReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE_DOG: {
      return payload;
    }
    case CHANGE_DOG: {
      return state.filter(el => el.id !== payload)
    }
    default: {
      return state;
    }
  }
};

export default oneDogReducer;
