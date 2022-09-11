import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { User } from "../interfaces/user";
import { HttpResponse } from "../interfaces/api";


export const fetchUsersListApi = (): AxiosPromise<User[]> =>{
  return request({
    url: `/users/pagination?skip=0&limit=0`,
    method: "GET",
  });
};
