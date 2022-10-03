import axios from "axios";
import _ from "lodash";
import { API_URLS } from "../utils/api.urls";

const PROPERTY_URL = API_URLS.properties;

export const getProperties = (filters: string = "") => {
  const propertyUrl =
    filters.length > 0 ? `${filters}` : PROPERTY_URL;
  return axios.get(propertyUrl);
};
