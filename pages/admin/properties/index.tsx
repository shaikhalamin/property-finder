import { GetServerSideProps } from "next";
import React, { ReactElement, useState } from "react";
import AdminPropertyList from "@/components/admin/properties/AdminPropertyList";
import AdminLayout from "@/components/layouts/AdminLayout";
import { PropertyList } from "@/data/model/property-list";
import { NextPageWithLayout } from "@/pages/_app";
import { getProperties } from "@/data/api/property";

type PropertyListProps = {
  properties: PropertyList;
};

const Index: NextPageWithLayout<PropertyListProps> = ({ properties }) => {
  const [propertyList, setPropertyList] = useState(properties);
  return <AdminPropertyList data={propertyList.data} />;
};

Index.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await getProperties();
  const properties = result.data;
  return { props: { properties } };
};

export default Index;
