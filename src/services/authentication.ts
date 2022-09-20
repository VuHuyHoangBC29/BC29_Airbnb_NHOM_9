import { request } from "../config/axios";
import { AxiosPromise } from "axios";
import { UserLogin } from "../interfaces/userLogin";
import { User, UserLoginResponse } from "../interfaces/user";

export const loginApi = (data: UserLogin): AxiosPromise<HttpResponse<UserLoginResponse>> => {
  return request({
    url: `/auth/signin`,
    method: "POST",
    data: data,
  });
};
