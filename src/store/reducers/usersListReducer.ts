import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { User } from "../../interfaces/user";
import {
  fetchUserDetailedInfoApi,
  fetchUsersListApi,
} from "../../services/user";



export const fetchUsersListAction = createAsyncThunk(
  "userList/fetchUsersList",
  async (page: number) => {
    const response = await fetchUsersListApi(page);    
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
      fetchUsersListAction.fulfilled,
      (state: UsersListState, actions: PayloadAction<any>) => {
        state.usersList = actions.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
