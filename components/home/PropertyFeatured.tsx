import { getProperties } from "@/data/api/property";
import { PropertyList } from "@/data/model/property-list";
import { API_URLS } from "@/data/utils/api.urls";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BathIcon from "../common/icon/Bath";
import BedIcon from "../common/icon/Bed";
import PropertySizeIcon from "../common/icon/PropertySize";
import styles from "./home.module.css";
import SectionTitleLink from "./SectionTitleLink";

const PropertyFeatured = () => {
  const [properties, setProperties] = useState({} as PropertyList);

  const fetchProperty = () => {
    getProperties().then((res) => {
      setProperties(res.data);
    });
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <>
      <section className="bg-white py-3 mt-1">
        <Container>
          <Row>
            <Col md="12">
              <Container>
                <SectionTitleLink
                  title={`Recent Real Estate`}
                  linkTitle={`View more properties`}
                  link={`#`}
                />
                <Row className="mt-1 mb-2">
                  {Object.values(properties).length > 0 &&
                    properties?.data.map((property, index) => {
                      const defaultPath =
                        "1663871385724timebcfb37d0a1254da78dd2159801dfdfd8.jpg";
                      let featureImage = null;
                      if (property.propertyImages.length > 0) {
                        featureImage = property.propertyImages.find(
                          (image) =>
                            image.type == "header" && image.size == "md"
                        );
                      }
                      const imagePath = featureImage
                        ? `${API_URLS.header_img}${featureImage.fileName}`
                        : `${API_URLS.header_img}${defaultPath}`;
                      return (
                        <>
                          <Col md="4" className={`mt-4`} key={property.id}>
                            <Card className="rounded-0">
                              <Card.Body className="py-0 px-0">
                                <img
                                  height={`272`}
                                  className={`w-100`}
                                  src={`${imagePath}`}
                                  alt="image source"
                                />
                              </Card.Body>
                            </Card>
                            <div className="border">
                              <div className="py-3 px-3">
                                <div className="mb-1 text-color-a3a fw-bold">
                                  <Row>
                                    <Col className="text-start ft-20">
                                      {property.name}
                                    </Col>
                                    <Col className="text-end">
                                      {property.purpose.toLocaleUpperCase() ===
                                      "RENT" ? (
                                        <span className="badge bg-danger fs-12 fs-normal rounded-0">
                                          {property.purpose.toLocaleUpperCase()}
                                        </span>
                                      ) : (
                                        <span className="badge bg-warning fs-12 fs-normal rounded-0 text-dark">
                                          {property.purpose.toLocaleUpperCase()}
                                        </span>
                                      )}
                                    </Col>
                                  </Row>
                                </div>
                                <div className="ft-14 mb-1 text-color-b94">
                                  10700 Wilshire Blvd, Los Angeles, CA 90024
                                </div>
                                <div className="fw-bold mt-2">
                                  <Row>
                                    <Col className="text-start fs-14">
                                      $950 000.00
                                    </Col>
                                  </Row>
                                </div>
                                <hr className="mt-2" />
                                <Row>
                                  <Col>
                                    <span className={`${styles.propertyIcon}`}>
                                      <BedIcon />
                                    </span>
                                    <span className="ft-14 text-color-b94 mt-2">
                                      6 Rooms
                                    </span>
                                  </Col>
                                  <Col>
                                    <span className={`${styles.propertyIcon}`}>
                                      <BathIcon />
                                    </span>
                                    <span className="ft-14 text-color-b94 mt-2">
                                      3 Baths
                                    </span>
                                  </Col>
                                  <Col>
                                    <span className={`${styles.propertyIcon}`}>
                                      <PropertySizeIcon />
                                    </span>
                                    <span className="ft-14 text-color-b94 mt-2">
                                      1600 sq
                                    </span>
                                  </Col>
                                </Row>
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

export default PropertyFeatured;
