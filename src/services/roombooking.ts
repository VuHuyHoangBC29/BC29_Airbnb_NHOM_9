import { AxiosPromise } from "axios";
import { request } from "../config/axios";
import { RoomBooking } from "../interfaces/roombooking";

export const fetchRoomBookingApi = (): AxiosPromise<HttpResponse<RoomBooking[]>> => {
    return request({
        url:`/dat-phong`,
        method:`GET`,
    })
};
