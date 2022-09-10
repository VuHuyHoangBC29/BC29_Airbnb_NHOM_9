import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { User } from "../interfaces/user";

export const fetchUsersListApi = (): AxiosPromise<User[]> => {
  return request({
    url: `/users/pagination?skip=0&limit=3`,
    method: "GET",
  });
};
