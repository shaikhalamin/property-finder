import React from "react";
import { Row, Col } from "react-bootstrap";

const PropertyAddress: React.FC<{ address: string }> = ({ address }) => {
  return (
    <Row className="py-4 border-bottom mt-2">
      <Col md="4">
        <h4 className="ft-16">Address</h4>
      </Col>
      <Col md="4">
        <Row className="mb-1 px-1 py-1">
          <Col md="12" className="text-start text-color-a3a ft-14">
            <div className="px-2">{address}</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PropertyAddress;
