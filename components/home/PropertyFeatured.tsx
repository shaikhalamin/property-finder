import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./home.module.css";

const PropertyFeatured = () => {
  return (
    <>
      <section className="bg-white py-5 mt-5">
        <Container>
          <Row>
            <Col md="12">
              <Container>
                <Row>
                  <Col md="6">
                    <h2 className={`mb-2 text-start ft-30`}>
                      Recent Real Estate
                    </h2>
                  </Col>
                  <Col md="6">
                    <h2 className={`mb-2 text-end`}>
                      <a
                        href="#"
                        className={`text-decoration-none text-dark ft-14 text-uppercase font-weight-bold ${styles.featureViewMore}`}
                      >
                        View more properties
                      </a>
                    </h2>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md="4">
                    <Card>
                      <Card.Body className="py-0 px-0">
                        <img
                          height={`272`}
                          className={`w-100`}
                          src="http://localhost:8070/uploads/feature/1663776647792timed51195e8e519490abee8d3fec179d6e8.jpg"
                          alt="image source"
                        />
                      </Card.Body>
                    </Card>
                    <div className="border">
                      <div className="py-3 px-3">
                        <div className="ft-20 mb-1 text-color-a3a fw-bold">
                          Wilshire Victoria
                        </div>
                        <div className="ft-14 mb-1">
                          10700 Wilshire Blvd, Los Angeles, CA 90024
                        </div>
                        <div className="ft-16 fw-bold">$950 000.00</div>
                        <hr className="mt-2" />
                        <Row>
                          <Col md="4">
                            <span>x</span>
                            <span className="ft-14 text-color-b94">6 Rooms</span>
                          </Col>
                          <Col md="4">
                            <span>x</span>
                            <span className="ft-14 text-color-b94">3 Baths</span>
                          </Col>
                          <Col md="4">
                            <span>x</span>
                            <span className="ft-14 text-color-b94">1600 sq</span>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PropertyFeatured;
