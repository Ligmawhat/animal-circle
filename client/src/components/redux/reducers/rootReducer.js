import { combineReducers } from "redux";
import categoriesReducer from "./prodavitoReducer/categoriesReducer";
import goodsForOneCategoriesReducer from "./prodavitoReducer/goodsForOneCategories";
import goodsReducer from "./prodavitoReducer/goodsReducer";
import sexReducer from "./tinderReducer/sexReducer";
import breedReducer from "./tinderReducer/breedReducer";
import oneDogReducer from "./tinderReducer/oneDogReducer";
import currUserReducer from "./userReducer/currUserReducer";
import mapReducer from "./mapReducer/mapReducer";
import myGoodsReducer from "./prodavitoReducer/myGoodsReducer";
import myDogsReducer from "./tinderReducer/myDogsReducer";
import userInfoReducer from "./userReducer/userInfoReducer";
import whoLikedMyDogReducer from "./tinderReducer/whoLikedMyDogReducer";

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
  userInfo: userInfoReducer,
  whoLikedMyDog: whoLikedMyDogReducer,
});

export default rootReducer;
