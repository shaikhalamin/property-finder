import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import BaseContainer from "@/components/common/container/BaseContainer";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { GetServerSideProps } from "next";
import { API_URLS } from "@/data/utils/api.urls";
import { PropertyResponse } from "@/data/model/property";
import BedIcon from "@/components/common/icon/Bed";
import BathIcon from "@/components/common/icon/Bath";
import PropertySizeIcon from "@/components/common/icon/PropertySize";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

type PropertyProps = {
  property: PropertyResponse;
};

const Property: React.FC<PropertyProps> = ({ property: { success, data } }) => {
  return (
    <>
      {success && (
        <>
          <section>
            <Row>
              <Col
                className="py-0"
                style={{
                  backgroundImage:
                    "url(" +
                    `${API_URLS.header_img}1663871385724timebcfb37d0a1254da78dd2159801dfdfd8.jpg` +
                    ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "450px",
                  height: "100%",
                }}
              />
            </Row>
          </section>
          <BaseContainer>
            <Container>
              <Row className="">
                <Col md="9" className="px-3">
                  <Row>
                    <Col md="3" xs="12" className="py-1 mt-1">
                      <div className="border-end">
                        <h2 className="ft-24 fw-bold px-1">
                          ${data?.price}
                          {data?.purpose === "RENT" && (
                            <span className="ft-16 text-color-b94">/mo</span>
                          )}
                        </h2>
                      </div>
                    </Col>
                    <Col md="3" xs="6" className="py-1 mt-1">
                      <div className="border-end">
                        <span className="px-2 text-color-09a">
                          <BedIcon />
                        </span>
                        <span className="ft-14 text-colo-a3a">
                          {data?.noOfBedRoom} Bedrooms
                        </span>
                      </div>
                    </Col>
                    <Col md="3" xs="6" className="py-1 mt-1">
                      <div className="border-end">
                        <span className="px-2 text-color-09a">
                          <BathIcon />
                        </span>
                        <span className="ft-14 text-colo-a3a">
                          {data?.noOfBathRoom} Bathrooms
                        </span>
                      </div>
                    </Col>
                    <Col md="3" xs="6" className="py-1 mt-1">
                      <span className="px-2 text-color-09a">
                        <PropertySizeIcon />
                      </span>
                      <span className="ft-14 text-colo-a3a">
                        {data?.propertySize} sq ft
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col md="3" className="px-3">
                  <Button className="btn-warning w-100 py-2 mt-1 ft-14 fw-bold text-uppercase rounded-0">
                    Request Showing
                  </Button>
                </Col>
              </Row>
            </Container>
          </BaseContainer>
          <hr className="border-bottom" />
          <BaseContainer>
            <Container>
              <Row className="py-3">
                <Col md="9" className="px-5">
                  <Row className="py-3 border-bottom">
                    <Col md="6" xs="12" className="text-start">
                      <div className="ft-24 fw-bold text-dark ">
                        {data?.name}
                      </div>
                      <div>
                        <span className="ft-16 text-color-09a px-1">
                          <FaMapMarkerAlt />
                        </span>
                        <span className="ft-18 text-color-b94">
                          {data?.address}
                        </span>
                      </div>
                    </Col>
                    <Col md="6" xs="12" className="text-end">
                      <div className="mb-3">
                        <span
                          className={`badge bg-dark fs-16 fs-normal rounded-0 text-white`}
                        >
                          {data?.purpose}
                        </span>
                      </div>
                      <div>
                        <h3 className="ft-14 text-color-b94 text-end">
                          <span>Property ID: </span> {data?.id}
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="3" className="px-3">
                  <Row className="py-3">
                    <Col className="agent-bg">
                      <Card className="border-0 agent-bg">
                        <Row className="py-2 px-3 mt-4">
                          <Col md="4">
                            <Card className="border-0 agent-bg">
                              <img
                                src={`${API_URLS.agent_img}${data?.agent.agentImage.fileName}`}
                                className="rounded-circle w-100"
                                alt="agent"
                              />
                            </Card>
                          </Col>
                          <Col md="8">
                            <div className="ft-18 text-white">
                              {data?.agent.user.firstName}
                              {data?.agent.user.lastName}
                            </div>
                            <div className="ft-14 text-color-bca mt-1">
                              {data?.agent.designation}
                            </div>
                          </Col>
                        </Row>
                        <Row className="py-1 px-3 mt-3">
                          <Col md="12">
                            <div>
                              <span className="ft-14 text-color-bca">
                                Phone:
                              </span>
                              <span className="ft-18 text-warning fw-bold px-2">
                                {data?.agent.user.phone}
                              </span>
                            </div>
                            <div className="mt-1 mb-1">
                              <span className="ft-14 text-color-bca">
                                Email:
                              </span>
                              <span className="ft-14 text-white px-2">
                                {data?.agent.user.email}
                              </span>
                            </div>
                          </Col>
                        </Row>
                        <Row className="py-1 px-3 mt-2 mb-3">
                          <Col md="12">
                            <div>
                              <span className="ft-16 fw-normal text-white">
                                Connect with us:
                              </span>
                            </div>
                            <div className="mt-1 mb-3">
                              <ul className="nav justify-content-start">
                                <li className="px-2">
                                  <span className="text-color-bca ft-14">
                                    <FaFacebookF />
                                  </span>
                                </li>
                                <li className="px-2">
                                  <span className="text-color-bca ft-14">
                                    <FaInstagram />
                                  </span>
                                </li>
                                <li className="px-2">
                                  <span className="text-color-bca ft-14">
                                    <FaTwitter />
                                  </span>
                                </li>
                                <li className="px-2">
                                  <span className="text-color-bca ft-14">
                                    <FaLinkedinIn />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </BaseContainer>
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;
  const property_url = `${API_URLS.properties}/find-by/${slug}`;
  const res = await fetch(property_url);
  const property = (await res.json()) as PropertyResponse;
  console.log(property);
  return { props: { property } };
};

export default Property;
