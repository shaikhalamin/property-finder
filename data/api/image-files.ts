import { $axios } from "./axios-base";

import { API_URLS } from "../utils/api.urls";
const STORAGE_FILE_URL = API_URLS.storageFile;

export const uploadImage = (formData: FormData) => {
  return $axios.post(STORAGE_FILE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteImage = async (id: number) => {
  return $axios.delete(`${STORAGE_FILE_URL}/${id}`);
};
