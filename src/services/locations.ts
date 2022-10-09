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
export const fetchPostLocationApi = (
  data: string
): AxiosPromise<HttpResponse<Location[]>> => {
  return request({
    url: `/vi-tri`,
    method: "POST",
    data,
  });
};

export const fetchLocationDetailsApi = (
  id: number
): AxiosPromise<HttpResponse<Location>> => {
  return request({
    url: `/vi-tri/${id}`,
    method: "GET",
  });
};

export const fetchDeleteLocationApi = (id: number) => {
  return request({
    url: `/vi-tri/${id}`,
    method: "DELETE",
  });
};

export const fetchPutLocationApi = (id: number, data: Location) => {
  return request({
    url: `/vi-tri/${id}`,
    method: "PUT",
    data,
  });
};
