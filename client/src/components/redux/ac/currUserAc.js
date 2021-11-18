import { GET_CURR_USER } from "../types/currUser"
import { LOGOUT_USER } from "../types/currUser"



export function getCurrUser(id, login, usertype) {
  return async (dispatch) => {
    dispatch(currUser(id, login, usertype))
  }
}


export const currUser = (id, login, usertype) => ({
  type: GET_CURR_USER,
  payload: {id, login, usertype}
})


export function logoutUser() {
  return async (dispatch) => {
    dispatch(logout())
  }
}

export const logout = () => ({
  type: LOGOUT_USER
})