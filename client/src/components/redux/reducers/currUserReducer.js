
import { GET_CURR_USER, LOGOUT_USER } from '../types/currUser'

const currUserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CURR_USER:
      return action.payload
      case LOGOUT_USER:
      return {}
    default:
      return state
  }
}

export default currUserReducer
