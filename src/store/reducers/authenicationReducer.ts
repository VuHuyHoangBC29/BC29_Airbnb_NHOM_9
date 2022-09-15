import { UserAddOutlined } from "@ant-design/icons";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { USER_INFO_KEY } from "../../constants/common";
import { User } from "../../interfaces/user";
import { UserLogin } from "../../interfaces/userLogin";
import { loginApi } from "../../services/authentication";

export const loginAction = createAsyncThunk(
  "userAuthentication/userLogin",
  async (data: UserLogin) => {
    const response = await loginApi(data);

    // console.log(response);

    localStorage.setItem(USER_INFO_KEY, JSON.stringify(response.data.content));

    notification.success({
      message: "Đăng nhập thành công",
    });

    return response.data.content;
  }
);

// let userInfo = localStorage.getItem(USER_INFO_KEY);

// if (userInfo) {
//   userInfo = JSON.parse(userInfo);
// }

interface UserState {
  userInfo: User[] | null;
}

const INITIAL_STATE: UserState = {
  userInfo: [],
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
      (state: UserState, action: PayloadAction<User[]>) => {
        console.log("fulfilled");

        state.userInfo = action.payload;
      }
    );
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
