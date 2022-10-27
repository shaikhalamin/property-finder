import { GetServerSideProps } from "next";
import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import BaseContainer from "@/components/common/container/BaseContainer";
import SectionTitleOrderBy from "@/components/property-type/SectionTitleOrderBy";
import TypeFilterSection from "@/components/property-type/TypeFilterSection";
import SingleProperty from "@/components/property-type/SingleProperty";
import BasicPagination from "@/components/common/pagination/BasicPagination";
import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import { HandlePaginationProps } from "@/components/common/pagination/pagination-types";
import {
  BasicType,
  getPropertiesByFilter,
  PropertiesFilter,
} from "@/data/api/property";
import { PropertyList } from "@/data/model/property-list";
import { API_URLS } from "@/data/utils/api.urls";

import axios from "axios";

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
  const [filterClient, setFilterClient] = useState(false);
  const [active, setActive] = useState(1);
  const [customFilter, setCustomFilter] = useState({
    basic: {
      page: properties.meta.page,
      perPage: properties.meta.per_page,
    },
    order: {
      created_at: "DESC",
    },
    filters: {
      propertyType: property_type,
    },
  } as PropertiesFilter);

  const handlePagination = useCallback(
    (paginationFilter: HandlePaginationProps) => {
      filterClient === false && setFilterClient(true);
      paginationFilter.page && setActive(paginationFilter.page);

      for (const [key, value] of Object.entries(paginationFilter)) {
        setCustomFilter((prevState) => {
          return {
            ...prevState,
            basic: {
              ...prevState.basic,
              [key as keyof BasicType]: Number(value),
            },
          };
        });
      }
    },
    [filterClient]
  );

  useEffect(() => {
    filterClient &&
      getPropertiesByFilter({
        basic: customFilter.basic,
        order: customFilter.order,
        filters: customFilter.filters,
      }).then((result) => {
        const propertyData = result?.data as PropertyList;
        setPropertyList((prevState) => {
          return {
            ...prevState,
            data: propertyData.data,
            meta: propertyData.meta,
          };
        });
      });
  }, [
    filterClient,
    customFilter.basic,
    customFilter.order,
    customFilter.filters,
  ]);

  const checkServerSession = async () => {
    console.log("checking server session");
    const response = await axios.get("/api/proxy");

    console.log(response.data);
  };

  return (
    <>
      <BaseContainer>
        <Button className="btn-warning" onClick={checkServerSession}>
          {" "}
          Check Server side session
        </Button>
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
                  <a
                    className="text-decoration-none"
                    href={`/properties/${property.slug}`}
                    key={property.id}
                  >
                    <SingleProperty property={property} />
                  </a>
                );
              })}

            {!propertyList.data.length && (
              <>
                <Row className="py-5 mb-5">
                  <Col>
                    <Container>
                      <Card className="border-0">
                        <h2 className="ml-5 ft-18 text-center">
                          No Properties found !
                        </h2>
                      </Card>
                    </Container>
                  </Col>
                </Row>
              </>
            )}

            {propertyList.data.length > 0 && (
              <>
                <hr className="mt-3" />
                <BasicPagination
                  total={Number(
                    Math.ceil(
                      propertyList.meta.all_total / propertyList.meta.per_page
                    )
                  )}
                  active={active}
                  onChange={handlePagination}
                />
              </>
            )}
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
