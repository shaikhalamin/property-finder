import { Row, Col, Nav } from "react-bootstrap";
import AdminNavbar from "../navbar/admin/AdminNavbar";
import { MdDashboard,MdCall } from "react-icons/md";
import { FaRegUser,FaBuilding,FaHandshake } from "react-icons/fa";
import SideNavBar from "./sidebar/SideNavBar";

interface ChildProps {
  children: React.ReactNode;
}
const AdminLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <Row>
        <Col md="2" className="border">
          <Row>
            <Col className="min-vh-100">
              {/* <div className="px-3 ft-14 mt-4 text-secondary">MAIN</div>
              <Nav className="flex-column px-4">
                <Nav.Link href="/home">
                  <span style={{ marginRight: "5px" }}>
                    <MdDashboard size={21} />
                  </span>
                  <span
                    className="text-dark ft-13"
                  >
                    Dashboard
                  </span>
                </Nav.Link>
              </Nav> */}

              <SideNavBar />

            </Col>
          </Row>
        </Col>
        <Col md="10">{children}</Col>
      </Row>

      <footer>
        <p>This is footer</p>
      </footer>
    </>
  );
};

export default AdminLayout;
