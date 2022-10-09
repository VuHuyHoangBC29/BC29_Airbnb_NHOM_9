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


export interface UserPost {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number | null;
  birthday: string;
  gender: boolean;
  role: UserType;
}
export interface UserLoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number | null;
    birthday: string;
    avatar: string | null;
    gender: boolean;
    role: UserType;
  };
  token: string;
}
