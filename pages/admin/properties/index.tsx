import AdminLayout from "@/components/layouts/AdminLayout";
import { PropertyList } from "@/data/model/property-list";
import { API_URLS } from "@/data/utils/api.urls";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { Table, Button, Col, Row } from "react-bootstrap";

type PropertyListProps = {
  properties: PropertyList;
};

const Index: NextPageWithLayout<PropertyListProps> = ({ properties }) => {
  const router = useRouter();
  const [propertyList, setPropertyList] = useState(properties);

  return (
    <Row className="py-4 px-2">
      <Col className="">
        <Row>
          <Col className="mb-3 mt-2">
            <Button
              className="btn-md btn-primary"
              onClick={() => router.push("/admin/properties/create")}
            >
              + Add Property
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="border" responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Price</th>
                  <th>Purpose</th>
                  <th>Property Type</th>
                  <th>Edit</th>
                  <th>Preview Button</th>
                </tr>
              </thead>
              <tbody>
                {propertyList.data.length > 0 &&
                  propertyList.data.map((property) => (
                    <tr key={property.id}>
                      <td>{property.name}</td>
                      <td>{property.address}</td>
                      <td>${property.price}</td>
                      <td>{property.purpose}</td>
                      <td>{property.propertyType.name}</td>
                      <td>
                        <Button
                          variant="info"
                          size={`sm`}
                          onClick={() => console.log(property.id)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>Preview</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const property_url = `${API_URLS.properties}`;
  const res = await fetch(property_url);
  const properties = await res.json();
  return { props: { properties } };
};

export default Index;
