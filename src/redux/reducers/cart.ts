import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useActionData } from "react-router-dom";
import { Product, ProductReducer } from "../../types/Product";

export const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const inCart = state.find((item) => {
        return item.id === action.payload.id;
      });
      if (!inCart) {
        let newObject = JSON.parse(JSON.stringify(action.payload));
        newObject.amount = 1;
        console.log("Amount: ", newObject.amount);
        state = [...state, newObject];
      }
      return state;
    },
    removeFromCart: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
    emptyCart: (state) => {
      return (state = []);
    },
    increaseAmount: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount = item.amount! + 1;
        }
        return item;
      });
    },
    decreaseAmount: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount = item.amount! - 1;
        }
        return item;
      });
    },
  },
});

const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  emptyCart,
} = cartSlice.actions;
export default cartReducer;
