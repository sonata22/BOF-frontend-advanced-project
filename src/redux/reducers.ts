import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categories";
import favouriteReducer from "./reducers/favourites";
import productReducer from "./reducers/products";
import userReducer from "./reducers/users";

export const rootReducer = combineReducers({
  productReducer,
  userReducer,
  categoryReducer,
  favouriteReducer,
});
