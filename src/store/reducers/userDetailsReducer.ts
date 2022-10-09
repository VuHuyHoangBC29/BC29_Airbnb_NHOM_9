import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserPost } from "../../interfaces/user";
import {
  fetchUserDetailedInfoApi,
  fetchUserUpdateApi,
} from "../../services/user";

export const fetchUserDetailedInfoAction = createAsyncThunk(
  "userDetails/fetchUserDetailedInfo",
  async (id: number) => {
    const response = await fetchUserDetailedInfoApi(id);

    return response.data.content;
  }
);
export const fetchUserUpdateAction = createAsyncThunk(
  "userUpdate/fetchUsersUpdate",
  async (object: any) => {
    // console.log(object);
    
    const response = await fetchUserUpdateApi(object.id, object.data);

    return response.data.content;
  }
);

interface UserDetailsState {
  userDetail: any;
}

const INITIAL_STATE: UserDetailsState = {
  userDetail: null,
};

//
interface UserUpdateState {
  userUpdate: UserPost[];
}

const INITIAL_STATE_1: UserUpdateState = {
  userUpdate: [],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserDetailedInfoAction.fulfilled,
      (state: UserDetailsState, action: PayloadAction<User[]>) => {
        console.log("fulfilled");

        state.userDetail = action.payload;
      }
    );
  },
});

const userUpdateSlice = createSlice({
  name: "userDetails",
  initialState: INITIAL_STATE_1,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserUpdateAction.fulfilled,
      (state: UserUpdateState, action: PayloadAction<any>) => {
        console.log("fulfilled");
        state.userUpdate = action.payload;
      }
    );
  },
});

export const userDetailsActions = userDetailsSlice.actions;
export const userDetailsReducer = userDetailsSlice.reducer;

export const userUpdateActions = userUpdateSlice.actions;
export const userUpdateReducer = userUpdateSlice.reducer;
