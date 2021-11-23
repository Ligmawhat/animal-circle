import { combineReducers } from "redux";
import currUserReducer from "./currUserReducer";
import goodsReducer from "./goodsReducer";
import categoriesReducer from "./categoriesReducer";
import goodsForOneCategoriesReducer from "./goodsForOneCategories";
import sexReducer from "./tinderReducer/sexReducer";
import breedReducer from "./tinderReducer/breedReducer";
import oneDogReducer from "./tinderReducer/oneDogReducer";
import mapReducer from "./mapReducer";
import myDogsReducer from "./tinderReducer/myDogsReducer";
import myGoodsReducer from "./myGoodsReducer";

const rootReducer = combineReducers({
  currUser: currUserReducer,
  goods: goodsReducer,
  categories: categoriesReducer,
  goodsForOneCategories: goodsForOneCategoriesReducer,
  sex: sexReducer,
  breed: breedReducer,
  oneDog: oneDogReducer,
  map: mapReducer,
  myDogs: myDogsReducer,
  myGoods: myGoodsReducer,
});

export default rootReducer;
