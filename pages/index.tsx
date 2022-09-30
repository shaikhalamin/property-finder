import Agents from "@/components/home/Agents";
import HowTo from "@/components/home/HowTo";
import PropertyAddBanner from "@/components/home/PropertyAddBanner";
import PropertyFeatured from "@/components/home/PropertyFeatured";
import PropertyTypes from "@/components/home/PropertyTypes";
import PropertyLayout from "@/components/layouts/PropertyLayout";
import BusSit from "@/components/bus-booking/BusSit";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <PropertyTypes />
      <PropertyFeatured />
      <Agents />
      <HowTo />
      <PropertyAddBanner />
      <BusSit />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PropertyLayout>{page}</PropertyLayout>;
};

export default Home;
