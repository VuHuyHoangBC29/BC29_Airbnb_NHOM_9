import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { create } from "domain";
import { User } from "../../interfaces/user";
import {
  fetchUserDetailedInfoApi,
  fetchUsersListApi,
  fetchUsersListByPageApi,
} from "../../services/user";

export const fetchUsersListByPageAction = createAsyncThunk(
  "userList/fetchUsersList",
  async (page: number) => {
    const response = await fetchUsersListByPageApi(page);
    // console.log(response);
    return response.data.content.data;
  }
);

interface UsersListState {
  usersList: User[];
}

const INITIAL_STATE: UsersListState = {
  usersList: [],
};

const usersListSlice = createSlice({
  name: "userList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsersListByPageAction.fulfilled,
      (state: UsersListState, action: PayloadAction<User[]>) => {
        state.usersList = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
