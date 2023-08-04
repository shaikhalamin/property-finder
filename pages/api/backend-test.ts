import { API_BASE } from "@/data/utils/api.urls";
import { NextApiRequest, NextApiResponse } from "next";

const backendTest = async (req:NextApiRequest, res:NextApiResponse) => {
  const response = await fetch(API_BASE as string);
  res.status(200).json({ name: API_BASE as string });
}
export default backendTest;
