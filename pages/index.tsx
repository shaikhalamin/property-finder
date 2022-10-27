import PropertyAddBanner from "@/components/common/property-item/PropertyAddBanner";
import PropertyHeader from "@/components/header/PropertyHeader";
import Agents from "@/components/home/Agents";
import HowTo from "@/components/home/HowTo";
import PropertyFeatured from "@/components/home/PropertyFeatured";
import PropertyTypes from "@/components/home/PropertyTypes";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  
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
