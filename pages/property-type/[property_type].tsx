import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BaseContainer from "@/components/common/container/BaseContainer";
import SectionTitleOrderBy from "@/components/property-type/SectionTitleOrderBy";
import TypeFilterSection from "@/components/property-type/TypeFilterSection";
import { PropertyList } from "@/data/model/property-list";
import { API_URLS } from "@/data/utils/api.urls";
import { GetServerSideProps } from "next";
import SingleProperty from "@/components/property-type/SingleProperty";
import BasicPagination from "@/components/common/pagination/BasicPagination";
import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import { HandlePaginationProps } from "@/components/common/pagination/pagination-types";
import { getProperties } from "@/data/api/property";
import { generatePropertyFilterUrl } from "@/components/property-type/property-type.helpers";

type PropertyTypeProps = {
  properties: PropertyList;
  property_url: string;
  property_type: string;
};

const PropertyType: React.FC<PropertyTypeProps> = ({
  properties,
  property_type,
}) => {
  const [propertyList, setPropertyList] = useState(properties);
  const [customFilter, setCustomFilter] = useState({
    basic: {
      page: properties.meta.page.toString(),
      perPage: properties.meta.per_page.toString(),
    },
    order: {
      created_at: "DESC",
    },
    filters: {
      propertyType: property_type,
    },
  });

  const handlePagination = async (paginationFilter: HandlePaginationProps) => {
    for await (const [key, value] of Object.entries(paginationFilter)) {
      setCustomFilter((prevState) => ({
        ...prevState,
        basic: {
          ...prevState.basic,
          [key]: value,
        },
      }));
    }

    console.log(generatePropertyFilterUrl(API_URLS.properties,customFilter));

    ///const filteredProperty = await getProperties(generateUrl());

    //console.log(filteredProperty.data);
  };

  return (
    <>
      <BaseContainer>
        <Row className="py-2">
          <Col md="4" key={Number(Math.random()).toString()}>
            <TypeFilterSection />
          </Col>
          <Col md="8" key={Number(Math.random()).toString()}>
            <SectionTitleOrderBy
              title="Search Results"
              orderTitle="Sorted by"
            />
            {propertyList.data.length > 0 &&
              propertyList.data.map((property) => {
                return (
                  <>
                    <SingleProperty property={property} />
                  </>
                );
              })}

            <hr className="mt-3" />
            <BasicPagination
              total={propertyList.meta.all_total}
              perPage={propertyList.meta.per_page}
              onChange={handlePagination}
            />
          </Col>
        </Row>
      </BaseContainer>
      <PropertyAddBanner />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { property_type } = query;
  const property_url = `${API_URLS.properties}?filters[propertyType]=${property_type}`;
  const res = await fetch(property_url);
  const properties = await res.json();
  return { props: { properties, property_type } };
};

export default PropertyType;
