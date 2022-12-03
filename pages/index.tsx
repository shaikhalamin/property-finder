import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import PropertyHeader from "@/components/header/PropertyHeader";
import Agents from "@/components/home/Agents";
import HowTo from "@/components/home/HowTo";
import PropertyFeatured from "@/components/home/PropertyFeatured";
import PropertyTypes from "@/components/home/PropertyTypes";
import Meta from "@/components/meta/Meta";
import { getAgents } from "@/data/api/agent";
import { getCities } from "@/data/api/city";
import { getFeatures } from "@/data/api/feature";
import { getProperties } from "@/data/api/property";
import { getPropertyTypes } from "@/data/api/property-types";
import { Agent } from "@/data/model/agent";
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
    agents: Agent[];
  };
};

const Home: NextPageWithLayout<HomeProps> = ({
  homeData: { properties, propertyTypes, cities, features, agents },
}) => {
  const { data: session } = useSession();
  if (session) {
    //console.log(session)
  }

  return (
    <>
      <Meta
        title="Property Finder | Best property finder at your nearest location"
        content="Best property finder at your nearest location"
      />
      <PropertyHeader
        propertyTypes={propertyTypes}
        cities={cities}
        features={features}
      />
      <PropertyTypes propertyTypes={propertyTypes} />
      <PropertyFeatured properties={properties} />
      <Agents agents={agents} />
      <HowTo />
      <PropertyAddBanner />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const property_url = `?page=1&perPage=6&order[updated_at]=DESC`;
  const [properties, propertyTypes, cities, features, agents] =
    await Promise.all([
      getProperties(property_url),
      getPropertyTypes(),
      getCities(),
      getFeatures(),
      getAgents(),
    ]);

  const data = {
    properties: properties.data as PropertyList,
    propertyTypes: propertyTypes.data as PropertyType[],
    cities: cities.data as City[],
    features: features.data as Feature[],
    agents: agents.data as Agent[],
  };

  //console.log(data.propertyTypes);

  return { props: { homeData: data } };
};

export default Home;
