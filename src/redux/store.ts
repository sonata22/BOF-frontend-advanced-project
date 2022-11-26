import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { rootReducer } from "./reducers";
import categoryReducer from "./reducers/categories";
import favouriteReducer from "./reducers/favourites";

import productReducer from "./reducers/products";
import userReducer from "./reducers/users";

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
}

const cartItems: Product[] = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    // cartReducer: cartItems
  },
});

store.subscribe(() => {
  //localStorage.setItem("cartItems", JSON.stringify(store.getState().cartReducer))
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
