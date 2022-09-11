declare type HttpResponse<D, T> = {
  statusCode?: number;
  message: string;
  content: D;
  user: T;
  dateTime?: string;
  messageConstants?: any;
};
