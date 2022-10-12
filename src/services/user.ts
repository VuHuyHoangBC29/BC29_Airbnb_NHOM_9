import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { UpdateUserApi, User, UserPost } from "../interfaces/user";

// tải danh sách user
export const fetchUsersListApi = (): AxiosPromise<HttpResponse<User[]>> => {
  return request({
    url: `/users/`,
    method: "GET",
  });
};

export const fetchUsersListByPageApi = (
  page: number
): AxiosPromise<HttpResponsePhanTrang<any, User[]>> => {
  return request({
    url: `/users/phan-trang-tim-kiem?pageIndex=${page}&pageSize=10`,
    method: "GET",
  });
};

// chi tiết user
export const fetchUserDetailedInfoApi = (
  _id: number
): AxiosPromise<HttpResponse<User>> => {
  return request({
    url: `/users/${_id}`,
    method: "GET",
  });
};
// thêm user
export const fetchUserPostApi = (data: UserPost) => {
  return request({
    url: `/users`,
    method: "POST",
    data,
  });
};
// cập nhật
export const fetchUserUpdateApi = (_id: number, data: UserPost) => {
  return request({
    url: `/users/${_id}`,
    method: "PUT",
    data,
  });
};

export const updateUserApi = (
  data: UpdateUserApi
): AxiosPromise<HttpResponse<User>> => {
  return request({
    url: `/users/${data.id}`,
    method: "PUT",
    data: data.submitData,
  });
};

export const updateUserAvatarApi = (
  data: FormData
): AxiosPromise<HttpResponse<User>> => {
  return request({
    url: `/users/upload-avatar`,
    method: "POST",
    data,
  });
};

// xóa
export const fetchDeleteUserApi = (id: number) => {
  return request({
    url: `/users?id=${id}`,
    method: "DELETE",
  });
};
//Tìm kiếm
export const fetchSearchUserApi = (
  name: string
): AxiosPromise<HttpResponse<User[]>> => {
  return request({
    url: `/users/search/${name}`,
    method: "GET",
  });
};
