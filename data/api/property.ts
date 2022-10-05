import axios from "axios";
import _ from "lodash";
import qs from "qs";
import { API_URLS } from "../utils/api.urls";

const PROPERTY_URL = API_URLS.properties;

export const getProperties = (filters: string = "") => {
  const propertyUrl = filters.length > 0 ? `${filters}` : PROPERTY_URL;
  return axios.get(propertyUrl);
};

export type BasicType = {
  page: number;
  perPage: number;
};

export type KeyValueObject = {
  [key: string]: string | number;
};

export type FilterType = {
  basic: BasicType;
  order: KeyValueObject;
  filters: KeyValueObject;
};

export type PropertiesFilter = {
  basic: BasicType;
  order: {
    created_at: string;
  };
  filters: {
    propertyType: string;
  };
};

const createFilterUrl = (filterObject: PropertiesFilter) => {
  const query = qs.stringify(
    {
      ...filterObject.basic,
      ...filterObject.order,
      filters: {
        ...filterObject.filters,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return query;
};

export const getPropertiesByFilter = async (filterObject: PropertiesFilter) => {
  try {

    console.log({filterObject})
    const query = createFilterUrl(filterObject);
    
    return axios.get(`${PROPERTY_URL}?${query}`);
  } catch (error) {
    console.log(error);
  }
};
