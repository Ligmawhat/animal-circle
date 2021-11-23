import axios from "axios";
import {
  SET_ALL_GOODS,
  SET_ALL_CATEGORIES,
  SET_ALL_GOODS_FOR_ONE_CATEGORY,
  DEL_ONE_GOOD,
  ADD_ONE_GOOD,
} from "../types/goodType";

export const setAllGoods = (value) => ({
  type: SET_ALL_GOODS,
  payload: value,
});

export const getAllGoods = () => async (dispatch) => {
  axios("/prodavito")
    .then((res) => {
      return dispatch(setAllGoods(res.data.allGoodsFromBack));
    })
    .catch((err) => console.log(err));
};

export const setAllCategories = (value) => ({
  type: SET_ALL_CATEGORIES,
  payload: value,
});

export const getAllCategories = () => async (dispatch) => {
  axios("/prodavito")
    .then((res) => {
      return dispatch(setAllCategories(res.data.allCategoryFromBack));
    })
    .catch((err) => console.log(err));
};

export const setAllGoodsForOneCategories = (value) => ({
  type: SET_ALL_GOODS_FOR_ONE_CATEGORY,
  payload: value,
});

export const getAllGoodsForOneCategories = (id) => async (dispatch) => {
  axios(`/prodavito/${id}`)
    .then((res) => {
      return dispatch(setAllGoodsForOneCategories(res.data.allGoodsForOneCategoryFromBack));
    })
    .catch((err) => console.log(err));
};

export const addPost = (value, nav) => async (dispatch) => {
  const newPost = await axios.post("/prodavito/goods", value);
  dispatch({ type: ADD_ONE_GOOD, payload: newPost.data });
  nav(`/prodavito`);
};
