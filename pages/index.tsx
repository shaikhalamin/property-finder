import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import PropertyHeader from "@/components/header/PropertyHeader";
import Agents from "@/components/home/Agents";
import HowTo from "@/components/home/HowTo";
import PropertyFeatured from "@/components/home/PropertyFeatured";
import PropertyTypes from "@/components/home/PropertyTypes";
import { getCities } from "@/data/api/city";
import { getFeatures } from "@/data/api/feature";
import { getProperties } from "@/data/api/property";
import { getPropertyTypes } from "@/data/api/property-types";
import { City } from "@/data/model/city";
import { Feature } from "@/data/model/feature";
import { PropertyList } from "@/data/model/property-list";
import { PropertyType } from "@/data/model/property-type";
import { GetServerSideProps } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextPageWithLayout } from "./_app";

type HomeProps = {
  homeData: {
    properties: PropertyList;
    propertyTypes: PropertyType[];
    cities: City[];
    features: Feature[];
  };
};

const Home: NextPageWithLayout<HomeProps> = ({
  homeData: { properties, propertyTypes, cities, features },
}) => {
  const { data: session } = useSession();
  if (session) {
    //console.log(session)
  }

  return (
    <main>
      <PropertyHeader
        propertyTypes={propertyTypes}
        cities={cities}
        features={features}
      />
      <PropertyTypes propertyTypes={propertyTypes} />
      <PropertyFeatured properties={properties} />
      <Agents />
      <HowTo />
      <PropertyAddBanner />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const property_url = `?page=1&perPage=6`;
  const [properties, propertyTypes, cities, features] = await Promise.all([
    getProperties(property_url),
    getPropertyTypes(),
    getCities(),
    getFeatures(),
  ]);

  const data = {
    properties: properties.data as PropertyList,
    propertyTypes: propertyTypes.data as PropertyType[],
    cities: cities.data as City[],
    features: features.data as Feature[],
  };

  console.log(data.propertyTypes);

  return { props: { homeData: data } };
};

export default Home;
