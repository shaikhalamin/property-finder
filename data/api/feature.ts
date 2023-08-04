import { $axios } from "./axios-base";
import { API_URLS } from "../utils/api.urls";

const FEATURES_URL = API_URLS.feature;

export const getFeatures = () => {
  return $axios.get(FEATURES_URL);
};