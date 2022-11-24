import { User } from "@/data/model/user";
import router, { useRouter } from "next/router";
import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  const router = useRouter();
  return (
    <Row className="py-4 px-2">
      <Col className="">
        <Row>
          <Col className="mb-3 mt-2">
            <Button
              className="btn-md btn-primary"
              onClick={() => alert("Need to setup user creation from admin")}
            >
              + Add User
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Table className="border" responsive>
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Preview Button</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => (
                    <tr key={user.id.toString()}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.role}</td>
                      <td>
                        <Button
                          variant="info"
                          size={`sm`}
                          onClick={() => router.push(`/agents`)}
                        >
                          Preview
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserList;
