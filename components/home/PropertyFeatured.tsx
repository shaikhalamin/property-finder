import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import BaseContainer from "../common/container/BaseContainer";
import FeatureWithIcon from "../common/property-item/FeatureWithIcon";
import SectionTitleLink from "./SectionTitleLink";
import { getProperties } from "@/data/api/property";
import { PropertyList } from "@/data/model/property-list";
import Image from "next/image";

const PropertyFeatured = () => {
  const [properties, setProperties] = useState({} as PropertyList);

  const fetchProperty = () => {
    const PROPERTY_URL = `?page=1&perPage=6`;
    getProperties(PROPERTY_URL).then((res) => {
      setProperties(res.data);
    });
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <>
      <BaseContainer>
        <SectionTitleLink
          title={`Recent Real Estate`}
          linkTitle={`View more properties`}
          link={`#`}
        />
        <Row className="mt-1 mb-2">
          {Object.values(properties).length > 0 &&
            properties?.data.map((property) => {
              const imagePath = property.propertyImages.find(
                (image) => image.type == "header" && image.size == "md"
              );

              const imageLoader = () => {
                return imagePath;
              };

              return (
                <Col md="4" className={`mt-4`} key={property.id}>
                  <a
                    className="text-decoration-none"
                    href={`/properties/${property.slug}`}
                  >
                    <Card className="rounded-0">
                      <Card.Body className="py-0 px-0 position-relative">
                        <Image
                          src={`${imagePath ? imagePath.image_url : ""}`}
                          alt={property.name}
                          width={406}
                          height={275}
                          layout="responsive"
                        />
                      </Card.Body>
                    </Card>
                    <div className="border">
                      <div className="py-3 px-3">
                        <div className="mb-1 text-color-a3a">
                          <Row>
                            <Col
                              lg="10"
                              md="10"
                              sm="10"
                              xs="10"
                              className="text-start"
                            >
                             <span className="fw-bold">{property.name}</span> 
                            </Col>
                            <Col
                              lg="2"
                              md="2"
                              sm="2"
                              xs="2"
                              className="text-end"
                            >
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
                          {property.address}
                        </div>
                        <div className="fw-bold mt-2">
                          <Row>
                            <Col className="text-start fs-14 text-dark">
                              ${property.price}
                            </Col>
                          </Row>
                        </div>
                        <hr className="mt-2" />
                        <FeatureWithIcon
                          noOfRooms={6}
                          noOfBath={3}
                          propertySize={1600}
                        />
                      </div>
                    </div>
                  </a>
                </Col>
              );
            })}
        </Row>
      </BaseContainer>
    </>
  );
};

export default PropertyFeatured;
