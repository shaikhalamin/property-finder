import { $axios } from "./axios-base";
import { API_URLS } from "../utils/api.urls";

const CITY_URL = API_URLS.cities;

export const getCities = () => {
  return $axios.get(CITY_URL);
};