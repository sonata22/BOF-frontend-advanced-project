import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import productReducer from "./reducers/products";

// Reducers are beeing called in this file

export const store = configureStore({
  reducer: {
    productReducer,
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
