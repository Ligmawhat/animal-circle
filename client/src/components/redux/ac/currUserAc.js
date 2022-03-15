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


export function currGoogleUser (){
return async (dispatch) => {
    const response = await fetch('http://localhost:3001/user/getgoogleuser', {
  method: 'POST',
  credentials : 'include'
    })
    const result = await response.json()
    console.log(result, 'RES DATA GOOGLE CUR USER')
    // dispatch(currUser(response.data.id, response.data.login,response.data.userType))
}

}