import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Nav, Dropdown, Spinner } from "react-bootstrap";
import { ApiUser } from "@/data/types/auth";

const ProfileNavItem = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span style={{ marginLeft: "5px" }}>Loading...</span>
      </>
    );
  } else {
    const user = (session as any).user as ApiUser;
    return (
      <Nav>
        <Dropdown align={'end'}>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            {user.username} 
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/admin/users/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="/admin/home">Dashboard</Dropdown.Item>
            <Dropdown.Item onClick={()=> signOut()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    );
  }
};

export default ProfileNavItem;
