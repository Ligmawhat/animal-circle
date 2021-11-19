import { combineReducers } from "redux";
import currUserReducer from "./currUserReducer";
import goodsReducer from "./goodsReducer";
import categoriesReducer from "./categoriesReducer";
import goodsForOneCategoriesReducer from "./goodsForOneCategories";

const rootReducer = combineReducers({
  currUser: currUserReducer,
  goods: goodsReducer,
  categories: categoriesReducer,
  goodsForOneCategories: goodsForOneCategoriesReducer,
});

export default rootReducer;
