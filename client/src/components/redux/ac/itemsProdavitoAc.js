import axios from 'axios'
import {
  SET_ALL_GOODS,
  SET_ALL_CATEGORIES,
  SET_ALL_GOODS_FOR_ONE_CATEGORY,
  SET_ALL_MY_GOODS,
  ADD_NEW_GOOD,
  DELETE_GOOD,
} from "../types/goodType";



export const setAllGoods = (value) => ({
  type: SET_ALL_GOODS,
  payload: value,
})

export const getAllGoods = () => async (dispatch) => {
  axios('/prodavito')
    .then((res) => {
      return dispatch(setAllGoods(res.data.allGoodsFromBack))
    })
    .catch((err) => console.log(err))
}

export const setAllCategories = (value) => ({
  type: SET_ALL_CATEGORIES,
  payload: value,
})

export const getAllCategories = () => async (dispatch) => {
  axios('/prodavito')
    .then((res) => {
      return dispatch(setAllCategories(res.data.allCategoryFromBack))
    })
    .catch((err) => console.log(err))
}

export const setAllGoodsForOneCategories = (value) => ({
  type: SET_ALL_GOODS_FOR_ONE_CATEGORY,
  payload: value,
})

export const getAllGoodsForOneCategories = (id) => async (dispatch) => {
  axios(`/prodavito/${id}`)
    .then((res) => {
      return dispatch(
        setAllGoodsForOneCategories(res.data.allGoodsForOneCategoryFromBack),
      )
    })
    .catch((err) => console.log(err))
}
export const setMyGoods = (value) => ({
  type: SET_ALL_MY_GOODS,
  payload: value,
})

export const getMyGoods = (id) => async (dispatch) => {
  axios(`/prodavito/myGoods/${id}`)
    .then((res) => {
      return dispatch(setMyGoods(res.data))
    })

    .catch((err) => console.log(err));
};



export const deleteGood = (id) => async (dispatch) => {
  const delGood = await axios.delete(`/prodavito/goods/${id}`);
  dispatch({ type: DELETE_GOOD, payload: id });
};


export const addNewGood =
  (good_title, description, file, price, category, id) => async (dispatch) => {
    const data = new FormData()
    data.append('good_title', good_title)
    data.append('description', description)
    data.append('file', file)
    data.append('price', price)
    data.append('category', category)
    data.append('id', id)
    const response = await fetch('http://localhost:3001/prodavito/new', {
      method: 'POST',
      body: data,
      files: file,
      credentials: 'include',
    })
    const result = await response.json()
    dispatch({ type: ADD_NEW_GOOD, payload: result })
  }

