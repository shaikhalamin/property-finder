import AgentList from "@/components/agent/AgentList";
import BaseContainer from "@/components/common/container/BaseContainer";
import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import { getAgents } from "@/data/api/agent";
import { Agent } from "@/data/model/agent";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";

type AgentsProps = {
  agents: Agent[];
};

const Index: NextPageWithLayout<AgentsProps> = ({ agents }) => {
  return (
    <main>
      <BaseContainer>
      <AgentList agents={agents} />
      </BaseContainer>
      <PropertyAddBanner />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [agents] = await Promise.all([getAgents()]);
  return { props: { agents: agents.data as Agent[] } };
};

export default Index;
