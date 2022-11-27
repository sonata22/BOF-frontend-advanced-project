import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useActionData } from "react-router-dom";
import { Product, ProductReducer } from "../../types/Product";

export const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const inCart = state.find((item) => {
        return item.id === action.payload.id;
      });
      !inCart && (state = [...state, action.payload]);
      return state;
    },
    removeFromCart: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartReducer;
