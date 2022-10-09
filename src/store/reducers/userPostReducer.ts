import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { User, UserPost } from "../../interfaces/user";
import { fetchUserPostApi } from "../../services/user";

export const fetchUserPostAction = createAsyncThunk(
  "userPost/fetchUsersPost",
  async (data: UserPost) => {
    const response = await fetchUserPostApi(data);
    return response.data.content;
  }
);

interface UsersPostState {
  userPost: UserPost[];
}

const INITIAL_STATE_1: UsersPostState = {
  userPost: [],
};

const usersPostSlice = createSlice({
  name: "userPost",
  initialState: INITIAL_STATE_1,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserPostAction.fulfilled,
      (state: UsersPostState, actions: PayloadAction<UserPost[]>) => {
        state.userPost = actions.payload;
        console.log("fulfilled");
      }
    );
  },
});

//
export const usersPostActions = usersPostSlice.actions;
export const usersPostReducer = usersPostSlice.reducer;
