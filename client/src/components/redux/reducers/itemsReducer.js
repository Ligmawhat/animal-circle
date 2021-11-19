import {SET_ALL_CARD_ITEMS} from "../types/itemType";

const itemsReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_ALL_CARD_ITEMS: {
            return payload
        }
        default: {
            return state
        }
    }
}

export default itemsReducer