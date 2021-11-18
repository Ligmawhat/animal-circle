import { combineReducers } from 'redux'
import currUserReducer from './currUserReducer'
import itemsReducer from "./itemsReducer";



const rootReducer = combineReducers({
  currUser : currUserReducer,
  items: itemsReducer
})





export default rootReducer