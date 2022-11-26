import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

export const initialState: Product[] = [];

const favouriteSlice = createSlice({
  name: "favouriteReducer",
  initialState,
  reducers: {
    toggleFavourites: (state, action) => {
      const inFav = state.find((item) => {
        return item.id === action.payload.id;
      });
      !inFav
        ? (state = [...state, action.payload])
        : state.splice(action.payload, 1);
      return state;
    },
    removeFromFavourites: (state, action) => {
      state.splice(action.payload, 1);
      console.log("remove invoced", state);
    },
  },
});

const favouriteReducer = favouriteSlice.reducer;
export const { toggleFavourites } = favouriteSlice.actions;
export default favouriteReducer;
