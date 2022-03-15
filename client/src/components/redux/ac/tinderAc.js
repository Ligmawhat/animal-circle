import axios from 'axios'
import {
  SET_ALL_SEX,
  SET_ALL_BREED,
  SET_ONE_DOG,
  SET_ALL_MY_DOGS,
  CHANGE_DOG,
  ADD_NEW_DOG,
  WHO_LIKED_MY_DOG,
  APPROVE_DOG,
} from '../types/tinderType'

export const setAllBreed = (value) => ({
  type: SET_ALL_BREED,
  payload: value,
})

export const getAllBreed = () => async (dispatch) => {
  axios('/tinder')
    .then((res) => {
      return dispatch(setAllBreed(res.data.allBreedFromBack))
    })
    .catch((err) => console.log(err))
}

export const setAllSex = (value) => ({
  type: SET_ALL_SEX,
  payload: value,
})

export const getAllSex = () => async (dispatch) => {
  axios('/tinder')
    .then((res) => {
      return dispatch(setAllSex(res.data.allSexFromBack))
    })
    .catch((err) => console.log(err))
}

export const setOneDog = (value) => ({
  type: SET_ONE_DOG,
  payload: value,
})

export const changeOneDog = (id) => ({
  type: CHANGE_DOG,
  payload: id,
})

export const getOneDog = () => async (dispatch) => {
  axios('/tinder')
    .then((res) => {
      return dispatch(setOneDog(res.data.allDogFromBack))
    })
    .catch((err) => console.log(err))
}

export const changeDog = (id) => async (dispatch) => {
  dispatch(changeOneDog(id))
}

export const changeDogAndGetId = (id) => async (dispatch) => {
  axios.post('/tinder/likedog', { id })
  dispatch(changeOneDog(id))
}

export const setMyDogs = (value) => ({
  type: SET_ALL_MY_DOGS,
  payload: value,
})

export const getMyDogs = (id) => async (dispatch) => {
  axios(`/tinder/myDogs/${id}`)
    .then((res) => {
      return dispatch(setMyDogs(res.data))
    })
    .catch((err) => console.log(err))
}

export const addNewDog =
  (name, desc, file, onebreed, onesex, id) => async (dispatch) => {
    const data = new FormData()
    data.append('name', name)
    data.append('desc', desc)
    data.append('file', file)
    data.append('onebreed', onebreed)
    data.append('onesex', onesex)
    data.append('id', id)
    const response = await fetch('http://localhost:3001/tinder/new', {
      method: 'POST',
      body: data,
      files: file,
      credentials: 'include',
    })
    const result = await response.json()
    dispatch({ type: ADD_NEW_DOG, payload: result })
  }

export const setWhoLikedMyDog = (value) => ({
  type: WHO_LIKED_MY_DOG,
  payload: value,
})

export const getWhoLikedMyDog = (id) => async (dispatch) => {
  axios(`/tinder/like/${id}`)
    .then((res) => {
      return dispatch(setWhoLikedMyDog(res.data.allLikeFromBack))
    })
    .catch((err) => console.log(err))
}

export const approveSelectedDogs = (id) =>  async (dispatch) => {
  axios.post('/tinder/changestatus', {id})
  dispatch({type: APPROVE_DOG, payload: id})
}
