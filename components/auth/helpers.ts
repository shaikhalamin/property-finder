import * as yup from "yup";

export type SignUpFormFields = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  role?: string;
};

export type SignInFormFields = {
  username: string;
  password: string;
};

export type EditUserFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role?: string;
};

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone is required"),
    password: yup.string().required("Password is required"),
    role: yup.string().optional(),
  })
  .required();

export const signInSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const userEditSchema = yup
  .object({
    firstName: yup.string().optional().nullable(),
    lastName: yup.string().optional().nullable(),
    email: yup.string().optional().nullable(),
    phone: yup.string().optional().nullable(),
    password: yup.string().optional().nullable(),
    role: yup.string().optional().nullable(),
  })
  .required();
