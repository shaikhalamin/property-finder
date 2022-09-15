import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "@/components/header/property-header.module.css";

const PropertyHeader = () => {
  return (
    <>
      <section
        className={`py-5 ${styles.headerBgColor} ${styles.headerBgImage} ${styles.headerHeight}`}
      >
        <header>
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col>
                    <h1 className="text-white text-center mb-4">
                      Find the Best Property for Rent or Sale
                    </h1>
                    <Container className="py-1 mt-3">
                      <Row>
                        <Col className="col-md-10 offset-md-1">
                          <Container className="bg-white">
                            <Form className="">
                              <Row className="mb-0 border py-2">
                                <Col md="4" sm="6">
                                  <Form.Group controlId="purposeId">
                                    <Form.Label>Purpose</Form.Label>
                                    <Form.Select defaultValue="Choose..." className="rounded-0">
                                      <option>Choose...</option>
                                      <option>...</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                                <Col md="4" sm="6">
                                  <Form.Group controlId="locationId">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Select defaultValue="Choose..." className="rounded-0">
                                      <option>Choose...</option>
                                      <option>...</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                                <Col md="4" sm="6">
                                  <Form.Group controlId="propertyTypeId">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Select defaultValue="Choose..." className="rounded-0">
                                      <option>Choose...</option>
                                      <option>...</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row className="mb-1 border py-2">
                                <Col md="4" sm="6">
                                  <Form.Group controlId="bedroomId">
                                    <Form.Label>Bed Rooms</Form.Label>
                                    <Form.Select defaultValue="Choose..." className="rounded-0">
                                      <option>Choose...</option>
                                      <option>...</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                                <Col md="4" sm="6">
                                  <Form.Group controlId="priceRangeId">
                                    <Form.Label>Price Range</Form.Label>
                                    <Form.Range />
                                  </Form.Group>
                                </Col>
                                <Col md="4" sm="6">
                                  <Form.Group controlId="formGridState">
                                    <Button
                                      variant="warning"
                                      type="submit"
                                      className="mt-3 btn-block w-100 rounded-0"
                                    >
                                      Filter Results
                                    </Button>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Form>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </header>
      </section>
    </>
  );
};

export default PropertyHeader;
