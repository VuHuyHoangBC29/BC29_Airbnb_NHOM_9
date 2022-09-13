import { UserType } from "../enums/user";

export interface User {
  tickets: [];
  deleteAt: boolean | undefined;
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean | undefined;
  address: string;
  type: UserType;
  __v: number;
}
