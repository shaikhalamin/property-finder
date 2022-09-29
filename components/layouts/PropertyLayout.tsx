import Footer from "../footer/footer";
import PropertyHeader from "../header/PropertyHeader";
import PropertyNavbar from "../navbar/property/PropertyNavbar";

interface ChildProps {
  children: React.ReactNode;
}
const PropertyLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <PropertyNavbar />
      <PropertyHeader />
      {children}
      <Footer/>
    </>
  );
};

export default PropertyLayout;