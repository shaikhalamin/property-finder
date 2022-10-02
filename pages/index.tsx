import PropertyHeader from "@/components/header/PropertyHeader";
import Agents from "@/components/home/Agents";
import HowTo from "@/components/home/HowTo";
import PropertyAddBanner from "@/components/home/PropertyAddBanner";
import PropertyFeatured from "@/components/home/PropertyFeatured";
import PropertyTypes from "@/components/home/PropertyTypes";
import PropertyLayout from "@/components/layouts/PropertyLayout";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <PropertyHeader />
      <PropertyTypes />
      <PropertyFeatured />
      <Agents />
      <HowTo />
      <PropertyAddBanner />
    </>
  );
};

export default Home;
