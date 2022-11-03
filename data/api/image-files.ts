import axios from "axios";

import { API_URLS } from "../utils/api.urls";
const STORAGE_FILE_URL = API_URLS.storageFile;

export const uploadImage = (formData: FormData) => {
  return axios.post(STORAGE_FILE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
