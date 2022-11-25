import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavouriteReducer } from "../../types/favourites";
import { Product } from "../../types/Product";

export const initialState: FavouriteReducer = {
  favourite: [],
};

const favouriteSlice = createSlice({
  name: "favouriteReducer",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<Product>) => {
      state.favourite = [...state.favourite, action.payload];
    },
    removeFromFavourites: (state, action) => {
      state.favourite.splice(action.payload, 1);
    },
  },
});

const favouriteReducer = favouriteSlice.reducer;
export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;
export default favouriteReducer;
