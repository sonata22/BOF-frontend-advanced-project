import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/product";
import { User } from "../../types/user";

//initial state of products - empty array of Products
const initialState: User[] = [];

//asynchronous function created
export const fetchAllUsers = createAsyncThunk(
  //name of an action
  "fetchAllUsers",
  //the real function
  async () => {
    //variable to hold fetched data
    //axios transforms promise to json data itself, no need to do that with .then()
    const result = await axios.get("https://api.escuelajs.co/api/v1/users");
    const data = result.data;
    return data;
  }
);

const userSlice = createSlice({
  name: "userReducer",
  //just the name of the state here
  initialState,
  //list of all reducers
  reducers: {},
  //function for fetching
  extraReducers: (build) => {
    //returned by fetch data lives inside "action"
    build.addCase(fetchAllUsers.fulfilled, (state, action) => {
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

const userReducer = userSlice.reducer;
export default userReducer;
