import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { User, UserPost } from "../../interfaces/user";
import { fetchUserPostApi, fetchUsersListApi } from "../../services/user";

export const fetchUsersListAction = createAsyncThunk(
  "userList/fetchUsersList",
  async (page: number) => {
    const response = await fetchUsersListApi(page);
    return response.data.content.data;
  }
);

export const fetchUserPostAction = createAsyncThunk(
  "userPost/fetchUsersPost",
  async (data: UserPost) => {
    const response = await fetchUserPostApi(data);
    return response.data.content;
  }
);

interface UsersListState {
  usersList: User[];
}
interface UsersPostState {
  userPost: UserPost[];
}

const INITIAL_STATE: UsersListState = {
  usersList: [],
};

const INITIAL_STATE_1: UsersPostState = {
  userPost: [],
};

const usersListSlice = createSlice({
  name: "userList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsersListAction.fulfilled,
      (state: UsersListState, actions: PayloadAction<User[]>) => {
        state.usersList = actions.payload;
        console.log("fulfilled");
      }
    );
  },
});

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

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
//
export const usersPostActions = usersPostSlice.actions;
export const usersPostReducer = usersPostSlice.reducer;
