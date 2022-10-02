import Footer from "../footer/footer";
import PropertyNavbar from "../navbar/property/PropertyNavbar";

interface ChildProps {
  children: React.ReactNode;
}
const PropertyLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <PropertyNavbar />
      {children}
      <Footer/>
    </>
  );
};

export default PropertyLayout;