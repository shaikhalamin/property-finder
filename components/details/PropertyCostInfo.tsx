import { Property } from "@/data/model/property";
import React from "react";
import { Row, Col } from "react-bootstrap";

type PropertyCostInfoProps = {
  data?: Property;
};

const PropertyCostInfo: React.FC<PropertyCostInfoProps> = ({ data }) => {
  return (
    <Row className="py-4 border-bottom">
      <Col md="4">
        <h4 className="ft-16">Costs</h4>
      </Col>
      <Col md="4">
        <Row className="mb-1 px-1 py-1">
          <Col md="7" className="text-start text-color-b94 ft-13">
            Utilities:
          </Col>
          <Col md="5" className="text-start text-color-a3a ft-14">
            {data?.utilityCost}
          </Col>
        </Row>
        <Row className="mb-1 px-1 py-1">
          <Col md="7" className="text-start text-color-b94 ft-13">
            Electricity:
          </Col>
          <Col md="5" className="text-start text-color-a3a ft-14">
            {data?.electricityCost}
          </Col>
        </Row>
      </Col>
      <Col md="4">
        <Row className="mb-1 px-1 py-1">
          <Col md="7" className="text-start text-color-b94 ft-13">
            Cable TV:
          </Col>
          <Col md="5" className="text-start text-color-a3a ft-14">
            {data?.cableTvCost}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PropertyCostInfo;
