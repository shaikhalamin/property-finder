import AdminPropertyList from "@/components/admin/properties/AdminPropertyList";
import Loader from "@/components/common/loader/Loader";
import BasicPagination from "@/components/common/pagination/BasicPagination";
import { HandlePaginationProps } from "@/components/common/pagination/pagination-types";
import AdminLayout from "@/components/layouts/AdminLayout";
import { getCities } from "@/data/api/city";
import {
  BasicType,
  getProperties,
  getPropertiesByFilter,
  PropertiesFilter,
} from "@/data/api/property";
import { getPropertyTypes } from "@/data/api/property-types";
import { City } from "@/data/model/city";
import { PropertyList } from "@/data/model/property-list";
import { PropertyType } from "@/data/model/property-type";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { MdCategory, MdLocationCity, MdOutlineHomeWork } from "react-icons/md";

type AdminHomeProps = {
  adminHome: {
    properties: PropertyList;
    propertyTypes: PropertyType[];
    cities: City[];
  };
};

const Index: NextPageWithLayout<AdminHomeProps> = ({
  adminHome: { properties, propertyTypes, cities },
}) => {
  const [propertyList, setPropertyList] = useState(properties);
  const [active, setActive] = useState(1);
  const [filterClient, setFilterClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customFilter, setCustomFilter] = useState<PropertiesFilter>({
    basic: {
      page: properties.meta.page,
      perPage: properties.meta.per_page,
    },
    order: {
      updated_at: "DESC",
    },
  });

  const handlePagination = useCallback(
    (paginationFilter: HandlePaginationProps) => {
      setLoading(true);
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

  return (
    <Container className="py-5">
      <Row>
        <Col md="4">
          <Card>
            <Card.Body>
              <h4 className="ft-16 text-center">
                <span>
                  <MdOutlineHomeWork size={30} className="text-danger" />
                </span>
              </h4>
              <h4 className="mt-2 mb-2 text-center ft-16 text-uppercase">
                <span>Properties</span>
              </h4>
              <h4 className="mt-1 mb-1 text-center">
                {properties.meta.all_total}
              </h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <Card.Body>
              <h4 className="ft-16 text-center">
                <span>
                  <MdCategory size={30} className="text-info" />
                </span>
              </h4>
              <h4 className="mt-2 mb-2 text-center ft-16 text-uppercase">
                <span>Property types</span>
              </h4>
              <h4 className="mt-1 mb-1 text-center">{propertyTypes.length}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <Card.Body>
              <h4 className="ft-16 text-center">
                <span>
                  <MdLocationCity size={30} className="text-success" />
                </span>
              </h4>
              <h4 className="mt-2 mb-2 text-center ft-16 text-uppercase">
                <span>Location</span>
              </h4>
              <h4 className="mt-1 mb-1 text-center">{cities.length}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="py-2">
        <Col>
          {loading && <Loader />}
          {loading === false && propertyList.data.length > 0 && (
            <AdminPropertyList data={propertyList.data} />
          )}
        </Col>
      </Row>
      {propertyList.data.length > 0 && (
        <Row className="py-1">
          <Col>
            <hr className="mt-2" />
            <BasicPagination
              total={Number(
                Math.ceil(
                  propertyList.meta.all_total / propertyList.meta.per_page
                )
              )}
              active={active}
              onChange={handlePagination}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const userId = (session.user as any).id as string;
    const role = (session.user as any).role;
    let filterUrl = `?page=1&perPage=12&order[updated_at]=DESC`;
    if (role === "agent") {
      filterUrl += `&filters[userId]=${userId}`;
    }

    const [propertyRes, propertyTypes, cities] = await Promise.all([
      getProperties(filterUrl),
      getPropertyTypes(),
      getCities(),
    ]);

    const homeData = {
      properties: propertyRes.data,
      propertyTypes: propertyTypes.data,
      cities: cities.data,
    };

    return { props: { adminHome: homeData } };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Index;
