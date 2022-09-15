import { UserType } from "../enums/user";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number | null;
  birthday: string;
  avatar: string | null;
  gender:boolean;
  role: UserType;
}
