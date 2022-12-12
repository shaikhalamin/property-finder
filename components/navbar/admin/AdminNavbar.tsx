import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfileNavItem from "./ProfileNavItem";

const AdminNavbar = () => {
  
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container className="px-4" fluid>
          <Navbar.Brand href="/admin/home">
            <span className="text-white">property</span>
            <span className="text-warning">.finder</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-0"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="rounded-0">
                  <span className="text-white">Search</span>
                </Button>
              </Form>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <ProfileNavItem />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
