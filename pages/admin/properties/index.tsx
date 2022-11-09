import PropertyCreate from "@/components/admin/properties/PropertyCreate";
import AdminLayout from "@/components/layouts/AdminLayout";
import { getCities } from "@/data/api/city";
import { getFeatures } from "@/data/api/feature";
import { getPropertyTypes } from "@/data/api/property-types";
import { PropertyFormHelpers } from "@/data/types/property/property";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import React, { ReactElement } from "react";


type AdminPropertyProps = {
  formsHelpers: PropertyFormHelpers;
};

const Index: NextPageWithLayout<AdminPropertyProps> = ({ formsHelpers }) => {
  // const { data: session } = useSession();
  // if(session){
  //   console.log(session)
  // }
  return <PropertyCreate data={formsHelpers} />;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const [propertyTypes, cities,features] = await Promise.all([
    getPropertyTypes(),
    getCities(),
    getFeatures()
  ]);

  const helpers = {
    propertyTypes: propertyTypes.data,
    cities: cities.data,
    features: features.data
  };

  return { props: { formsHelpers: helpers } };
};

export default Index;
