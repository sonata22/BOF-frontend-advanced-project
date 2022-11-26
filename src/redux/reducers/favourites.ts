import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavouriteReducer } from "../../types/favourites";
import { Product } from "../../types/Product";

export const initialState: Product[] = []

const favouriteSlice = createSlice({
  name: "favouriteReducer",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state = [...state, action.payload];
    },
    removeFromFavourites: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

const favouriteReducer = favouriteSlice.reducer;
export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;
export default favouriteReducer;
