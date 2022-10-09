import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/components/navbar/property/property-navbar.module.css";
import { Button, NavDropdown } from "react-bootstrap";
import HamBurgerIcon from "../HamBurgerIcon";
import Link from "next/link";

const PropertyNavbar = () => {
  // return (
  //   <>
  //     <section className={`${styles.navBgColor}`}>
  //       <Container>
  //         <Navbar expand={"lg"} role="property-nav-role" collapseOnSelect={true} className={`py-4`}>
  //           <Container fluid>
  //             <Link href="/" passHref>
  //               <Navbar.Brand
  //                 role="general-navbar-brand-role"
  //                 className={`${styles.ft18} ${styles.ftBold}`}
  //               >
  //                 <span className="text-white">property</span>
  //                 <span className="text-warning">.finder</span>
  //               </Navbar.Brand>
  //             </Link>

  //             <Navbar.Toggle
  //               aria-controls="offcanvasNavbar"
  //               role="navbar-toggle-role"
  //               className="border-none"
  //             >
  //               <HamBurgerIcon />
  //             </Navbar.Toggle>
  //             {/* <GeneralNavbarOffCanvas {...user} /> */}
  //             <Navbar.Collapse id="responsive-navbar-nav" in={false}>
  //               <Nav
  //                 role="general-navbar-navigation-links-role"
  //                 className={`me-auto `}
  //               >
  //                 <Link href={`/properties`} passHref>
  //                   <Nav.Link
  //                     key={`properties-123`}
  //                     role={`properties-role`}
  //                     className={`text-white ${styles.ft14}`}
  //                   >
  //                     Properties
  //                   </Nav.Link>
  //                 </Link>
  //                 <Link href={`/agents`} passHref>
  //                   <Nav.Link
  //                     key={`agents-123`}
  //                     role={`agents-role`}
  //                     className={`text-white ${styles.ft14}`}
  //                   >
  //                     Agents
  //                   </Nav.Link>
  //                 </Link>
  //                 <Link href={`/accounts`} passHref>
  //                   <Nav.Link
  //                     key={`accounts-123`}
  //                     role={`accounts-role`}
  //                     className={`text-white ${styles.ft14}`}
  //                   >
  //                     Accounts
  //                   </Nav.Link>
  //                 </Link>
  //               </Nav>
  //               <Nav className={``}>
  //                 <Nav.Link
  //                   role="general-navbar-logged-in-user-email"
  //                   className={`text-white ${styles.ft14}`}
  //                 >
  //                   SIGN IN
  //                 </Nav.Link>
  //                 <Nav.Link
  //                   role="general-navbar-logged-in-user-email"
  //                   className={`text-white ${styles.ft14}`}
  //                 >
  //                   SIGN UP
  //                 </Nav.Link>

  //                 <Button
  //                   variant="success"
  //                   role="general-nav-logout-btn"
  //                   className={`ml-5 text-white ${styles.ft14} rounded-0`}
  //                   onClick={() => console.log("logging out")}
  //                 >
  //                   ADD PROPERTY
  //                 </Button>
  //               </Nav>
  //             </Navbar.Collapse>
  //           </Container>
  //         </Navbar>
  //       </Container>
  //     </section>
  //   </>
  // );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={`${styles.navBgColor} py-4`}
    >
      <Container>
        <Navbar.Brand
          href="/"
          role="general-navbar-brand-role"
          className={`${styles.ft18} ${styles.ftBold}`}
        >
          <span className="text-white">property</span>
          <span className="text-warning">.finder</span>
        </Navbar.Brand>

        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          role="navbar-toggle-role"
          className="border-none"
        >
          <HamBurgerIcon />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className={`text-white ${styles.ft14}`}>
              Properties
            </Nav.Link>
            <Nav.Link href="#pricing" className={`text-white ${styles.ft14}`}>
              Agents
            </Nav.Link>
            <Nav.Link href="#pricing" className={`text-white ${styles.ft14}`}>
              Accounts
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/auth/signin" className={`text-white ${styles.ft14}`}>
              Sign In
            </Nav.Link>
            <Nav.Link
              href="/signup"
              className={`text-white ${styles.ft14} mr-2`}
            >
              Sign Up
            </Nav.Link>

            <Button
              variant="warning"
              role="general-nav-logout-btn"
              className={`ml-5 text-dark ${styles.ftBold} ${styles.ft14} rounded-0`}
              onClick={() => console.log("logging out")}
            >
              Add Property
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PropertyNavbar;
