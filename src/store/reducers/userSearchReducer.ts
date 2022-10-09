import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { User } from "../../interfaces/user";
import { fetchSearchUserApi } from "../../services/user";




export const fetchUsersSearchAction = createAsyncThunk(
  "userList/fetchUsersList",
  async (name: string) => {
    const response = await fetchSearchUserApi(name);    
    return response.data.content;
  }
);

interface UsersListState {
  usersList: User[];
}

const INITIAL_STATE: UsersListState = {
  usersList: [],
};

const usersSearchSlice = createSlice({
  name: "userList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        fetchUsersSearchAction.fulfilled,
      (state: UsersListState, actions: PayloadAction<any>) => {
        state.usersList = actions.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const usersSearchActions = usersSearchSlice.actions;
export const usersSearchReducer = usersSearchSlice.reducer;
