import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <section className={`py-3`}>
        <Container>
          <Row>
            <Col md="12">
              <Container>
                <Row className={`mt-2 mb-2 py-2`}>
                  <Col md="3" className="mt-4">
                    <div className="">
                      <div className="py-3 px-3">
                        <div className="ft-20 mb-1 text-color-a3a fw-bold">
                          Templates
                        </div>
                        <div className="ft-16 mt-3 mb-1 text-color-b94">
                          Premade websites
                        </div>
                        <div className="ft-16 mb-1 text-color-b94">
                          Popup bundles
                        </div>
                        <div className="ft-16 mb-1 text-color-b94">
                          Website models
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="3" className="mt-4">
                    <div className="">
                      <div className="py-3 px-3">
                        <div className="ft-20 mb-1 text-color-a3a fw-bold">
                          Support
                        </div>
                        <div className="ft-16 mt-3 mb-1 text-color-b94">
                          Premade websites
                        </div>
                        <div className="ft-16 mb-1 text-color-b94">
                          Popup bundles
                        </div>
                        <div className="ft-16 mb-1 text-color-b94">
                          Website models
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="3" className="mt-4">
                    <div className="">
                      <div className="py-3 px-3">
                        <div className="ft-20 mb-1 text-color-a3a fw-bold">
                          Links
                        </div>
                        <div className="ft-14 mt-3 mb-1 text-color-b94">
                          Premade websites
                        </div>
                        <div className="ft-14 mb-1 text-color-b94">
                          Popup bundles
                        </div>
                        <div className="ft-14 mb-1 text-color-b94">
                          Website models
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="3" className="mt-4">
                    <div className="">
                      <div className="py-3 px-3">
                        <div className="ft-20 mb-1 text-color-a3a fw-bold">
                          Socials
                        </div>
                        <div className="ft-14 mt-3 mb-1 text-color-b94">
                          Premade websites
                        </div>
                        <div className="ft-14 mb-1 text-color-b94">
                          Popup bundles
                        </div>
                        <div className="ft-14 mb-1 text-color-b94">
                          Website models
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <hr />
        <Row>
          <Col>
            <p className="text-center text-color-b94 fs-14 fw-normal">
              Copyright © {new Date().getFullYear()} powered by find property,
              Inc. All rights reserved
            </p>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Footer;
