import { getAgents } from "@/data/api/agent";
import { Agent } from "@/data/model/agent";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitleLink from "./SectionTitleLink";
import { API_URLS } from "@/data/utils/api.urls";

const Agents: React.FC = () => {
  // const imagePath = `http://localhost:8070/uploads/agent/1664303371650time9b93f315488c45d091ce4e5bff392139.jpg`;

  const [agents, setAgents] = useState([] as Agent[]);

  const fetchProperty = () => {
    getAgents().then((res) => {
      setAgents(res.data);
    });
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <>
      <section className="bg-white py-5 mt-5">
        <Container>
          <Row>
            <Col md="12">
              <Container>
                <SectionTitleLink
                  title={`Trusted Real Estate Agents`}
                  linkTitle={`JOIN OUR AGENTS`}
                  link={`#`}
                />

                <Row className="mt-1 mb-2">
                  {agents.length > 0 && agents.map((agent) => {

                    const imagePath = `${API_URLS.agent_img}${agent.agentImage.fileName}`

                    return (
                      <>
                        <Col md="3" className="mt-4" key={agent.id.toString()}>
                          <Card>
                            <Card.Body className="py-0 px-0">
                              <img
                                className={`w-100`}
                                src={`${imagePath}`}
                                alt="image source"
                              />
                            </Card.Body>
                          </Card>
                          <div className="border">
                            <div className="py-3 px-3">
                              <div className="ft-20 mb-1 text-color-a3a fw-bold">
                                {agent.user.firstName}
                              </div>
                              <div className="ft-14 mb-1">
                                <span className="text-color-b94">{agent.designation}</span>
                              </div>
                              <hr className="mt-2" />
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Agents;
