import { AxiosPromise } from "axios";
import { request } from "../config/axios";
import { Comment } from "../interfaces/comment";

export const fetchCommentsListApi = (): AxiosPromise<
  HttpResponse<Comment[]>
> => {
  return request({
    url: `/binh-luan`,
    method: "GET",
  });
};

