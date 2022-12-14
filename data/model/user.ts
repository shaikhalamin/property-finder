import { Agent } from "./agent";

export type User = {
    id: number,
    created_at: string;
    updated_at: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    isActive: boolean,
    isVerified: boolean,
    role: string,
    agent?: Agent
  }