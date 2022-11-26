import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { Product } from "../types/Product";
import { rootReducer } from "./reducers";

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
}

const favourite: Product[] = JSON.parse(
  localStorage.getItem("favourite") || "[]"
);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    favouriteReducer: favourite,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "favourite",
    JSON.stringify(store.getState().favouriteReducer)
  );
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
