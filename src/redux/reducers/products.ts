import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useActionData } from "react-router-dom";
import { Product, ProductReducer } from "../../types/Product";

export const initialState: ProductReducer = {
  products: [],
  singleProduct: undefined,
};

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    return result.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id: number) => {
    try {
      const result = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const singleProductData = result.data;
      return singleProductData;
    } catch (error) {
      console.log(error);
    }
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
      "https://api.escuelajs.co/api/v1/products/",
      product
    );
    const newProduct = result.data;
    return newProduct;
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id: number) => {
    try {
      const result = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return result.data;
    } catch (error) {
      alert(error);
    }
  }
);

const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    sortPrice: (state, action) => {
      if (action.payload === "asc") {
        state.products.sort((a, b) => a.price - b.price);
      } else {
        state.products.sort((a, b) => b.price - a.price);
      }
    },
    sortTitleAsc: (state) => {
      state.products.sort((a, b) => (a.title > b.title ? 1 : -1));
    },
    sortTitleDesc: (state) => {
      state.products.sort((a, b) => (a.title < b.title ? 1 : -1));
    },
  },
  extraReducers: (build) => {
    build
      .addCase(
        fetchAllProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
        }
      )
      .addCase(
        fetchSingleProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.singleProduct = action.payload;
        }
      )
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        //state.push(action.payload);
        state.singleProduct = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.singleProduct = undefined;
      });
  },
});

const productReducer = productSlice.reducer;
export const { sortPrice, sortTitleAsc, sortTitleDesc } = productSlice.actions;
export default productReducer;
