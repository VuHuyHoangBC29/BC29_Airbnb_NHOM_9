import { notification } from "antd";
import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT, USER_INFO_KEY, USER_TOKEN } from "../constants/common";

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: TOKEN_CYBERSOFT,
    // Authorization: userInfo?.accessToken,
  },
});

request.interceptors.request.use((config) => {
  let userInfo = localStorage.getItem(USER_TOKEN);
  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    console.log(userInfo);
    config.headers.token = `${userInfo}`;
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    notification.error({
      message: error.response.data.message,
    });

    throw new Error(error);
  }
);
