import PropertyCreate from "@/components/admin/properties/PropertyCreate";
import AdminLayout from "@/components/layouts/AdminLayout";
import { getCities } from "@/data/api/city";
import { getPropertyTypes } from "@/data/api/property-types";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps, NextPage } from "next";
import React, { ReactElement } from "react";

type FormHelpers = {
  propertyTypes: any;
  cities: any;
};

type AdminPropertyProps = {
  formsHelpers: FormHelpers;
};

const Index: NextPageWithLayout<AdminPropertyProps> = ({ formsHelpers }) => {
  console.log(formsHelpers.cities);
  return <PropertyCreate />;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [propertyTypes, cities] = await Promise.all([
    getPropertyTypes(),
    getCities(),
  ]);

  const helpers = {
    propertyTypes: propertyTypes.data,
    cities: cities.data,
  };

  return { props: { formsHelpers: helpers } };
};

export default Index;
