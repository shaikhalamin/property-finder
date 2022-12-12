import { GetServerSideProps } from "next";
import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Card, Container, Spinner, Button } from "react-bootstrap";
import BaseContainer from "@/components/common/container/BaseContainer";
import SectionTitleOrderBy from "@/components/property-type/SectionTitleOrderBy";
import TypeFilterSection from "@/components/property-type/TypeFilterSection";
import SingleProperty from "@/components/property-type/SingleProperty";
import BasicPagination from "@/components/common/pagination/BasicPagination";
import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import { HandlePaginationProps } from "@/components/common/pagination/pagination-types";
import {
  BasicType,
  getProperties,
  getPropertiesByFilter,
  KeyValueObject,
  PropertiesFilter,
  PropertyQueryFilters,
} from "@/data/api/property";
import { PropertyList } from "@/data/model/property-list";
import { getPropertyTypes } from "@/data/api/property-types";
import { getCities } from "@/data/api/city";
import { getFeatures } from "@/data/api/feature";
import { PropertyType } from "@/data/model/property-type";
import { City } from "@/data/model/city";
import { Feature } from "@/data/model/feature";
import { NextPageWithLayout } from "../_app";
import { generateFilterUrl, removeFalsy } from "@/data/utils/lib";
import { Dictionary } from "lodash";
import qs from "qs";
import Meta from "@/components/meta/Meta";
import SubmitButton from "@/components/common/form/SubmitButton";

type PropertyTypeProps = {
  data: {
    properties: PropertyList;
    propertyTypes: PropertyType[];
    cities: City[];
    features: Feature[];
    queryParams: Dictionary<string | number>;
  };
};

const PropertyType: NextPageWithLayout<PropertyTypeProps> = ({
  data: { properties, propertyTypes, cities, features, queryParams },
}) => {
  const [propertyList, setPropertyList] = useState(properties);
  const [filterClient, setFilterClient] = useState(false);
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [customFilter, setCustomFilter] = useState<PropertiesFilter>({
    basic: {
      page: properties.meta.page,
      perPage: properties.meta.per_page,
    },
    filters: {
      ...queryParams,
    },
  });

  // console.log("customFilter",customFilter);

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
        setLoading(false);
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

  const handlePropertySorting = useCallback(
    (data: string) => {
      filterClient === false && setFilterClient(true);
      const [key, value] = data.split(":");
      setCustomFilter((prevState) => {
        return {
          ...prevState,
          order: Object.assign(
            {},
            { [key as keyof KeyValueObject]: value.toUpperCase() as string }
          ),
        };
      });
    },
    [filterClient]
  );

  const handleAllFilter = useCallback((key: string, value: string) => {
    setFilterClient(true);
    setLoading(true);
    setCustomFilter((prevState) => {
      return {
        ...prevState,
        filters: {
          ...prevState.filters,
          [key as keyof PropertyQueryFilters]:
            value.toLocaleLowerCase() === "any"
              ? ""
              : (value.toLocaleLowerCase() as string),
        },
      };
    });
  }, []);

  return (
    <>
      <Meta
        title="Properties | Property Finder | Best property finder at your nearest location"
        content="Property list page | Filter paginate and sort property easily"
      />
      <BaseContainer>
        <Row className="py-2 min-vh-100">
          <Col md="4">
            <TypeFilterSection
              propertyTypes={propertyTypes}
              cities={cities}
              features={features}
              filterValue={customFilter}
              onChange={handleAllFilter}
            />
          </Col>
          <Col md="8">
            <SectionTitleOrderBy
              title="Search Results"
              orderTitle="Sorted by"
              onChange={handlePropertySorting}
            />
            {propertyList.data.length > 0 &&
              loading === false &&
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

            {!propertyList.data.length && loading === false && (
              <>
                <Row className="py-5 mb-5">
                  <Col md={{ span: 6, offset: 3 }} className="py-5">
                    <Container>
                      <Card className="border mt-5">
                        <h4 className="ft-18 ml-5 text-center py-1 mt-2 ">
                          No Properties Found !
                        </h4>
                      </Card>
                    </Container>
                  </Col>
                </Row>
              </>
            )}

            {loading === true && (
              <>
                <Row className="py-5 mb-5">
                  <Col md={{ span: 6, offset: 3 }} className="py-5">
                    <Container>
                      <Card className="border-0 mt-5">
                        <Button variant="outline-dark" className="list_loader">
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span style={{ marginLeft: "5px" }}>Loading...</span>
                        </Button>
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
  const { filterUrl, queryParams } = generateFilterUrl(query as KeyValueObject);
  const [properties, propertyTypes, cities, features] = await Promise.all([
    getProperties(`?${filterUrl}`),
    getPropertyTypes(),
    getCities(),
    getFeatures(),
  ]);

  const data = {
    properties: properties.data as PropertyList,
    propertyTypes: propertyTypes.data as PropertyType[],
    cities: cities.data as City[],
    features: features.data as Feature[],
    queryParams: queryParams,
  };

  return { props: { data } };
};

export default PropertyType;
