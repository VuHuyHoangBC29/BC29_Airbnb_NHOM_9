import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { RoomInfo } from "../interfaces/roomInfo";

export const fetchInfoRoomApi = (): AxiosPromise<HttpResponse<RoomInfo[]>> => {
  return request({
    url: `/phong-thue`,
    method: `GET`,
  });
};
