import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useActionData } from "react-router-dom";
import { Product, ProductReducer } from "../../types/Product";

export const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {},
});

const cartReducer = cartSlice.reducer;
export const {} = cartSlice.actions;
export default cartReducer;
