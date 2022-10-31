import axios from "axios";
import { API_URLS } from "../utils/api.urls";

const CITY_URL = API_URLS.city;

export const getCities = () => {
  return axios.get(CITY_URL);
};