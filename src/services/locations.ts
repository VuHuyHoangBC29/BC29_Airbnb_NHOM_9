import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { Location } from "../interfaces/location";

// export const createLocationApi = (data) => {
//   return request({
//     url: `/api/locations`,
//     method: "POST"
//     data: data,
//   });
// };

export const fetchLocationsListApi = (): AxiosPromise<Location[]> => {
  return request({
    url: `/locations`,
    method: "GET",
  });
};
