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

export const fetchLocationsListApi = (): AxiosPromise<Location[]> => {
  return request({
    url: `/locations`,
    method: "GET",
  });
};
