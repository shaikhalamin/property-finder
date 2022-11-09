import { unstable_getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import axios from "axios";
import { API_BASE } from "@/data/utils/api.urls";

type AxiosOptions = {
  method: string;
  url: string;
  headers: { [key: string]: string };
  data?: any;
};

const proxyToBackend = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { query, body, url, method } = req;
    const proxyUrl = url?.replace("/api/be", "");

    if (session) {
      let axiosOptions: AxiosOptions = {
        method: method as string,
        url: `${API_BASE}/v1${proxyUrl}${query ? `?${query}` : ""}`,
        headers: { Authorization: `Bearer ${(session as any)?.access_token}` },
      };

      if (method === "POST" || method === "PUT") {
        axiosOptions["data"] = body;
        res.send({
          message: "need to process backend",
        });
      } else {
        const getResponse = await axios.get(axiosOptions.url, {
          headers: axiosOptions.headers,
        });

        res.send(getResponse.data);
      }
    } else {
      res.status(401);
    }
  } catch (error) {
    res.status(401);
  }
};

export default proxyToBackend;
