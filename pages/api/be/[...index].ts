import { unstable_getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import axios from "axios";
import { API_BASE } from "@/data/utils/api.urls";

const proxyToBackend = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401);
    }
    const { query, body, url, method } = req;
    const proxyUrl = url?.replace("/api/be", "");
    const API_URL = `${API_BASE}/v1${proxyUrl}${query ? `?${query}` : ""}`;
    const headers = {
      Authorization: `Bearer ${(session as any)?.access_token}`,
    };

    const apiResponse = await axios({
      method: method,
      url: API_URL,
      data: body,
      headers: headers,
    });
    
    res.send(apiResponse.data);
  } catch (error) {
    res.status(401);
  }
};

export default proxyToBackend;
