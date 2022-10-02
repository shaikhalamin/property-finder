import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getPropertyTypes } from "@/data/api/property-types";
import { API_URLS } from "@/data/utils/api.urls";
import styles from "./home.module.css";

type PropertyType = {
  id: number;
  name: string;
  alias?: string;
  propertyCount: number;
};

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState({} as PropertyType[]);

  const fetchTypes = () => {
    getPropertyTypes().then((res) => {
      setPropertyTypes(res.data);
    });
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <>
      <section className="bg-white py-3 mt-4">
        <Container>
          <h2 className={`${styles.ft30} mb-2 text-justify`}>
            Find Your Property
          </h2>
          <Row>
            <Col className="md-10 offset-md-1">
              <Container>
                <Row className="pl-2 pr-2 mt-4">
                  {propertyTypes.length > 0 &&
                    propertyTypes.map((propertyType) => (
                      <>
                        <Col key={propertyType.id.toString()} md="2" sm="6">
                          <Card className={`${styles.pTypeBody} border-0`}>
                            <Card.Body>
                              <a href={`/property-type/${propertyType.alias}`} className="text-decoration-none">
                                <Row>
                                  <Col className="py-0 px-0 ">
                                    <Card className="border-0">
                                      <Card.Body className="d-flex justify-content-center">
                                        <img
                                          src={`${
                                            API_URLS.static_img
                                          }/property-types/icon_${propertyType.name.toLocaleLowerCase()}.svg`}
                                          width="60"
                                          height="60"
                                          alt={propertyType.name}
                                        />
                                      </Card.Body>
                                    </Card>
                                    <div
                                      className={`text-center ${styles.pTypeText}`}
                                      key={`${propertyType.id.toString()}-${Math.random().toString()}`}
                                    >
                                      {propertyType.name}
                                    </div>
                                    <div
                                      className={`text-center ${styles.pCount}`}
                                      key={`${propertyType.id.toString()}-${Math.random().toString()}`}
                                    >
                                      ({propertyType.propertyCount})
                                    </div>
                                  </Col>
                                </Row>
                              </a>
                            </Card.Body>
                          </Card>
                        </Col>
                      </>
                    ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PropertyTypes;
