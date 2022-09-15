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
      <footer>
        <p>This is property footer</p>
      </footer>
    </>
  );
};

export default PropertyLayout;