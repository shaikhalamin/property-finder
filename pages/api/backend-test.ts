import { API_BASE } from "@/data/utils/api.urls";
import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const res = await fetch(API_BASE);
  res.status(200).json({ name: res });
}
