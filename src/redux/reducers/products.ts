import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/products";

//initial state of products - empty array of Products
const initialState: Product[] = [];

//asynchronous function created
export const fetchAllProducts = createAsyncThunk(
  //name of an action
  "fetchAllProducts",
  //the real function
  async () => {
    //variable to hold fetched data
    //axios transforms promise to json data itself, no need to do that with .then()
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    const data = result.data;
    return data;
  }
);

const productSlice = createSlice({
  name: "productReducer",
  //just the name of the state here
  initialState,
  //list of all redecers
  reducers: {},
  //function for fetching
  extraReducers: (build) => {
    //returned by fetch data lives inside "action"
    build.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
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
