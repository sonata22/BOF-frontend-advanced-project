import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/Product";


const initialState: Product[] = [];

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    const data = result.data;
    return data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id: number) => {
    const result = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const singleProductData = result.data;
    return singleProductData;
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ id, data }: { id: number; data: Product }) => {
    const result = await axios.put(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      data
    );
    return result.data;
  }
);

export const addProduct = createAsyncThunk(
  "addProduct",
  async (product: Product) => {
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/products/"
    );
    const newProduct = result.data;
    return newProduct;
  }
);

const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            item = action.payload;
          }
          return item;
        });
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;