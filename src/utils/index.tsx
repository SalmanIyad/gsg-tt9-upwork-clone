/* eslint-disable eqeqeq */
import Swal from 'sweetalert2';
import { ILogin, IUser } from '../@types/auth';
import bcrypt from 'bcryptjs-react';

export const showDialog = (title: any, text: any, icon: any) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: 1500,
    showCancelButton: false,
    showConfirmButton: false,
  });
};

export const fetchFoundEmail = (body: ILogin, users: IUser[]): IUser | null => {
  const temp = users.find((u) => u.email == body.email);
  return temp ? temp : null;
};

export const fetchFoundPassword = (
  currentPassword: string,
  password: string
): boolean => {
  bcrypt.genSaltSync(10);
  const temp = bcrypt.compareSync(currentPassword, password);
  return temp ? true : false;
};
