export interface IUser {
  firstName: string;
  lastName: string;
  country?: string;
  agree?: boolean;
  email: string;
  password: string;
}
export interface IAuth {
  isAuth: boolean;
  user: IUser;
  loading: boolean;
  error: string;
}

export interface IUsers {
  users: IUser[];
}

export interface ILogin {
  email: string;
  password: string;
}
