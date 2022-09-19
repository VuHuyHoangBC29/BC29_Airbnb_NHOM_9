declare type HttpResponse<D> = {
  statusCode?: number;
  content: D;
  dateTime?: string;
};
declare type HttpResponseLogin<D, T> = {
  statusCode?: number;
  content: D;
  user: T;
  dateTime?: string;
};
