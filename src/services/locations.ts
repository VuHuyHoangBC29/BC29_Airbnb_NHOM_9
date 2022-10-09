import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { Location } from "../interfaces/location";
import { LocationPOST } from "../interfaces/locationPOST";


export const fetchLocationsListApi = (): AxiosPromise<HttpResponse<Location[]>> => {
  return request({
    url: `/vi-tri`,
    method: "GET",
  });
};

export const fetchPostLocationApi = (data: LocationPOST) => {
  return request({
    url: `/vi-tri`,
    method: "POST",
    data,
  });
};

