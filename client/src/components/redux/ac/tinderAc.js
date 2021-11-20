import axios from "axios";
import { SET_ALL_SEX, SET_ALL_BREED, SET_ONE_DOG } from "../types/tinderType";

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
