import { API_BASE } from "@/data/utils/api.urls";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const backendTest = async (req:NextApiRequest, res:NextApiResponse) => {
  const response = await axios(API_BASE as string);
  res.status(200).json({ name: response.data });
}
export default backendTest;
