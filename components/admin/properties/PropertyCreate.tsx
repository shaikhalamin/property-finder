import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
  propertyType: yup.number().required(),
}).required();



// "name":"Property with image saving issue",
//     "purpose":"RENT",
//     "descriptions":"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas.",
//     "address":"6335 Annie Oakley Drive, Las Vegas, NV 89120",
//     "price":3500.00,
//     "noOfBedRoom":3,
//     "noOfBathRoom":1,
//     "propertySize":660,
//     "yearBuild":2001,
//     "totalFloors":5,
//     "accommodations":"WITHOUT_FURNITURE",
//     "ceilingHeight":2.4,
//     "distanceFromCenter":20,
//     "parking":"FREE_ZONE",
//     "areaSize":660,
//     "garage":0,
//     "additionalSpec":"STORAGE_SPACE",
//     "utilityCost":100.00,
//     "cableTvCost":100.00,
//     "electricityCost":"AFTER_SPENDING",
//     "lat":37.788099,
//     "long":-122.440293,
//     "propertyType":1,
//     "city":1,
//     "features":[1,2,3],
//     "propertyImages":[6],


const PropertyCreate = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <Container fluid>
      <Row>
        <Col className="py-4" md="8">
          <h4 className="mt-2 mb-4 text-justify fw-bold">
            Property Create Form
          </h4>
          <Card>
            <Card.Body>
              <Form className="py-3" onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                  <Col md="4">
                    <Form.Group controlId="propertyPropertyType">
                      <Form.Label>Property Type</Form.Label>
                      {/* <Form.Select>
                        <option>Select</option>
                        <option value={`SALE`}>SALE</option>
                        <option value={`RENT`}>RENT</option>
                      </Form.Select> */}


                      <Form.Select
                          {...register('propertyType')}
                          className={errors?.propertyType ? 'is-invalid' : ''}
                        >
                          {/* {expectedRateOfReturn.map((e, index) => {
                            return (
                              <option key={index} value={e.key}>
                                {e.value}
                              </option>
                            )
                          })} */}
                        </Form.Select>
                        {errors?.expectedRate && (
                          <p className="text-danger"></p>
                        )}


                    </Form.Group>
                  </Col>

                  <Col md="4">
                    <Form.Group controlId="propertyCity">
                      <Form.Label>City</Form.Label>
                      <Form.Select>
                        <option>Select</option>
                        <option value={`SALE`}>SALE</option>
                        <option value={`RENT`}>RENT</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md="4">
                    <Form.Group controlId="propertyName">
                      <Form.Label>Property Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="6">
                    <Form.Group controlId="propertyPurpose">
                      <Form.Label>Purpose</Form.Label>
                      <Form.Select>
                        <option>Select</option>
                        <option value={`SALE`}>SALE</option>
                        <option value={`RENT`}>RENT</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="propertyAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="1234 Main St" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="propertyDescription">
                  <Form.Label>Descriptions</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Row className="mb-3">
                  <Col md="3">
                    <Form.Group className="mb-3" controlId="propertyPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md="3">
                    <Form.Group controlId="propertyBedRooms">
                      <Form.Label>No Of Bed Room</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md="3">
                    <Form.Group controlId="propertyBathRooms">
                      <Form.Label>No Of Bath Room</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md="3">
                    <Form.Group controlId="propertySize">
                      <Form.Label>Property Size</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="4">
                    <Form.Group controlId="propertyYearBuild">
                      <Form.Label>Year Build</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="4">
                    <Form.Group controlId="propertyTotalFloors">
                      <Form.Label>Total Floors</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="4">
                    <Form.Group controlId="propertyCeilingHeight">
                      <Form.Label>Ceiling Height</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <Form.Group controlId="propertyDistanceFromCenter">
                      <Form.Label>Distance From Center</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="3">
                    <Form.Group controlId="propertyParking">
                      <Form.Label>Parking</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="3">
                    <Form.Group controlId="propertyAreaSize">
                      <Form.Label>Area Size</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="3">
                    <div className="mt-4">
                      <Form.Group id="propertyGarage">
                        <Form.Check type="checkbox" label="Garage" />
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <Form.Group controlId="propertyAccommodations">
                      <Form.Label>Accommodations</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md="3">
                    <Form.Group controlId="propertyAdditionalSpec">
                      <Form.Label>Additional Spec</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="3">
                    <Form.Group controlId="propertyUtilityCost">
                      <Form.Label>Utility Cost</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>

                  <Col md="3">
                    <Form.Group controlId="propertyCableTvCost">
                      <Form.Label>Cable Tv Cost</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="6">
                    <Form.Group controlId="propertyLat">
                      <Form.Label>Lat</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group controlId="propertyLong">
                      <Form.Label>Long</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyCreate;
