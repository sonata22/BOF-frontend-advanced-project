export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: Role;
  avatar: string;
}

export type Role = "admin" | "customer";

export interface UserReducer {
  users: User[];
  singleUser: User | undefined;
  currentUser: User | undefined;
}

export interface UserLoginCreds {
  email: string;
  password: string;
}
