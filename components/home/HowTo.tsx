import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitleLink from "./SectionTitleLink";
import styles from "./home.module.css";
import AdviseIcon from "../common/icon/Advise";
import QuickSearchIcon from "../common/icon/QuickSearch";
import PaperWorkIcon from "../common/icon/PaperWork";
import CommunicationIcon from "../common/icon/Communication";

const HowTo = () => {
  return (
    <div>
      <section className="bg-white py-5 mt-1 mb-4">
        <Container>
          <Row>
            <Col md="12">
              <Container>
                <SectionTitleLink
                  title={`How can we help you find real estate?`}
                  titleCls={`text-center`}
                />

                <Row className={`mt-5 mb-2`}>
                  <Col
                    key={``}
                    md="3"
                    sm="6"
                    className={`${styles.pTypeBody} `}
                  >
                    <a href="#" className="text-decoration-none">
                      <Row>
                        <Col md="12" className="py-3 px-0">
                          <Card className="border-0">
                            <Card.Body className="d-flex justify-content-center">
                              <AdviseIcon />
                            </Card.Body>
                          </Card>
                          <div
                            className={`text-center ${styles.pTypeText}`}
                            key={``}
                          >
                            Expert real estate advice
                          </div>
                          <div
                            className={`text-center ${styles.pCount} px-3 py-1`}
                            key={``}
                          >
                            Our real estate agents will help you find the
                            property that suits your budget and purpose.
                          </div>
                        </Col>
                      </Row>
                    </a>
                  </Col>

                  <Col
                    key={``}
                    md="3"
                    sm="6"
                    className={`${styles.pTypeBody} `}
                  >
                    <a href="#" className="text-decoration-none">
                      <Row>
                        <Col className="py-3 px-0 ">
                          <Card className="border-0">
                            <Card.Body className="d-flex justify-content-center">
                              <QuickSearchIcon />
                            </Card.Body>
                          </Card>
                          <div
                            className={`text-center ${styles.pTypeText}`}
                            key={``}
                          >
                            Quick sitewide search
                          </div>
                          <div
                            className={`text-center ${styles.pCount} px-3 py-1`}
                            key={``}
                          >
                            Use a quick search to locate the most suitable real
                            estate option among all property ads.
                          </div>
                        </Col>
                      </Row>
                    </a>
                  </Col>
                  <Col
                    key={``}
                    md="3"
                    sm="6"
                    className={`${styles.pTypeBody} `}
                  >
                    <a href="#" className="text-decoration-none">
                      <Row>
                        <Col className="py-3 px-0 ">
                          <Card className="border-0">
                            <Card.Body className="d-flex justify-content-center">
                              <PaperWorkIcon />
                            </Card.Body>
                          </Card>
                          <div
                            className={`text-center ${styles.pTypeText}`}
                            key={``}
                          >
                            Help with paperwork
                          </div>
                          <div
                            className={`text-center ${styles.pCount} px-3 py-1`}
                            key={``}
                          >
                            Our experts will prepare the needed contracts. You
                            just sign them to seal the deal.
                          </div>
                        </Col>
                      </Row>
                    </a>
                  </Col>
                  <Col
                    key={``}
                    md="3"
                    sm="6"
                    className={`${styles.pTypeBody} `}
                  >
                    <a href="#" className="text-decoration-none">
                      <Row>
                        <Col className="py-3 px-0 ">
                          <Card className="border-0">
                            <Card.Body className="d-flex justify-content-center">
                              <CommunicationIcon />
                            </Card.Body>
                          </Card>
                          <div
                            className={`text-center ${styles.pTypeText}`}
                            key={``}
                          >
                            Steady communication
                          </div>
                          <div
                            className={`text-center ${styles.pCount} px-3 py-1`}
                            key={``}
                          >
                            Let’s get connected. Reach out to our real estate
                            agents anytime you have questions.
                          </div>
                        </Col>
                      </Row>
                    </a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HowTo;
