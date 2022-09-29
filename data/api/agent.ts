import axios from "axios";
import _ from "lodash";
import { API_URLS } from "../utils/api.urls";

const AGENT_URL = API_URLS.agents;

export const getAgents = () => {
  return axios.get(AGENT_URL);
};