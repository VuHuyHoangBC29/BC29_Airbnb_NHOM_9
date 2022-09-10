import { UserAddOutlined } from "@ant-design/icons";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_INFO_KEY } from "../../constants/common";
import { User } from "../../interfaces/user";
import { UserLogin } from "../../interfaces/userLogin";
import { loginApi } from "../../services/authentication";

export const loginAction = createAsyncThunk(
  "userAuthentication/userLogin",
  async (data: UserLogin) => {
    const response = await loginApi(data);

    console.log(response);

    localStorage.setItem(USER_INFO_KEY, JSON.stringify(response.data.content));

    return response.data.content;
  }
);

let userInfo = localStorage.getItem(USER_INFO_KEY);

if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

interface UserState {
  userInfo: User;
}

const INITIAL_STATE: UserState = {
  userInfo: {
    tickets: [],
    deleteAt: undefined,
    _id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: undefined,
    address: "",
    type: "",
    __v: 0,
  },
};

const authenticationSlice = createSlice({
  name: "userAuthentication",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginAction.fulfilled,
      (state: UserState, action: PayloadAction<User>) => {
        console.log("fulfilled");

        state.userInfo = action.payload;
      }
    );
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
