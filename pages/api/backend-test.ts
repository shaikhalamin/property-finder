import { API_BASE } from "@/data/utils/api.urls";
import { NextApiRequest, NextApiResponse } from "next";

const backendTest = async (req:NextApiRequest, res:NextApiResponse) => {
  const response = await fetch(API_BASE);
  res.status(200).json({ name: response });
}
export default backendTest;
