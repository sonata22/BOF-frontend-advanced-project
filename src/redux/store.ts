import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categories";
import favouriteReducer from "./reducers/favourites";

import productReducer from "./reducers/products";
import userReducer from "./reducers/users";

// Reducers are beeing called in this file

export const store = configureStore({
  reducer: {
    productReducer,
    userReducer,
    categoryReducer,
    favouriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
