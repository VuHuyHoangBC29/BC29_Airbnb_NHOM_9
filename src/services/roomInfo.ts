import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { RoomInfo } from "../interfaces/roomInfo";
import { Room } from "../interfaces/room";

export const fetchInfoRoomApi = (): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue`,
    method: `GET`,
  });
};
export const fetchPostRoomApi = (
  data: any
): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue`,
    method: "POST",
    data,
  });
};
