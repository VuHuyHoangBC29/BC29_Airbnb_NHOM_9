declare type HttpResponse<D> = {
  statusCode: number;
  content: D;
  dateTime: string;
};
