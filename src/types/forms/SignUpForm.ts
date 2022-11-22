import { Role } from "../User";

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  re_password: string;
  role: Role;
  avatar: string;
}
