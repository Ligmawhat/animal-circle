import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer';
const { initState } = require("./initState");


const persistedState = window.localStorage.getItem('redux') ? JSON.parse(window.localStorage.getItem('redux')) : initState


const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)))

// export const store = configureStore({
//   reducer: { [dndApi.reducerPath]: dndApi.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dndApi.middleware)
// });


store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()))
})

export default store