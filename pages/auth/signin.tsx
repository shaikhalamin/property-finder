import BaseContainer from "@/components/common/container/BaseContainer";
import React, { SyntheticEvent, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      const login = await signIn("credentials", {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: "http://localhost:4001",
      });

      console.log("login data in client",login)
    } catch (error) {}
  };

  return (
    <BaseContainer>
      <Row className="py-3">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h3 className="text-center ft-18">Login</h3>
                </Col>
              </Row>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={({ target }) => setUsername(target.value)}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      placeholder="Password"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </BaseContainer>
  );
};

export default SignIn;