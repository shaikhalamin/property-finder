import { useRouter } from "next/router";
import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import BaseContainer from "@/components/common/container/BaseContainer";

import SectionTitleOrderBy from "@/components/property-type/SectionTitleOrderBy";
import TypeFilterSection from "@/components/property-type/TypeFilterSection";
import FeatureWithIcon from "@/components/common/property-item/FeatureWithIcon";

const PropertyType = () => {
  const router = useRouter();
  const { property_type } = router.query;

  console.log(property_type);

  return (
    <BaseContainer>
      <Row className="py-2">
        <Col md="4">
          <TypeFilterSection />
        </Col>
        <Col md="8">
          <SectionTitleOrderBy title="Search Results" orderTitle="Sorted by" />
          <Row className="py-0 px-1">
            <Col md="5" className="mt-1 mb-1">
              <Card className="border-0 px-1">
                <img
                  src="http://localhost:8070/uploads/header/1663776664412time38111074725344479d3dc4cf347446f9.jpg"
                  className="w-100"
                />
              </Card>
            </Col>
            <Col md="7" className="border-bottom border-top border-right">
              <Card className="border-0">
                <Row className="py-3 px-1">
                  <Col className="mt-2 mb-3">
                    <div className="ft-12 mt-2 mb-1 text-color-b94">
                      10700 Wilshire Blvd, Los Angeles, CA 90024
                    </div>
                    <div className="mt-2 mb-1 text-color-a3a fw-bold">
                      <Row>
                        <Col className="text-start ft-20">Mesa Verde Three</Col>
                      </Row>
                    </div>
                    <div className="ft-14 mt-1 mb-1 text-color-b94">
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat...
                    </div>
                    <div className="mt-2">
                    <FeatureWithIcon
                      noOfRooms={6}
                      noOfBath={3}
                      propertySize={1600}
                    />
                    </div>
                    
                    <div className="mt-2">
                      <Row className="">
                        <Col className="text-start fs-14 fw-bold">$950 000.00</Col>
                        <Col className="text-end">
                          <span className="badge bg-danger fs-12 fs-normal rounded-0">
                            RENT
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </BaseContainer>
  );
};

export default PropertyType;
