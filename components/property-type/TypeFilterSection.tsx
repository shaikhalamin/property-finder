import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import styles from "./property-type.module.css";

const TypeFilterSection = () => {
  return (
    <>
        <Row className={`${styles.bgColor}`}>
            <Col className="border">
              <Card className={`${styles.bgColor} py-3 px-3 border-0`}>
                <h3 className="mt-3 mb-2 text-white">Find Property</h3>
                <Form className="">
                  <Row className="mb-0 py-2">
                    <Col>
                      <Form.Group controlId="purposeId">
                        <Form.Label className="text-color-bca">
                          Purpose
                        </Form.Label>
                        <Form.Select
                          defaultValue="Choose..."
                          className="rounded-0"
                        >
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-0 py-2">
                    <Col>
                      <Form.Group controlId="locationId">
                        <Form.Label className="text-color-bca">
                          Location
                        </Form.Label>
                        <Form.Select
                          defaultValue="Choose..."
                          className="rounded-0"
                        >
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-0 py-2">
                    <Col>
                      <Form.Group controlId="propertyTypeId">
                        <Form.Label className="text-color-bca">
                          Property Type
                        </Form.Label>
                        <Form.Select
                          defaultValue="Choose..."
                          className="rounded-0"
                        >
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-4 py-2">
                    <Col>
                      <Form.Group controlId="typeSearchId">
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
              </Card>
            </Col>
          </Row>
    </>
  )
}

export default TypeFilterSection