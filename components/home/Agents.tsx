import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitleLink from "./SectionTitleLink";

const Agents: React.FC = () => {
  const imagePath = `http://localhost:8070/uploads/agent/1664303371650time9b93f315488c45d091ce4e5bff392139.jpg`;

  return (
    <>
      <section className="bg-white py-3 mt-1">
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
                  {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((no) => {
                    return (
                      <>
                        <Col md="3" className="mt-4" key={no}>
                          <Card>
                            <Card.Body className="py-0 px-0">
                              <img
                                height={`319`}
                                className={`w-100`}
                                src={`${imagePath}`}
                                alt="image source"
                              />
                            </Card.Body>
                          </Card>
                          <div className="border">
                            <div className="py-3 px-3">
                              <div className="ft-20 mb-1 text-color-a3a fw-bold">
                                Susan O’neill
                              </div>
                              <div className="ft-14 mb-1">
                                <span className="text-color-b94">Manager</span>
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
