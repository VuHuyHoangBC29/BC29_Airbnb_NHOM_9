import { UserAddOutlined } from "@ant-design/icons";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { USER_INFO_KEY, USER_TOKEN } from "../../constants/common";
import { User } from "../../interfaces/user";
import { UserLogin } from "../../interfaces/userLogin";
import { loginApi } from "../../services/authentication";

export const loginAction = createAsyncThunk(
  "userAuthentication/userLogin",
  async (data: UserLogin) => {
    const response = await loginApi(data);
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(response.data.content.user));
    localStorage.setItem(USER_TOKEN, JSON.stringify(response.data.content.token));
    notification.success({
      message: "Đăng nhập thành công",
    });

    console.log(response);

    return response.data.content;
  }
);

let userInfo = localStorage.getItem(USER_INFO_KEY);

if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

interface UserState {
  userInfo: User | null;
}

const INITIAL_STATE: UserState = {
  userInfo: null,
};

const authenticationSlice = createSlice({
  name: "userAuthentication",
  initialState: INITIAL_STATE,
  reducers: {
    handleLogout(state: UserState, action: PayloadAction<null>) {
      state.userInfo = action.payload;

      localStorage.removeItem(USER_INFO_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginAction.fulfilled,
      (state: UserState, action: PayloadAction<User>) => {
        state.userInfo = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
