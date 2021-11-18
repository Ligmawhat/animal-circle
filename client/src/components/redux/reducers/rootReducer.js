import { combineReducers } from 'redux'
import currUserReducer from './currUserReducer'



const rootReducer = combineReducers({
  currUser : currUserReducer
})





export default rootReducer