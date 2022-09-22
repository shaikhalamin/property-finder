import axios from "axios";
import _ from "lodash";
import { API_URLS } from "../utils/api.urls";

const PROPERTY_URL = API_URLS.properties;

export const getProperties = async () => {
  return axios.get(PROPERTY_URL);
};