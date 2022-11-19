import { Property } from "@/data/model/property";
import React from "react";
import { Row, Col } from "react-bootstrap";

type PropertySpecificationsProps = {
  data?: Property;
};
const PropertySpecifications: React.FC<PropertySpecificationsProps> = ({
  data,
}) => {
  return (
    <>
      <Row className="py-4">
        <Col md="4">
          <h4 className="ft-16">Specification</h4>
        </Col>
        <Col md="4">
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Bedrooms:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.noOfBedRoom}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Property size:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.propertySize}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Total floors:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.totalFloors}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Heating:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.heating}
            </Col>
          </Row>
        </Col>
        <Col md="4">
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Bathrooms:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.noOfBathRoom}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Year Built:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.yearBuild}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Accommodation:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.accommodations}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="py-0">
        <Col md="4"></Col>
        <Col md="8" className="border-bottom">
        </Col>
      </Row>
      <Row className="py-4 border-bottom">
        <Col md="4">
          <h4></h4>
        </Col>
        <Col md="4">
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Ceiling height:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.ceilingHeight}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              From center:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.distanceFromCenter}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Area size:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.areaSize}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Garages size:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.garageSize}
            </Col>
          </Row>
        </Col>
        <Col md="4">
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Parking:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.parking}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Publication date:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.publishedDate}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Garages:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.garage}
            </Col>
          </Row>
          <Row className="mb-1 px-1 py-1">
            <Col md="7" className="text-start text-color-b94 ft-13">
              Additional space:
            </Col>
            <Col md="5" className="text-start text-color-a3a ft-14">
              {data?.additionalSpec}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PropertySpecifications;
