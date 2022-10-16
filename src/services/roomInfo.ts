import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { RoomInfo } from "../interfaces/roomInfo";

export const fetchInfoRoomsApi = (): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue`,
    method: "GET",
  });
};
export const fetchPostRoomApi = (
  data: RoomInfo
): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue`,
    method: "POST",
    data,
  });
};
export const fetchRoomDetailApi = (
  id: number
): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue/${id}`,
    method: "GET",
  });
};
export const fetchPutRoomApi = (
  id: number,
  data: RoomInfo
): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue/${id}`,
    method: "PUT",
    data,
  });
};
export const fetchDeleteRoomApi = (id: number) => {
  return request({
    url: `/phong-thue/${id}`,
    method: "DELETE",
  });
};
