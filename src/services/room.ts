import { AxiosPromise } from "axios";
import { request } from "../config/axios";
import { Room } from "../interfaces/room";

export const fetchRoomsListApi = (): AxiosPromise<HttpResponse<Room[]>> => {
  return request({
    url: `/phong-thue`,
    method: "GET",
  });
};

export const fetchRoomDetailsApi = (
  id: number
): AxiosPromise<HttpResponse<Room>> => {
  return request({
    url: `/phong-thue/${id}`,
    method: "GET",
  });
};
