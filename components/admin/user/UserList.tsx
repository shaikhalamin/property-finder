import SubmitButton, {
  ButtonSize,
} from "@/components/common/form/SubmitButton";
import { User } from "@/data/model/user";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  const router = useRouter();
  const [buttonRef, setButtonRef] = useState<number | string>("");
  return (
    <Row className="py-4 px-2">
      <Col className="">
        <Row>
          <Col className="mb-3 mt-2">
            <Button
              className="btn-md btn-primary rounded-0"
              onClick={() => alert("Insufficient admin permission")}
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
                  <th className="ft-14 text-uppercase">FirstName</th>
                  <th className="ft-14 text-uppercase">LastName</th>
                  <th className="ft-14 text-uppercase">Username</th>
                  <th className="ft-14 text-uppercase">Email</th>
                  <th className="ft-14 text-uppercase">Phone</th>
                  <th className="ft-14 text-uppercase">Role</th>
                  <th className="ft-14 text-uppercase">Edit</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="ft-14 text-uppercase">{user.firstName}</td>
                      <td className="ft-14 text-uppercase">{user.lastName}</td>
                      <td className="ft-14 text-uppercase">{user.username}</td>
                      <td className="ft-14 text-uppercase">{user.email}</td>
                      <td className="ft-14 text-uppercase">{user.phone}</td>
                      <td className="ft-14 text-uppercase">{user.role}</td>
                      <td>
                        <SubmitButton
                          title="Edit"
                          variant="warning"
                          isLoading={false}
                          size={ButtonSize.SM}
                          buttonCls={`rounded-0`}
                          loadingTitle="Redirecting"
                          btnId={user.id}
                          btnRef={buttonRef}
                          onClick={() => {
                            setButtonRef(user.id);
                            router.push(`/admin/users/edit/${user.id}`);
                          }}
                        />
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
