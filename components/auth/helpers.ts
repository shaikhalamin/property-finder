import * as yup from "yup";

export type SignUpFormFields = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
}

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone is required"),
    password: yup.string().required("Password is required"),
  })
  .required();