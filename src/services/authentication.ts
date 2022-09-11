import { request } from "../config/axios";
import { AxiosPromise } from "axios";
import { UserLogin } from "../interfaces/userLogin";
import { User } from "../interfaces/user";
import { HttpResponse } from "../interfaces/api";

export const loginApi = (data: UserLogin): AxiosPromise<HttpResponse<User>> => {
  return request({
    url: `/auth/login`,
    method: "POST",
    data: data,
  });
};
