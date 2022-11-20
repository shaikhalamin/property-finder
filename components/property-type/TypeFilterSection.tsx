import { City } from "@/data/model/city";
import { Feature } from "@/data/model/feature";
import { PropertyType } from "@/data/model/property-type";
import React, { SyntheticEvent } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from "./property-type.module.css";

type TypeFilterProps = {
  propertyTypes: PropertyType[];
  cities: City[];
  features: Feature[];
  propertyType: string;
  onChange: (key: string, value: string) => void;
};

const PROPERTY_PURPOSES = [
  {
    id: "SALE",
    name: "Sale",
  },
  {
    id: "RENT",
    name: "Rent",
  },
];

const TypeFilterSection: React.FC<TypeFilterProps> = ({
  onChange,
  propertyTypes,
  propertyType,
  cities,
  features,
}) => {
  const handleFilter = (e: SyntheticEvent, key: string) => {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    value.length > 0 && onChange(key, value);
  };

  return (
    <>
      <Row className={`${styles.bgColor}`}>
        <Col className="border">
          <Card className={`${styles.bgColor} py-3 px-3 border-0`}>
            <h3 className="mt-3 mb-2 text-white">Find Property</h3>
            <Form className="">
              <Row className="mb-0 py-2">
                <Col>
                  <Form.Group controlId="purposeId">
                    <Form.Label className="text-color-bca">Purpose</Form.Label>
                    <Form.Select
                      className="rounded-0"
                      onChange={(e) => handleFilter(e, "purpose")}
                    >
                      <option>Select Purpose</option>
                      {PROPERTY_PURPOSES.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-0 py-2">
                <Col>
                  <Form.Group controlId="locationId">
                    <Form.Label className="text-color-bca">Location</Form.Label>
                    <Form.Select
                      className="rounded-0"
                      onChange={(e) => handleFilter(e, "cityId")}
                    >
                      <option>Any</option>
                      {cities.map((city, index) => {
                        return (
                          <option key={index} value={city.id}>
                            {city.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-0 py-2">
                <Col>
                  <Form.Group controlId="propertyTypeId">
                    <Form.Label className="text-color-bca">
                      Property Type
                    </Form.Label>
                    <Form.Select
                      className="rounded-0"
                      onChange={(e) => handleFilter(e, "propertyType")}
                      defaultValue={propertyType}
                    >
                      <option value={'properties'}>Any</option>
                      {propertyTypes.map((pt, index) => {
                        return (
                          <option key={index} value={pt.alias}>
                            {pt.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4 py-2">
                <Col>
                  <Form.Group controlId="typeSearchId">
                    <Button
                      variant="warning"
                      type="submit"
                      className="mt-3 btn-block w-100 rounded-0"
                    >
                      Filter Results
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TypeFilterSection;
