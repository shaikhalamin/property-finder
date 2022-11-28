import AgentAddress from "@/components/agent/AgentAddress";
import BaseContainer from "@/components/common/container/BaseContainer";
import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import PropertyHorizontalList from "@/components/property/PropertyHorizontalList";
import { getAgentDetails } from "@/data/api/agent";
import { Agent } from "@/data/model/agent";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { NextPageWithLayout } from "../_app";

type AgentProps = {
  agent: Agent;
};

const AgentInfo: NextPageWithLayout<AgentProps> = ({ agent }) => {
  const [rating, setRating] = useState(4.5);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <main>
      <BaseContainer>
        <Row className="py-5 border-bottom">
          <Col md="9">
            <Row className="">
              <Col md="4">
                <Card className="rounded-0">
                  <Card.Body className="px-0 py-0">
                    <Image
                      src={
                        agent.agentImage?.image_url
                          ? agent.agentImage?.image_url
                          : ""
                      }
                      alt={agent.user.firstName}
                      width={250}
                      height={280}
                      layout="responsive"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col md="8">
                <Row className="px-2">
                  <Col md="12">
                    <div className="mb-2">
                      <Rating
                        initialValue={rating}
                        size={20}
                        onClick={handleRating}
                      />
                    </div>
                    <h1 className="ft-24 fw-normal text-color-a3a">
                      {agent.user.firstName} {agent.user.lastName}
                    </h1>
                    <h2 className="ft-14 fw-normal text-color-b94">
                      {agent.designation}
                    </h2>
                    <h3 className="ft-14 mt-4 fw-normal text-color-b94">
                      {agent.description}
                    </h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <AgentAddress agent={agent} />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md="12">
            <h4 className="ft-18 mb-2">
              Real Estate By {agent.user.firstName} {agent.user.lastName}
            </h4>
            <PropertyHorizontalList properties={agent.properties} />
          </Col>
        </Row>
      </BaseContainer>
      <PropertyAddBanner />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const agentResult = await getAgentDetails(Number(id));
  return { props: { agent: agentResult.data as Agent } };
};

export default AgentInfo;
