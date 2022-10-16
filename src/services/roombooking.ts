import { AxiosPromise } from "axios";
import { request } from "../config/axios";
import { RoomBooking } from "../interfaces/roombooking";

export const fetchRoomsBookingApi = (): AxiosPromise<
  HttpResponse<RoomBooking[]>
> => {
  return request({
    url: `/dat-phong`,
    method: "GET",
  });
};
export const fetchPostBookingApi = (
  data: any
): AxiosPromise<HttpResponse<RoomBooking[]>> => {
  return request({
    url: `/dat-phong`,
    method: "POST",
    data,
  });
};

export const fetchDetailBookingApi = (
  id: number
): AxiosPromise<HttpResponse<RoomBooking[]>> => {
  return request({
    url: `dat-phong/${id}`,
    method: "GET",
  });
};

export const fetchDeleteBookingApi = (id: number) => {
  return request({
    url: `dat-phong/${id}`,
    method: "DELETE",
  });
};
