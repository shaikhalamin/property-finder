import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AdminNavbar = () => {
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container fluid className="ml-5 mr-5">
          <Navbar.Brand href="/">
            <span className="text-dark">Property Finder</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <span className="text-dark">Home</span>
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-0"
                aria-label="Search"
              />
              <Button variant="outline-success" className="rounded-0">
                <span className="text-dark">Search</span>
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#home">
              <span className="text-dark">Language</span>
            </Nav.Link>
            <Nav.Link href="#home">
              <span className="text-dark">Notification</span>
            </Nav.Link>
            <Nav.Link href="#home">
              <span className="text-dark">Message</span>
            </Nav.Link>
            <Nav.Link href="#home">
              <span className="text-dark">Profile</span>
            </Nav.Link>
            <Nav.Link href="#home">
              <span className="text-dark">Settings</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
