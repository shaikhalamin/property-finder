import { BioAndDescriptionFields } from "@/components/admin/user/bio-description.helper";
import {$axios} from "./axios-base"
import { API_URLS, API_PROXY_BASE } from "../utils/api.urls";

const AGENT_URL = API_URLS.agents;

export const getAgents = () => {
  return $axios.get(`${AGENT_URL}`);
};

export const getAgentDetails = (id: number) => {
  return $axios.get(`${AGENT_URL}/${id}`);
};

export const createAgent = (agentPayload: BioAndDescriptionFields) => {
  return $axios.post(`${API_PROXY_BASE}/agent`, agentPayload);
};

export const updateAgent = (
  id: number,
  agentPayload: BioAndDescriptionFields
) => {
  return $axios.patch(`${API_PROXY_BASE}/agent/${id}`, agentPayload);
};
