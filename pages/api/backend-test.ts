import { API_BASE } from "@/data/utils/api.urls";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const backendTest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(
    "cronjob:call --> ",
    `Cron job called at ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    })}`
  );
  const response = await axios(API_BASE as string);
  res.status(200).json({ data: response.data });
};
export default backendTest;
