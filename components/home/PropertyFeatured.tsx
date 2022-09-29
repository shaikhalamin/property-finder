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
                          <Col md="4" className="mt-4" key={property.id}>
                            <Card>
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
                                <div className="ft-20 mb-1 text-color-a3a fw-bold">
                                  Wilshire Victoria
                                </div>
                                <div className="ft-14 mb-1 text-color-b94">
                                  10700 Wilshire Blvd, Los Angeles, CA 90024
                                </div>
                                <div className="ft-16 fw-bold">$950 000.00</div>
                                <hr className="mt-2" />
                                <Row>
                                  <Col md="4">
                                    <span className={`${styles.propertyIcon}`}>
                                      <BedIcon />
                                    </span>
                                    <span className="ft-14 text-color-b94 mt-2">
                                      6 Rooms
                                    </span>
                                  </Col>
                                  <Col md="4">
                                    <span className={`${styles.propertyIcon}`}>
                                      <BathIcon />
                                    </span>
                                    <span className="ft-14 text-color-b94 mt-2">
                                      3 Baths
                                    </span>
                                  </Col>
                                  <Col md="4">
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
