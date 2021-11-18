import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer';
const { initState } = require("./initState");


const persistedState = window.localStorage.getItem('redux') ? JSON.parse(window.localStorage.getItem('redux')) : initState


const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()))
})

export default store