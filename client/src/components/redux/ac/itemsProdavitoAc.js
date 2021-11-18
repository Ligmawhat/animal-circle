import axios from "axios";
import {SET_ALL_CARD_ITEMS} from "../types/itemType";

export const setAllCardItems = (items) => ({
    type: SET_ALL_CARD_ITEMS,
    payload: items
})

export const getAllCardItems = () => async (dispatch) => {
    axios('/prodavito')
        .then(res => {
            console.log(res.data)
             return dispatch(setAllCardItems(res.data))
        })
        .catch(err => console.log(err))
}