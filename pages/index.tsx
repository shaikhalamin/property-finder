import PropertyFeatured from "@/components/home/PropertyFeatured";
import PropertyTypes from "@/components/home/PropertyTypes";
import PropertyLayout from "@/components/layouts/PropertyLayout";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <PropertyTypes />
      <PropertyFeatured />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PropertyLayout>{page}</PropertyLayout>;
};

export default Home;
