import axios from "axios";
import {SET_ALL_SEX, SET_ALL_BREED, SET_ONE_DOG, CHANGE_DOG} from "../types/tinderType";

export const setAllBreed = (value) => ({
  type: SET_ALL_BREED,
  payload: value,
});

export const getAllBreed = () => async (dispatch) => {
  axios("/tinder")
    .then((res) => {
      return dispatch(setAllBreed(res.data.allBreedFromBack));
    })
    .catch((err) => console.log(err));
};

export const setAllSex = (value) => ({
  type: SET_ALL_SEX,
  payload: value,
});

export const getAllSex = () => async (dispatch) => {
  axios("/tinder")
    .then((res) => {
      return dispatch(setAllSex(res.data.allSexFromBack));
    })
    .catch((err) => console.log(err));
};

export const setOneDog = (value) => ({
  type: SET_ONE_DOG,
  payload: value,
});

export const changeOneDog = (id) => ({
    type: CHANGE_DOG,
    payload: id,
});

export const getOneDog = () => async (dispatch) => {
  axios("/tinder")
    .then((res) => {
      return dispatch(setOneDog(res.data.allDogFromBack));
    })
    .catch((err) => console.log(err));
};

export const changeDog = (id) => async (dispatch) => {
    dispatch(changeOneDog(id))
}

export const changeDogAndGetId = (id) => async (dispatch) => {
    axios.post('/tinder/likedog', {id} )
    dispatch(changeOneDog(id))
}