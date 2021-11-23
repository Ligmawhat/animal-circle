import axios from "axios";
import {
  SET_ALL_SEX,
  SET_ALL_BREED,
  SET_ONE_DOG,
  SET_ALL_MY_DOGS,
  ADD_NEW_DOG,
} from "../types/tinderType";

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

export const getOneDog = () => async (dispatch) => {
  axios("/tinder")
    .then((res) => {
      return dispatch(setOneDog(res.data.oneDogFromBack));
    })
    .catch((err) => console.log(err));
};
export const setMyDogs = (value) => ({
  type: SET_ALL_MY_DOGS,
  payload: value,
});

export const getMyDogs = (id) => async (dispatch) => {
  axios(`/tinder/myDogs/${id}`)
    .then((res) => {
      return dispatch(setMyDogs(res.data));
    })
    .catch((err) => console.log(err));
};

export const addNewDog = (name, desc, url, onebreed, onesex, id) => async (dispatch) => {
  const newDog = await axios.post("/tinder/new", { name, desc, url, onebreed, onesex, id });
  dispatch({ type: ADD_NEW_DOG, payload: newDog.data });
};
