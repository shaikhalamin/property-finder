import { API_BASE } from "@/data/utils/api.urls";
export default function handler(req, res) {
  const res = await fetch(API_BASE);
  res.status(200).json({ name: res });
}
