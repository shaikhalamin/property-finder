import AdminPropertyList from "@/components/admin/properties/AdminPropertyList";
import BaseContainer from "@/components/common/container/BaseContainer";
import AdminLayout from "@/components/layouts/AdminLayout";
import { getCities } from "@/data/api/city";
import { getProperties } from "@/data/api/property";
import { getPropertyTypes } from "@/data/api/property-types";
import { City } from "@/data/model/city";
import { PropertyList } from "@/data/model/property-list";
import { PropertyType } from "@/data/model/property-type";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import React, { ReactElement } from "react";
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
  return (
    <BaseContainer>
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
                {properties.data.length}
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
      <Row className="py-3">
        <Col>
          <AdminPropertyList data={properties.data} />
        </Col>
      </Row>
    </BaseContainer>
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
    let filterUrl = `?page=1&perPage=20&order[updated_at]=DESC`;
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
