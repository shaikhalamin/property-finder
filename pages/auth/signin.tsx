import BaseContainer from "@/components/common/container/BaseContainer";
import React, { SyntheticEvent, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      const res = await signIn("credentials", {
        username: username,
        password: password,
        redirect:false
      })

      if (res?.ok && res.error == null) {
        const url = new URL(res?.url as string);
        const callBackUrl = url.searchParams.get("callbackUrl");
        if (callBackUrl) {
          router.push(callBackUrl as string);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <BaseContainer>
    {/* <Row className="">
      <Col md={{ span: 6, offset: 3 }} >
          <h1 className="ft-20 text-center bg-dark py-2">
          <span className="text-white">property</span>
          <span className="text-warning">.inder</span>
          </h1>
      </Col>
    </Row> */}
      <Row className="py-3">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Row>
                <Col md="12">
                  <h3 className="text-center ft-24 fw-bold">Login</h3>
                </Col>
              </Row>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={({ target }) => setUsername(target.value)}
                      placeholder="Enter Username"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      placeholder="Password"
                    />
                  </Form.Group>
                </Row>
                {/* <Row className="py-2">
                  <Col md="12">
                    <div>Forgot password ?</div>
                  </Col>
                </Row> */}
                <Row className="py-3">
                  <Col md="12" className="">
                    <Button variant="warning" type="submit" className="w-100">
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
