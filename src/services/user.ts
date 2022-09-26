import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { User, UserPost } from "../interfaces/user";

export const fetchUsersListApi = (
  page: number 
): AxiosPromise<HttpResponsePhanTrang<any, User[]>> => {
  return request({
    url: `/users/phan-trang-tim-kiem?pageIndex=${page}&pageSize=10`,
    method: "GET",
  });
};

export const fetchUserDetailedInfoApi = (_id: string): AxiosPromise<User[]> => {
  return request({
    url: `/users/${_id}`,
    method: "GET",
  });
};

export const fetchUserPostApi = (data: UserPost) => {
  return request({
    url: `/users`,
    method: "POST",
    data,
  });
};

export const fetchDeleteUserApi = (id: number) => {
  return request({
    url: `/users?id=${id}`,
    method: "DELETE",
  });
};
