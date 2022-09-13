import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";
import { fetchUserDetailedInfoApi } from "../../services/user";

export const fetchUserDetailedInfoAction = createAsyncThunk(
  "userList/fetchUserDetailedInfo",
  async (id: string) => {
    const response = await fetchUserDetailedInfoApi(id);

    console.log(response);

    return response.data;
  }
);

interface UserDetailsState {
  userDetail: User | null;
}

const INITIAL_STATE: UserDetailsState = {
  userDetail: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserDetailedInfoAction.fulfilled,
      (state: UserDetailsState, action: PayloadAction<User>) => {
        console.log("fulfilled");

        state.userDetail = action.payload;
      }
    );
  },
});

export const userDetailsActions = userDetailsSlice.actions;
export const userDetailsReducer = userDetailsSlice.reducer;
