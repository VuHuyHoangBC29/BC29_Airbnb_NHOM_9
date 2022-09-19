import { request } from "../config/axios";
import { AxiosPromise } from "axios";
import { UserLogin } from "../interfaces/userLogin";
import { User } from "../interfaces/user";

export const loginApi = (
  data: UserLogin
): AxiosPromise<HttpResponseLogin<any, User[]>> => {
  return request({
    url: `/auth/signin`,
    method: "POST",
    data: data,
  });
};
