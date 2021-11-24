import { GET_CURR_USER, LOGOUT_USER } from "../../types/currUser";

const currUserReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURR_USER:
      return payload;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default currUserReducer;
