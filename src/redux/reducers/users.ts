import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserReducer } from "../../types/User";

export const initialState: UserReducer = {
  users: [],
  singleUser: undefined,
  currentUser: undefined,
};

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  const result = await axios.get("https://api.escuelajs.co/api/v1/users");
  return result.data;
});

export const addUser = createAsyncThunk("addUser", async (userData: User) => {
  const result = await axios.post(
    "https://api.escuelajs.co/api/v1/users/",
    userData
  );
  const newUser = result.data;
  return newUser;
});

export const authenticate = createAsyncThunk(
  "authenticate",
  async (token: string) => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // response type User object
    } catch (error) {
      console.log(error); // temporary
    }
  }
);

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    logOut: (state) => {
      state.currentUser = undefined;
      localStorage.clear();
    },
  },
  extraReducers: (build) => {
    build
      .addCase(
        fetchAllUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.users = action.payload;
        }
      )
      .addCase(authenticate.fulfilled, (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      });
  },
});

const userReducer = userSlice.reducer;
export const { logOut } = userSlice.actions;
export default userReducer;
