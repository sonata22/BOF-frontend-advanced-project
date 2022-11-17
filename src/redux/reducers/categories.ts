import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../../types/Category";

const initialState: Category[] = [];

export const fetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async () => {
    const result = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    const data = result.data;
    return data;
  }
);

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async ({ id, data }: { id: number; data: Category }) => {
    const result = await axios.put(
      `https://api.escuelajs.co/api/v1/categories/${id}`,
      data
    );
    return result.data;
  }
);

export const addCategory = createAsyncThunk(
  "addCategory",
  async (category: Category) => {
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/categories/"
    );
    const newCategory = result.data;
    return newCategory;
  }
);

const categorySlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchAllCategories.fulfilled, (state, action) => {
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

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
