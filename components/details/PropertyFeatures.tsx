import { Property } from "@/data/model/property";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { MdOutlineCheckCircle } from "react-icons/md";

type PropertyFeaturesProps = {
  data?: Property;
};

const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({ data }) => {
  return (
    <Row className="py-4">
      <Col md="4">
        <h4 className="ft-16">Features</h4>
      </Col>
      <Col md="8">
        <Row className="mb-1 px-1 py-1">
          {data?.propertyFeatures.map((featureItem) => (
            <Col md="4" key={featureItem.id} className="mb-1">
              <Row className="mb-1 px-1">
                <Col md="2" className="text-start text-color-a3a ft-20 mt-1">
                  <MdOutlineCheckCircle />
                </Col>
                <Col md="10" className="text-start text-color-a3a ft-14 mt-2">
                  <span>{featureItem.feature.name}</span> 
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default PropertyFeatures;
