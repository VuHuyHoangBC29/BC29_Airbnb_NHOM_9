import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { create } from "domain";
import {
  UpdateUser,
  UpdateUserApi,
  UpdateUserThunk,
  UpdateUserAvatar,
  User,
  UserPost,
} from "../../interfaces/user";
import {
  fetchUserDetailedInfoApi,
  fetchUserUpdateApi,
  updateUserApi,
  updateUserAvatarApi,
} from "../../services/user";

export const fetchUserDetailedInfoAction = createAsyncThunk(
  "userDetails/fetchUserDetailedInfo",
  async (id: number) => {
    const response = await fetchUserDetailedInfoApi(id);

    console.log(response);

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

export const updateUserAction = createAsyncThunk(
  "userDetails/updateUser",
  async (data: UpdateUserThunk) => {
    const response = await updateUserApi(data.submitData);

    console.log(response);

    notification.success({
      message: "Cập nhật thành công!",
    });

    data.callback("/");

    return response.data.content;
  }
);

export const updateUserAvatarAction = createAsyncThunk(
  "userDetails/updateAvatar",
  async (data: FormData) => {
    const response = await updateUserAvatarApi(data);

    console.log(response);

    notification.success({
      message: "Cập nhật ảnh đại diện thành công!",
    });

    return response.data.content;
  }
);

interface UserDetailsState {
  userDetail: User | null;
  // updateUser: UpdateUser | null;
}

const INITIAL_STATE: UserDetailsState = {
  userDetail: null,
  // updateUser: null,
};

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
      (state: UserDetailsState, action: PayloadAction<User>) => {
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