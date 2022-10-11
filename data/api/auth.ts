
import axios from "axios";
import { API_URLS } from "../utils/api.urls";
const AUTH_URL = API_URLS.auth;

type LoginCredentials =  {
    username: string
    password: string
}

export const login = async (formData: LoginCredentials) => {
  return axios.post(`${AUTH_URL}/login`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};