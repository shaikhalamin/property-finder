import { API_BASE } from "@/data/utils/api.urls";
import { NextApiRequest, NextApiResponse } from "next";
import { $axios } from "@/data/api/axios-base";
import { AxiosError } from "axios";

const backendTest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(
    "cronjob:call --> ",
    `Cron job called at ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    })}`
  );

  try {
    const response = await $axios(API_BASE as string);
    res.status(200).json({ data: response.data });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("cronjob:call failed:  ", ` ${error.message} `);
      res
        .status(200)
        .json({ message: { text: error.message, status: error.status } });
    } else {
      res.status(200).json({ message: JSON.stringify(error) });
    }
  }
};
export default backendTest;
