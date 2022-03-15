import { ADD_USER_INFO, SET_USER_INFO } from "../types/userInfoTypes";
import axios from "axios";

  export const addUserInfo =
  (email, mobile_phone, file, first_name, last_name, id) => async (dispatch) => {
const data = new FormData()
data.append('email', email)
    data.append('mobile_phone', mobile_phone)
    data.append('file', file)
    data.append('first_name', first_name)
    data.append('last_name', last_name)
    data.append('id', id)
const response = await fetch('http://localhost:3001/user/new' , {
  method: 'POST',
  body: data,
  files: file,
  credentials: 'include',
})
const result = await response.json()
dispatch({
  type: ADD_USER_INFO,
  payload: result
})
  }

export const setUserInfo = (value) => ({
  type: SET_USER_INFO,
  payload: value,
});

export const getUserInfo = (id) => async (dispatch) => {
  axios(`/user/profile/info/${id}`)
    .then((res) => {
      return dispatch(setUserInfo(res.data.userInfoFromBack));
    })
    .catch((err) => console.log(err));
};
