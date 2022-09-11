import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";
import { fetchUsersListApi } from "../../services/user";

export const fetchUsersListAction = createAsyncThunk(
  "userList/fetchUsersList",
  async () => {
    const response = await fetchUsersListApi();
    // console.log(response);
    return response.data;
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
      (state: UsersListState, actions: PayloadAction<User[]>) => {
        state.usersList = actions.payload;
        console.log("fulfilled");
      }
    );
    builder.addCase(fetchUsersListAction.pending,()=>{
      console.log("pending");
    })
  },
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
