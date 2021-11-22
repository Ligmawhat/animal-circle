import initState from "../../initState";
import { SET_ALL_BREED } from "../../types/tinderType";

const breedReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_BREED:
      return payload;

    default: {
      return state;
    }
  }
};

export default breedReducer;
