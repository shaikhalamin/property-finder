import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Property } from "@/data/model/property";
import FeatureWithIcon from "../common/property-item/FeatureWithIcon";
import { FaMapMarkerAlt } from "react-icons/fa";
import PurposeBadge from "../common/property-item/PurposeBadge";

type SinglePropertyProps = {
  property: Property;
};

const SingleProperty: React.FC<SinglePropertyProps> = ({ property }) => {
  return (
    <>
      <Row className="py-1 px-1 mt-3">
        <Col md="5" className="mt-1 mb-1">
          <Card className="border-0 px-1">
            <img
              src="http://localhost:8070/uploads/header/1663776664412time38111074725344479d3dc4cf347446f9.jpg"
              className="w-100"
            />
          </Card>
        </Col>
        <Col md="7" className="border-bottom">
          <Card className="border-0">
            <Row className="py-2 px-1">
              <Col className="mt-2 mb-3">
                <div className="mt-2 mb-1 text-color-a3a fw-bold">
                  <Row>
                    <Col className="text-start ft-20">{property.name}</Col>
                    <Col className="text-end">
                      <PurposeBadge purpose={property.purpose} />
                    </Col>
                  </Row>
                </div>
                <div className="mt-2 mb-1">
                  <span className="ft-16 text-color-09a px-1">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="ft-12 text-color-b94">{property.address}</span> 
                </div>
                <div className="ft-14 mt-2 mb-1 text-color-b94">
                  {property.descriptions}
                </div>
                <div className="mt-2">
                  <FeatureWithIcon
                    noOfRooms={property.noOfBedRoom}
                    noOfBath={property.noOfBathRoom}
                    propertySize={property.propertySize}
                  />
                </div>
                <div className="mt-2">
                  <Row className="">
                    <Col className="text-start fs-14 fw-bold">
                      ${property.price}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleProperty;
