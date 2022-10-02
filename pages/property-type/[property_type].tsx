import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BaseContainer from "@/components/common/container/BaseContainer";
import SectionTitleOrderBy from "@/components/property-type/SectionTitleOrderBy";
import TypeFilterSection from "@/components/property-type/TypeFilterSection";
import { PropertyList } from "@/data/model/property-list";
import { API_URLS } from "@/data/utils/api.urls";
import { GetServerSideProps } from "next";
import SingleProperty from "@/components/property-type/SingleProperty";

type PropertyTypeProps = {
  properties: PropertyList;
};

const PropertyType: React.FC<PropertyTypeProps> = ({ properties }) => {
  const [propertyList, setPropertyList] = useState(properties);

  return (
    <BaseContainer>
      <Row className="py-2">
        <Col md="4" key={Number(Math.random()).toString()}>
          <TypeFilterSection />
        </Col>
        <Col md="8" key={Number(Math.random()).toString()}>
          <SectionTitleOrderBy title="Search Results" orderTitle="Sorted by" />
          {propertyList.data.length > 0 &&
            propertyList.data.map((property) => {
              return (
                <>
                  <SingleProperty property={property} />
                </>
              );
            })}
        </Col>
      </Row>
    </BaseContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { property_type } = query;
  const PROPERTY_URL = `${API_URLS.properties}?filters[propertyType]=${property_type}`;
  const res = await fetch(PROPERTY_URL);
  const properties = await res.json();
  return { props: { properties } };
};

export default PropertyType;
