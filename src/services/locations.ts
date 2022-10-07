import { request } from "../config/axios";
import { AxiosPromise, AxiosResponse } from "axios";
import { Location } from "../interfaces/location";
import { LocationPOST } from "../interfaces/locationPOST";

export const createLocationApi = (data: LocationPOST) => {
  return request({
    url: `/locations`,
    method: "POST",
    data,
  });
};

export const fetchLocationsListApi = (): AxiosPromise<
  HttpResponse<Location[]>
> => {
  return request({
    url: `/vi-tri`,
    method: "GET",
  });
};

export const fetchLocationDetailsApi = (
  id: number | undefined
): AxiosPromise<HttpResponse<Location>> => {
  return request({
    url: `/vi-tri/${id}`,
    method: "GET",
  });
};
