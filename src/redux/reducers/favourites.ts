import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

export const initialState: Product[] = [];

const favouriteSlice = createSlice({
  name: "favouriteReducer",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const inFav = state.find((item) => {
        return item.id === action.payload.id;
      });
      !inFav && (state = [...state, action.payload]);
      return state;
    },
    removeFromFav: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

const favouriteReducer = favouriteSlice.reducer;
export const { addToFav, removeFromFav } = favouriteSlice.actions;
export default favouriteReducer;
