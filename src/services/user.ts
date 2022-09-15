import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { User } from "../interfaces/user";

export const fetchUsersListApi = (): AxiosPromise<HttpResponse<User[]>> => {
  return request({
    url: `/users`,
    method: "GET",
  });
};

export const fetchUserDetailedInfoApi = (_id: string): AxiosPromise<User[]> => {
  return request({
    url: `/users/${_id}`,
    method: "GET",
  });
};
