import { UserType } from "../enums/user";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: any;
  birthday: string;
  avatar?: any;
  gender: boolean;
  role: UserType;
}