import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/product";

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
  "countries/fetchCountry",
  //thunkAPI can be used here for error handlihg as a parameter
  async (name: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const data: CountryT[] = await response.json();
    return data;
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
      })
      
  },
});

function async(): import("@reduxjs/toolkit").AsyncThunkPayloadCreator<
  unknown,
  void,
  {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }
> {
  throw new Error("Function not implemented.");
}

const productReducer = productSlice.reducer;
export default productReducer;
