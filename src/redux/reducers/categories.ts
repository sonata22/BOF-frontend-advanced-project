import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Category, CategoryReducer } from "../../types/Category";

export const initialState: CategoryReducer = {
  categories: [],
  singleCategory: undefined,
};

export const fetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async () => {
    const result = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return result.data;
  }
);

export const fetchSingleCategory = createAsyncThunk(
  "fetchSingleCategory",
  async (id: number) => {
    try {
      const result = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${id}`
      );
      const singleCategoryData = result.data;
      return singleCategoryData;
    } catch (error) {
      console.log(error);
    }
  }
);

//Modify data type for this one
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
      "https://api.escuelajs.co/api/v1/categories/",
      category
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
    build
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
          state.categories = action.payload;
      })
      .addCase(
        fetchSingleCategory.fulfilled,
        (state, action: PayloadAction<Category>) => {
          state.singleCategory = action.payload;
        }
      )
      .addCase(addCategory.fulfilled, (state, action) => {
        state.singleCategory = action.payload;
      });
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
